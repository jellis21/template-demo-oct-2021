require('dotenv').config();
const express = require('express');
const es6Renderer = require('express-es6-template-engine');
const morgan = require('morgan');

const server = express();

server.use(express.json());

server.get('/heartbeat', (req, res) => {
  res.json({
    'is': 'working'
  })
});


server.use('/', express.static(__dirname + '/public'));


// template rendering
server.engine('html', es6Renderer);
server.set('views', 'views');
server.set('view engine', 'html');


server.get('/', (req, res) => {
  res.render('landing', {
    locals: {
      title: 'Hello World'
    },
    partials: {
      footer: 'partials/footer',
      header: 'partials/header'
    }
  })
});

server.get('/friends', (req, res) => {
  res.render('friends', {
    locals: { 
      friends: ['Anna', 'Billy', 'Carlos', 'David', 'Eunice']
    }
  });
});

// query params
server.post('/secret', (req, res) => {
  const randomNum = Math.floor(Math.random() * 10) + 1
  const { secret } = req.body;
  if (randomNum == secret) {
    res.send(`You guessed correctly!`);
  } else res.send(`You guessed incorrectly`)
})

const { PORT } = process.env;

server.listen(PORT, () => {
  console.log(`The server is running at ${PORT}`);
})