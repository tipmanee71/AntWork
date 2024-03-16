var pool = require("../connection.js");
const { Storage } = require("@google-cloud/storage");
const storage = new Storage({ keyFilename: "antjob-storage.json" });
const uniBucket = storage.bucket("unihr-bucket");

exports.doGetFreelanceProfilePublic = async function doGetFreelanceProfilePublic(idEmployees) {
  return await pool.query(
    `SELECT Employees.idEmployees, Employees.email, Employees.telephoneMobile, Employees.firstname_EN, Employees.lastname_EN, Employees.idRole, Employees.isActive, Employees.createDate, Employees.createBy, 
      Employees.imageName, Employees.updateDate, Employees.updateBy, Role.roleName
      FROM AntWork.Employees 
      
      LEFT JOIN Role on Role.idRole = Employees.idRole

      WHERE Employees.idEmployees = ?`,
    idEmployees
  );
};

exports.doGetFreelanceOccupationByIdEmp = async function doGetFreelanceOccupationByIdEmp(idEmployees) {
  return await pool.query(`SELECT * from Occupation WHERE idEmployees=?`, [
    parseInt(idEmployees),
  ]);
};

exports.doGetFreelanceSkillByIdEmp = async function doGetFreelanceSkillByIdEmp(idEmployees) {
  return await pool.query(`SELECT * from Skill WHERE idEmployees=?`, [
    parseInt(idEmployees),
  ]);
};

exports.doGetFreelanceEducationsByIdEmp = async function doGetFreelanceEducationsByIdEmp(idEmployees) {
  return await pool.query(`SELECT * from Educations WHERE idEmployees=?`, [
    parseInt(idEmployees),
  ]);
};