const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const { signout, signup, signin, isSignedIn } = require("../controllers/auth");

router.post(
  "/signup",
  [
    check("name", "name should be at least 3 characters").isLength({ min: 3 }),
    check("email", "email should be like user@domain.com").isEmail(),
    check("password", "password should be atleast 3 character").isLength({
      min: 3,
    }),
  ],
  signup
);

router.post(
  "/signin",
  [
    check("email", "email should be like user@domain.com").isEmail(),
    check("password", "password is required").isLength({
      min: 1,
    }),
  ],
  signin
);

router.get("/signout", signout);
router.get("/testroute", isSignedIn, (req, res) => {
  res.json(req.auth);
});
module.exports = router;
