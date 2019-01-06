const express = require('express');
const hbs= require('hbs');
const app = express();
const fs = require('fs');

const port = process.env.PORT || 3000;
app.set('view engine', 'hbs');

//START OF EXPRESS MIDDLEWARE

app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}:, ${req.method}, ${req.url}`;
  console.log(log);
  fs.appendFileSync('server.log', log+'\n', (err) => {
    console.log(`${err}: Unable to write to file`)
  });
  next();
});

//Maintenance mode
// app.use((req,res, next) => {
//   console.log('Server under maintenance')
//   res.render('maintenance.hbs', {
//     message: "site under maintenance"
//   })
// });
//End Maintenance mode

//END OF EXPRESS MIDDLEWARE
app.use(express.static(__dirname+'/public'));

hbs.registerPartials(__dirname +'/views/partials')
hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());
hbs.registerHelper('screamIt', (text) => text.toUpperCase());




app.get('/', (req, res) => {
  // res.send('<h1>Hello Express</h1>')
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage:'Welcome to my website!',
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
    pageTitle: 'About Page'
  });
});

app.listen(port, () => {
  console.log(`Server is up. Listening on port ${port}`)
});
