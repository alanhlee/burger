const express = require("express");
const { join } = require("path");
const app = express();

app.use(express.static(join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine(".hbs", require("express-handlebars")({ extname: ".hbs" }));
app.set("view engine", ".hbs");

app.use(require("./controllers/burgers_controller.js"));

app.listen(3000, () => console.log("http://localhost:3000"));