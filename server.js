const express = require('express');
const next = require('next');


const app = express();
const jwt = require('jsonwebtoken');

const cookieParser = require('cookie-parser');
app.use(cookieParser());

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();



const blacklist = [];


const bodyParser = require('body-parser');
app.use(bodyParser.json());



nextApp.prepare().then(() => {

  app.get('/profile', verifyJWT, nextHandler);
  app.get('/refresh', verifyJWT, nextHandler);
  app.get('/status_code', verifyJWT, nextHandler);
  


function verifyJWT(req, res, next) {
  var token = req.cookies.token;

  if (!token || token==='Login inválido!') return res.redirect('/');
              

  const index = blacklist.findIndex(item => item === token);
  if(index !== -1) return res.status(401).end();

  jwt.verify(token, process.env.SECRET, function (err, decoded) {
    if (err) return res.status(401).redirect('/');

    // se tudo estiver ok, salva no request para uso posterior
    req.userId = decoded.id;

    next();
  });
}

app.post('/login', (req, res, next) => {
  console.log(req.body.token)
  //esse teste abaixo deve ser feito no seu banco de dados
  if (req.body.user === 'leandro@leandro' && req.body.pass === 'leandro') {
    //auth ok
    const userId = 1; //esse id viria do banco de dados

    if(req.body.token){
      var token = req.body.token;
    }else{
      var token = jwt.sign({ userId }, process.env.SECRET, {
      expiresIn: 1000 // expires in 5min
    });
    }

    return res.send(token);

    
  }

  res.send('Login inválido!');
})




  // Message Sending
  app.get("/custom-route", (req, res) => {
    res.send("Custom Route!!")
  })

  app.get("*", nextHandler)
  app.post('*', nextHandler)

  app.listen(port, err => {
    if (err) throw err
    console.log(`Listening on port ${port}`)
  })
})
