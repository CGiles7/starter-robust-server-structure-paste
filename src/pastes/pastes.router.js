const router = require("express").Router();
const controller = require("./pastes.controller");

router
  .route("/:pasteId")
  .get(controller.read)
  .put(controller.update)
  .delete(controller.delete);

module.exports = router;