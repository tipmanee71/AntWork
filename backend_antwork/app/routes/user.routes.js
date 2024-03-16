const { authJwt } = require("../middleware");
const userController = require("./../controllers/user.controller.js");
const multer = require("multer");
const upload = multer();

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/users/profile/:id",
    [authJwt.verifyToken],
    userController.userProfile
  );

  app.get(
    "/api/users",
    [authJwt.verifyToken],
    userController.allUser
  );

  app.post(
    "/api/users/newAccount/:type",
    [upload.fields([{ name: "profileImg", maxCount: 1}])],
    userController.registerAccount
  );

  // app.get(
  //   "/api/test/mod",
  //   [authJwt.verifyToken, authJwt.isModerator],
  //   controller.moderatorBoard
  // );

  // app.get(
  //   "/api/test/admin",
  //   [authJwt.verifyToken, authJwt.isAdmin],
  //   controller.adminBoard
  // );
};
