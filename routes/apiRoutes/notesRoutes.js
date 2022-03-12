const router = require("express").Router();
const { notes } = require("../../db/db.json");
// const {
//   getNotes,
//   saveNote,
//   deleteNote,
// } = require("../../public/assets/js/index");

router.get("/notes", (req, res) => {
  let results = notes;
  res.json(results);
});

// router.post("/notes", (req, res) => {
//   const note = saveNote(req.body, notes);
//   req.json(note);
// });

module.exports = router;
