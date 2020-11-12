module.exports = (app) => {
  const ga = require("../controllers/ga.controllers");
  const user = require("../controllers/user.controllers");

  let router = require("express").Router();

  //GA System Routes
  router.post("/ga/", ga.create);
  router.get("/ga/", ga.findAll);
  router.get("/ga/:id", ga.findOne);
  router.put("/ga/:id", ga.update);
  router.delete("/ga/:id", ga.detele);
  router.delete("/ga/", ga.deleteAll);
  router.get("/ga/list/aktif", ga.findActive);

  //User System Routes
  router.post("/user/", user.create);
  router.post("/user/login", user.SignIn);
  router.put("/user/changePass", user.changePass);
  router.put("/user/changeState", user.changeState);
  // router.delete("/user/drop", user.detele);
  // router.delete("/user/dropAll", user.deleteAll);
  // router.get("/user/list/aktif", user.findActive);

  app.use("/api", router);
};
