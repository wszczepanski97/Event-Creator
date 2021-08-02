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
    check("firstName")
      .exists({ checkNull: true })
      .withMessage("First name field must exist.")
      .bail()
      .notEmpty()
      .withMessage("First name can't be empty.")
      .bail()
      .matches(/^[\p{L}]+$/u)
      .withMessage("First name must be alphabetic.")
      .bail()
      .isLength({ min: 2 })
      .withMessage("First name must have more than 2 characters."),
    check("lastName")
      .exists({ checkNull: true })
      .withMessage("Last name field must exist.")
      .notEmpty()
      .withMessage("Last name can't be empty.")
      .matches(/^[\p{L}]+$/u)
      .withMessage("Last name must be alphabetic.")
      .isLength({ min: 2 })
      .withMessage("Last name must have more than 2 characters."),
    check("email")
      .exists({ checkNull: true })
      .withMessage("Email field must exist.")
      .notEmpty()
      .withMessage("Email can't be empty.")
      .isEmail()
      .withMessage("Given email is not correct."),
    check("eventDate")
      .exists({ checkNull: true })
      .withMessage("EventDate field must exist.")
      .notEmpty()
      .withMessage("EventDate can't be empty.")
      .isISO8601()
      .withMessage("EventDate should be in ISO8601 standard."),
  ],
  async (req, res, next) => {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      return res.status(400).json({ errors: validationErrors.mapped() });
    }
    const data = req.body;
    const events = await db("events").insert(data);
    res.status(201).json(events);
  }
);

module.exports = router;
