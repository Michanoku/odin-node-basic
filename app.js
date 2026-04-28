const express = require("express");
const morgan = require("morgan");
const routes = require("/routes");

const app = express();
app.set("view engine", "ejs");
app.use(morgan('dev'));

app.listen(8080, '0.0.0.0')

app.use(routes);

app.use((req, res) => {
  res.status(404).render('404', { title: '404'});
});