const db = require("../models");
const Users = db.users;
const authService = require("../service/auth");
var pool = require("../connection.js");
var poolUniHR = require("../connectionUniHR.js");
const dayjs = require("dayjs");

async function doRegisterAccount(req, res) {
    try{
  let data = req.body
  let files = req.files
  let formData=[]
  Object.keys(data).map((k) => {
    formData[k] = JSON.parse(data[k]);
  });
  let occupation = formData['occupation']
  delete formData['occupation']
  let skill = formData['skill']
  delete formData['skill']
  delete formData['']
  

  let hashPbkdf2 = await authService.hashPassword("12345678");

  let adminResult = await pool.query(`
    SELECT idEmployees, email, username, telephoneMobile
    FROM Employees 
    WHERE username IN (?) OR email = ? OR telephoneMobile = ?
    ORDER BY username, email, telephoneMobile
  `,[formData['username'], formData['email'], formData['telephoneMobile']])

  let CheckDuplicate = []
  console.log(userResult);
  userResult.forEach((emp)=>{
    if (String(emp.username).toLowerCase() === String(formData['username']).toLowerCase()){
      CheckDuplicate.push(emp)
      throw new Error(`เกิดข้อผิดพลาดมี Username นี้อยู่แล้ว`)
    }else if(emp.telephoneMobile === formData['telephoneMobile']){
      CheckDuplicate.push(emp)
      throw new Error(`เกิดข้อผิดพลาดมีเบอร์โทรศัพท์นี้อยู่แล้ว`)
    }else if(emp.email === formData['email']){
      CheckDuplicate.push(emp)
      throw new Error(`เกิดข้อผิดพลาดมีอีเมลล์นี้อยู่แล้ว`)
    }
  })

  if(CheckDuplicate && CheckDuplicate.length > 0){
    return res.status(500).send({ message: "ERROR_DUPLICATE_EMPLOYEE" });
  }else{
    pool.getConnection((err, connection) => {
      if(err){
        throw err;
      }
      connection.beginTransaction(async (err)=> {
        try{
          if(err){
            connection.rollback(function () {
              connection.release();
            });
          }else{
            formData = {
              ...formData,
              createDate: dayjs().format("YYYY-MM-DD HH:mm:ss"),
              updateDate: dayjs().format("YYYY-MM-DD HH:mm:ss"),
              isActive: 1,
            }
            if(req.params && req.params.type && req.params.type === "admin"){
              formData.idRole = 2
            }
            if(files.profileImg){
              formData.imageName = Buffer.from(files.profileImg[0].originalname, "latin1").toString("utf8")
            }
            const InsertEmployeesResult = await connection
              .promise().query(
                `
                INSERT INTO Employees (${Object.keys(formData).join()}) VALUES (?)
              `,
                [Object.values(formData)]
              )
              .then((row) => {
                console.log("Result Insert Employees ",row.insertId);
                return row.insertId;
              })
              .catch((err) => {
                console.log(err);
                throw new Error(`เกิดข้อผิดพลาด ในการเพิ่มตาราง Employees`);
              });

            const EmployeeInsertedResult = await connection
              .promise().query(`
                SELECT idEmployees, email, username
                FROM Employees
                WHERE username IN (?)
              `,
                // [employeeEmail]
                [formData['username']]
              )
              .then((row) => row[0])
              .catch((err) => {
                console.log(err);
                throw new Error(`เกิดข้อผิดพลาด ในการดึงข้อมูล Employees`);
              });
            if(files.profileImg){
              const pathFile = `course/license/${EmployeeInsertedResult[0].idEmployees}/institution/${formData.profileImg}`
              console.log(pathFile);
              // await uploadFile(pathFile, files.profileImg[0]).catch((error)=>{
              //   throw error;
              // })
            }
            const InsertUserAuthenResult = await connection
              .promise().query(
                `
                INSERT INTO UserAuthen(idEmployees, password) VALUES (?,?)
              `,
                [EmployeeInsertedResult[0].idEmployees, hashPbkdf2.hash]
              )
              .then((row) => {
                console.log("Result Insert UserAuthen ",row.affectedRows);
                return row[0];
              })
              .catch((err) => {
                console.log(err);
                throw new Error(`เกิดข้อผิดพลาด ในการเพิ่มตาราง UserAuthen`);
              });

            const InsertUserVerifyResult = await connection
              .promise().query(
                `
                INSERT INTO UserVerify (idEmployees, generateSalt, saltSize) VALUES (?,?,?)
              `,
                [EmployeeInsertedResult[0].idEmployees, hashPbkdf2.salt, 64]
              )
              .then((row) => {
                console.log("Result Insert UserVerify ",row.affectedRows);
                return row;
              })
              .catch((err) => {
                console.log(err);
                throw new Error(`เกิดข้อผิดพลาด ในการเพิ่มตาราง UserVerify`);
              });

            if(occupation.length > 0){
              let occupationKey = [...Object.keys(occupation[0]),"idEmployees"]
              await connection.promise().query(`
                INSERT INTO Occupation (${occupationKey.join(", ")}) VALUES ?
              `,
                [occupation.map((item)=>[...Object.values(item),EmployeeInsertedResult[0].idEmployees])]
              )
              .then((row) => {
                console.log("Result Insert Occupation ",row.affectedRows);
                return row;
              })
              .catch((err) => {
                console.log(err);
                throw new Error(`เกิดข้อผิดพลาด ในการเพิ่มตาราง Occupation`);
              });
            }
            if(skill.length > 0){
              let skillKey = [...Object.keys(skill[0]),"idEmployees"]
              await connection.promise().query(`
                INSERT INTO Skill (${skillKey.join(", ")}) VALUES ?
              `,
                [skill.map((item)=>[...Object.values(item),EmployeeInsertedResult[0].idEmployees])]
              )
              .then((row) => {
                console.log("Result Insert Skill ",row.affectedRows);
                return row;
              })
              .catch((err) => {
                console.log(err);
                throw new Error(`เกิดข้อผิดพลาด ในการเพิ่มตาราง Skill`);
              });
            }
            if(education.length > 0){
              let educationKey = [...Object.keys(education[0]),"idEmployees"]
              await connection.promise().query(`
                INSERT INTO Educations (${educationKey.join(", ")}) VALUES ?
              `,
                [education.map((item)=>[...Object.values(item),EmployeeInsertedResult[0].idEmployees])]
              )
              .then((row) => {
                console.log("Result Insert Education ",row.affectedRows);
                return row;
              })
              .catch((err) => {
                console.log(err);
                throw new Error(`เกิดข้อผิดพลาด ในการเพิ่มตาราง Education`);
              });
            }

            connection.commit(async function (err) {
              if (err) {
                connection.rollback(function () {
                  connection.release();
                });
              } else {
                console.log("Success");
                connection.release();
                return res.status(200).send({ success: true });
              }
            });
          }
        }catch(err){
          console.log(err);
          connection.rollback(function () {
            connection.release();
          });
          console.info("Rollback successful");
          return res.status(500).json({
            success: false,
            message: err.message,
          });
        }
      })
    })
  }
 }catch (error) {
    console.log(error);
    return res.status(500).send({ message: error.message });
  }
}