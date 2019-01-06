const express = require('express');
const hbs= require('hbs');
const app = express();

const port = process.env.PORT || 3000;

app.set('view engine', 'hbs');

app.use(express.static(__dirname+'/public'));

app.get('/', (req, res) => {
  // res.send('<h1>Hello Express</h1>')
  res.render('home.hbs', {
    welcomeMessage:' Welcome!',
    name: 'Dasa',
    age: 51,
    likes: ['running', 'travel' ]
  });
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to fulfill request'
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  });
});

app.listen(port, () => {
  console.log(`Server is up. Listening on port ${port}`)
});
