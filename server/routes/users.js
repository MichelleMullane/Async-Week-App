const router = require("express").Router();
const { User } = require("../db");
const { requireToken, isAdmin } = require("./gatekeepingMiddleware");

// api/users
router.get("/", requireToken, isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "username"], // information we want back & hide the rest from the client(browser)
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

// api/users/me
router.get("/me", async (req, res, next) => {
  try {
    res.send(await User.findByToken(req.headers.authorization));
  } catch (error) {
    next(error);
  }
});

// api/users/signup
router.post("/signup", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.create({ username, password });
    res.send({ token: await user.generateToken() });
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      res.status(401).send("User already exists");
    } else {
      next(err);
    }
  }
});

// api/users/login
router.post("/login", async (req, res, next) => {
  try {
    res.send({ token: await User.authenticate(req.body) });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
