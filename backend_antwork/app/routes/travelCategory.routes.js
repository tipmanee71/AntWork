const { authJwt } = require("../middleware");
const travelCategoryController = require("./../controllers/travelCategory.controller.js");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/travelCategory",
    [authJwt.verifyToken],
    travelCategoryController.allTravelCategory
  );
};
