const router = require("express").Router();

const authRoutes = require("./auth");
const _authRoutes = require("./_auth");
const usersRoutes = require("./users");
const booksRoutes = require("./books");
const uploadRoutes = require("./upload");
const publishersRoutes = require("./publishers");


router.use("/auth", authRoutes);
router.use("/_auth", _authRoutes);
router.use("/users", usersRoutes);
router.use("/books", booksRoutes);
router.use("/upload", uploadRoutes);
router.use("/publishers", publishersRoutes);

module.exports = router;