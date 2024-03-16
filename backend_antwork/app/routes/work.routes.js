const { authJwt } = require("../middleware");
const workController = require("../controllers/work.controller.js");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // app.get( "/api/work/getAll", [authJwt.verifyToken], workerController.workerProfile );
  app.get( "/api/work/getAll", workController.getAllwork );
};