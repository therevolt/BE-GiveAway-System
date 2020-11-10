module.exports = (app) => {
  const ga = require("../controllers/ga.controllers");

  let router = require("express").Router();

  router.post("/", ga.create);

  router.get("/", ga.findAll);

  router.get("/:id", ga.findOne);

  router.put("/:id", ga.update);

  router.delete("/:id", ga.detele);

  router.delete("/", ga.deleteAll);

  router.get("/list/aktif", ga.findActive);

  app.use("/api/ga", router);
};
