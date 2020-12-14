const express = require('express');
const app = express();

// static file location
app.use(express.static('public'));

// us fs to enable interaction with File System
const fs = require('fs');

//  Helper
const bodyParser = require('body-parser'); /// body parser = html pass

const jsonParser = bodyParser.json();

const path = require('path');

// Landing page
app.get('/', (req, res) => {
  res.send('This is a temporary page \n');
});

// Use public as directory to host files


app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

const { body, validationResult } = require('express-validator');

app.post('/user', [
  // email must be Email
  body('email').isEmail(),
  // password must be at least 8 chars long
  body('password').isLength({min : 8}),
  // password repeat must be at least 8 chars long
  body('passwordrepeat').isLength({min : 8}),
])


//Middleware Setup
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/submit-form', function(req, res) {  //POST method
  console.log(req.body);
  var firstname = req.body.firstname;
  var lastname = req.body.lastname;
  var email = req.body.email;
  var username = req.body.username;
  var password = req.body.password;
  var passwordrepeat = req.body.passwordrepeat;
  var telephone = req.body.telephone;
  var housenumber = req.body.housenumber;
  var age = req.body.age;
  var gender = req.body.gender;
  var ethnicity = req.body.ethnicity;
  var dot = req.body.dot;
  var slot = req.body.slot;
  var comments = req.body.comments;


  var response = {
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


  var file = 'user_data.json'; // File var



      // look for file if it doesn't  and add response, if exists Append
      fs.readFile(file, (err, data) => {
      if (err && err.code === "ENOENT") {
          return fs.writeFile(file, JSON.stringify(response), error => console.error);

      }

          else {
            try {
                  return fs.appendFile(file, JSON.stringify(response), error => console.error)
        } catch(exception) {
            console.error(exception);
        }
         console.log('File exists');
     }
   });








});



app.listen(3000, () => console.log('Listening on port 3000'));
