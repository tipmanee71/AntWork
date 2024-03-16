const { authJwt } = require("../middleware");
const departmentController = require("./../controllers/department.controller.js");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/departments",
    [authJwt.verifyToken],
    departmentController.allDepartment
  );
};
