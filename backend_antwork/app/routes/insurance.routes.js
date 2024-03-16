const { authJwt } = require("../middleware");
const insuranceController = require("./../controllers/Insurance.controller.js");

module.exports = (app) => {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/insurance",
    [authJwt.verifyToken],
    insuranceController.allInsurance
  );

  app.get(
    "/api/insurance/:id",
    [authJwt.verifyToken],
    insuranceController.detailInsurance
  );
};
