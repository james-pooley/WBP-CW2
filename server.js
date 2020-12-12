const express = require('express');
const app = express();

app.use(express.static('public'));

const fs = require('fs');

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

const http = require('http');

const server = http.createServer(function (req, res) {
  req.on('data', function (data) {
    //handle data as it is received... for POST requests
  });
  req.on('end', function () {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, 'OK');

    res.end('{ "data": "just a plain old json reply" }');
  });
});

server.listen(3000, (err) => {
  if (err) {
    console.log('bad things');
    return;
  }
  console.log('listening on port 3000');
});

app.get('/', function(req, res){
  res.header("Access-Control-Allow-Origin", "+")
  res.end('my home page ! \n');
});

app.get('/hello/:name', function(req, res){
  const routeParams = req.params;
  const name = routeParams.name
  res.send('Hello ' + name);
});

app.post('/user', jsonParser, function(req, res){
  console.log(req.body);
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const passwordrepeat = req.body.passwordrepeat;
  const telephone = req.body.telephone;
  const housenumber = req.body.housenumber;
  const age = req.body.age;
  const gender = req.body.gender;
  const ethnicity = req.body.ethnicity;
  const comments = req.body.comments;
  response = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    username: username,
    password: password,
    passwordrepeat: passwordrepeat,
    telephone: telephone,
    housenumber: housenumber,
    age: age,
    gender: gender,
    ethnicity: ethnicity,
    comments: comments
  }
  fs.writeFile('data.json', JSON.stringify(response), err => {
    if (err) return console.log(err);
    console.log('file saved!');
  });
  res.status(200).json(response);
});

// function onTextReady(text){
//   console.log(text);
// }
//
// function onResponse(response){
//   return response.text();
// }

// fetch('/hello', {method: 'POST'})
//   .then(onResponse)
//   .then(onTextReady);



app.post('/submit-form', (req, res) => {
  const firstname = req.body.firstname
  const lastname = req.body.lastname
  const email = req.body.email
  const username = req.body.username
  const password = req.body.password
  const passwordrepeat = req.body.passwordrepeat
  const telephone = req.body.telephone
  const housenumber = req.body.housenumber
  const age = req.body.age
  const gender = req.body.gender
  const ethnicity = req.body.ethnicity
  const comments = req.body.comments
})

const formToJSON = elements => [].reduce.call(elements, (data, element) => {

  data[element.name] = element.value;
  return data;

}, {});

// A handler function to stop default submission and run script
const handleFormSubmit = event => {

  // Stop the form from submitting
  event.preventDefault();

  // Call function to get form data
  const data = {};

  // Print the form data on screen as JSON
  const dataContainer = document.getElementByClassName('results_display')[0];

  // Use stringifyto to make output readable.

};

(function() {
  function toJSONString( form ) {
    var obj = {};
    var elements = form.querySelector( "input, select, textarea");
    for( var i = 0; i < elements.lenght; ++i) {
      var element = elements[i];
      var name = element.name;
      var value = element.value;

      if( name ) {
        obj[ name ] = value;
      }
    }

    document.addEventListener( "DOMContentLoaded", function(){
      var form = document.getElementById( "test" );
      var output = document.getElementById( "output" );
      form.addEventListener( "submit", function( e ){
        e.preventDefault();
        var json = toJSONString(this);
        output.innerHTML = json;
      }, false);
    });
  }
})




// app.get('/api', function(req, res) {
//   res.end("my home page! \n");
// });
//
// app.post('/api', jsonParser, (req, res) => {
// console.log(req.body);
// const name = req.body.name;
// const email = req.body.email;
// response = {
//   name : name,
//   email : email
// }
//
// app.get('/hello/:name', (req, res) =>{
//   console.log('GET Hello - route params');
//   response = {
//     name: req.params.name
//   }
//   res.status(200).jspon(response);
// });
//
// app.post('/hello', jsonParser, (req, res) => {
//   console.log('POST Hello - body params');
//   console.log(req.body);
//   response = {
//     name: req.body.name,
//     email: req.body.email
//   }
//   res.status(200).json(response);
// });
//
// app.post('/hello/:name', (req,res) => {
//   console.log('POST Hello - router params');
//   response = {
//     name: req.params.name
//   }
//   res.status(200).json(response);
// });
//
// app.listen(3000, () => console.log('express app listening on port 3000...'));
//
// fs.writeFile('data.json', JSON.stringify(response), err =>{
//   if (err) return console.log(err);
//   console.log('file saved!');
// });
//
// res.status(200).json(response);
//
// });



// app.set('view engine', 'ejs'');
//
//
// app.get('/', function (req, res){
//   res.render('index')
// });
//
// app.get('/contact', function(req, res){
//   res.render('contact', {qs: req.query})
// });
//
// app.post('/contact', urlencodedParser, function(req, res){
//   console.log(req.body);
//   res.render('contact', {qs: req.query});
// });
//
// app.get('/profile/:name', function(req, res){
//   var data = {}
// })


// app.use(express.static('public'));
// app.use(bodyParser.urlencoded({ extended: true}));
//
// app.post('/book-test', function(req, res) {
//   return res.redirect('/success.html')
//   res.send(`Full name is:${req.body.Fn} ${req.body.Ln}.`);
// });
//
// const port = 3000;
//
// app.listen(port, () => {
//   console.log(`Server running on port${port}`);
// });


// app.listen(3000, () => console.log('Listening at 3000'));

// app.use(express.json({ limit: '1mb'}));
//
// app.post('/api', (request, response) => {
//   console.log('I got a request!');
//   console.log(request.body);
//   const data = request.body;
//   response.json({
//     status: 'success',
//     latitude: data.lat,
//     longitude: data.lon
//   });
// });
