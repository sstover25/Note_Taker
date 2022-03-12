const router = require("express").Router();
const { notes } = require("../../db/db.json");
const { nanoid } = require("nanoid");
const fs = require("fs");
const path = require("path");

// when a GET request is made, the notes db sends it's information
router.get("/notes", (req, res) => {
  res.json(notes);
});

// when a POST request happens, a new random id is assigned to the body
// the body of the request is then pushed into the notes array
// the notes db is updated with the new object via fs.writeFileSync
router.post("/notes", (req, res) => {
  req.body.id = nanoid();
  notes.push(req.body);
  fs.writeFileSync(
    path.join(__dirname, "../../db/db.json"),
    JSON.stringify({ notes: notes }, null, 2)
  );
  res.json(notes);
});

module.exports = router;
