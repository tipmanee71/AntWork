const controller = require("./../controllers/healthCheckCategory.controller.js");
const { authJwt } = require("../middleware");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get(
    "/api/HealthCheckCategory",
    [authJwt.verifyToken],
    controller.getHealthCheckCategory
  );
};
