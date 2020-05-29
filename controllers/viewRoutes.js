const router = require("express").Router();
const Burger = require("../models/burger.js");

router.get("/burgers", (req, res) => {
  Burger.getBurgers((burgers) => {
    // console.log(burgers)
    res.render("index", { burgers })
  })
})

module.exports = router