const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const db = require("../config/database");

/* GET home page. */
router.get("/", async (req, res, next) => {
  const events = await db("events").select();
  res.json(events);
});

router.post(
  "/event",
  [
    check("firstName").notEmpty().isString().isLength({ min: 2 }),
    check("lastName").notEmpty().isString().isLength({ min: 2 }),
    check("email").notEmpty().isEmail(),
    check("eventDate").notEmpty().isString().isISO8601(),
  ],
  async (req, res, next) => {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const data = req.body;
    const events = await db("events").insert(data);
    res.json(events);
  }
);

module.exports = router;
