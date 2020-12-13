const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const http = require('http');

// Use public as directory to host files
app.use(express.static('public'));

const fs = require('fs');
const port = 3000;
const {body, validationResult} = require('express-validator');

// Listen local host at 3000
app.listen(3000, () => console.log('Listening at 3000'));

app.get('/submit-form', function(req, res){
   res.render('form');
});


// let user = {
//   firstname: "James",
//   lastname: "Pooley",
//   email: "jamespooley56@hotmail.co.uk",
//   username: "JAMESPOOLEY",
//   password: "BABABABA",
//   passwordrepeat: "BABABABA",
//   telephone: "012345678",
//   housenumber: "17",
//   dob: "09/08/2000",
//   gender: "Male",
//   ethnicity: "White",
//   dot: "09/08/2020",
//   slot: "Morning",
//   comments: "abcdefghij"
// };
//
// let data = JSON.stringify(user);

// fs.writeFileSync('file.json', data, finished);

function finished(err)
{
  console.log('success');
}


// app.use(express.urlencoded());
// // parse application to json
// app.use(express.json());


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
  const dot = req.body.dot
  const slot = req.body.slot
  const comments = req.body.comments
  res.end()
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
    dot: dot,
    slot: slot,
    comments: comments
  }
})

// fetch('/submit-form', {
//   method: 'POST',
//   headers: {
//     'content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     user: {
//       firstname: "James",
//       lastname: "Pooley",
//       email: "jamespooley56@hotmail.co.uk",
//       username: JAMESPOOLEY,
//       password: BABABABA,
//       passwordrepeat: BABABABA,
//       telephone: 012345678,
//       housenumber: 17,
//       agae: 20,
//       gender: Male,
//       ethinicity: White,
//       comments: abcdefghij
//     }
//   })
// });




// app.use(express.static('public'));
// const bodyParser = require('body-parser');
// const jsonParser = bodyParser.json();
//
//
//
// const http = require('http');
// const hostname = "127.0.0.1";
// const port = 3000;
//
// const server = http.createServer(function (req, res) {
//   res.statusCode = 200;
//   req.on('data', function (data) {
//     //handle data as it is received... for POST requests
//   });
//   req.on('end', function () {
//     res.setHeader('Content-Type', 'application/json');
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.writeHead(200, 'OK');
//
//     res.end('{ "data": "just a plain old json reply" }');
//   });
// });
//
//
// server.listen(3000, (err) => {
//   if (err) {
//     console.log('bad things');
//     return;
//   }
//   console.log('listening on port 3000');
// });
