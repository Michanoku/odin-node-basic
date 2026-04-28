const path = require('path');

const index = (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
}

const about = (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'));
}

const contact = (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contact.html'));
}

module.exports = {
    index,
    about,
    contact
}