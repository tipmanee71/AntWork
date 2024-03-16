var pool = require("../connection.js");
var poolUniHR = require("../connectionUniHR.js");
const dayjs = require("dayjs");

const employeesService = require("../service/employees.js");


async function doGetEmployeesProfilePublic(req, res) {
  try {
    let result = null;
    console.log(req.params);

    if(req.params.type === "USER_FREELANCE" && !req.params.idCompany){
      result = await employeesService
        .doGetFreelanceProfilePublic(parseInt(req.params.idEmployees))
        .then(function (result){
          if(result)
          return Object.values(JSON.parse(JSON.stringify(result)))[0]
        })
        .catch((err)=>{
          console.log(err);
        })
    }else{
      return res.status(404).send({ message: "Invalid Token." });
    }

    if(result){
      if(req.params.type === "USER_FREELANCE" && result.idRole === 1){
        let resultOccupation = await employeesService
          .doGetFreelanceOccupationByIdEmp(parseInt(req.params.idEmployees))
          .then(function (result) {
            if (result) return Object.values(JSON.parse(JSON.stringify(result)));
          })
          .catch((err) => {
            console.log(err);
          });
        let resultSkill = await employeesService
          .doGetFreelanceSkillByIdEmp(parseInt(req.params.idEmployees))
          .then(function (result) {
            if (result) return Object.values(JSON.parse(JSON.stringify(result)));
          })
          .catch((err) => {
            console.log(err);
          });
        let resultEducations = await employeesService
          .doGetFreelanceEducationsByIdEmp(parseInt(req.params.idEmployees))
          .then(function (result) {
            if (result) return Object.values(JSON.parse(JSON.stringify(result)));
          })
          .catch((err) => {
            console.log(err);
          });
        
        result.roles = ['ROLE_FREELANCE']
        result.occupation = resultOccupation;
        result.skill = resultSkill;
        result.educations = resultEducations;

        // let ImagePath = uniBucket.file(
        //   `employees/profile/${result.idCompany}/${result.imageName}`
        // );
        // let ImageURL = null;
        // if (await ImagePath.exists().then((res) => res[0])) {
        //   ImageURL = await getSignedUrlService.getSignedUrl(
        //     `employees/profile/${result.idCompany}/${result.imageName}`
        //   );
        // }
        return res.status(200).send(result);
      }else{
        return res.status(404).send({ message: "Invalid Token." });
      }
    }else{
      return res.status(404).send({ message: "Employee not found." });
    }
  }catch (err){
    res.status(500).send({ message: error.message });
  }
}
exports.userProfile = (req, res) => {
  try {
    doGetEmployeesProfilePublic(req, res);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};