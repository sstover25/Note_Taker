const router = require("express").Router();
const { notes } = require("../../db/db.json");
const { nanoid } = require("nanoid");

router.get("/notes", (req, res) => {
  res.json(notes);
});

router.post("/notes", (req, res) => {
  const note = saveNote(req.body, notes);
  req.json(note);
});

module.exports = router;
