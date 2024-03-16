const { authJwt } = require("../middleware");
const mainCategoryController = require("./../controllers/mainCategory.controller.js");

module.exports = (app) => {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/mainCategory",
    [authJwt.verifyToken],
    mainCategoryController.allMainCategory
  );
};
