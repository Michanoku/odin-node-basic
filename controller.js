const index = (req, res) => {
  res.render('index', { title: 'Index'});
}

const about = (req, res) => {
  res.render('about', { title: 'About'});
}

const contact = (req, res) => {
  res.render('contact', { title: 'Contact Me'});
}

module.exports = {
    index,
    about,
    contact
}