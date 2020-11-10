module.exports = (app) => {
  const ga = require("../controllers/ga.controllers");

  let router = require("express").Router();

  // Create a new post
  router.post("/", ga.create);

  //Retrieve all post
  router.get("/", ga.findAll);

  //Retrieve single post
  router.get("/:id", ga.findOne);

  //Update post
  router.put("/:id", ga.update);

  //Delete single post
  router.delete("/:id", ga.detele);

  //Delete all post
  router.delete("/", ga.deleteAll);

  //Find published post
  router.get("/list/aktif", ga.findActive);

  app.use("/api/ga", router);
};
