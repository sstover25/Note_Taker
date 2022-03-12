const router = require("express").Router();
const { notes } = require("../../db/db.json");
const { nanoid } = require("nanoid");

router.get("/notes", (req, res) => {
  res.json(notes);
});

router.post("/notes", (req, res) => {
  req.body.id = nanoid();
  res.send(req.body);
});

module.exports = router;
