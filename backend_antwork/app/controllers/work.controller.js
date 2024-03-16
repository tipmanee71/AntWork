const db = require("../models");
const Work = db.work;

async function doGetAllwork(req, res) {
  try {
    console.log("------------------GetAllwork------------------");
    // let data = {...req.body,
    //   idCompany: req.params.idCompany,
    //   createBy: req.params.idEmployees,
    //   createDate: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    //   isActive: 1
    // }

    // let keys = Object.keys(data)
    // let values = Object.values(data)

    // let result = await pool.query(
    //   `INSERT INTO UniHR.Training_PositionCourse (${keys.join()}) VALUE (?)`,
    //   [values]
    // )
    // if (result.insertId > 0) {
    //   return res.status(200).send({ rows: result.insertId });
    // } else {
    //   return res.status(500).send({ message: "error" });
    // }
      return res.status(200).send(Work);

  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}
exports.getAllwork = (req, res) => {
  try {
    doGetAllwork(req, res);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
