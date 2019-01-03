const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname+'/public'));

app.get('/', (req, res) => {
  // res.send('<h1>Hello Express</h1>')
  res.send({
    name: 'Dasa',
    age: 51,
    likes: ['running', 'travel' ]
  })
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to fulfill request'
  });
});

app.get('/about', (req, res) => {
  res.send('<h1>About Page</h1>');
});

app.listen(port, () => {
  console.log(`Server is up. Listening on port ${port}`)
});
