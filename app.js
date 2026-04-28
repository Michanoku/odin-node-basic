const path = require('path');
const express = require("express");
const morgan = require("morgan");
const routes = require("./routes");

const app = express();
app.use(morgan('dev'));
app.use(express.static('public'));

// app.listen(8080, '0.0.0.0')

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use(routes);

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});