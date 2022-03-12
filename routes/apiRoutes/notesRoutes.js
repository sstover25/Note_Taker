const router = require("express").Router();
const { notes } = require("../../db/db.json");
const { nanoid } = require("nanoid");
const fs = require("fs");
const path = require("path");

router.get("/notes", (req, res) => {
  res.json(notes);
});

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
