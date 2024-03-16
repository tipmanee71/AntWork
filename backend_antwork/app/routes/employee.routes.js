const { authJwt } = require("../middleware/index.js");
const employeeController = require("../controllers/employee.controller")

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/profile",
    [authJwt.verifyToken],
    employeeController.userProfile
  );
  
};
