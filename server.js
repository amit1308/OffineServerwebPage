// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//   const filePath = __dirname + '/index.html';
//   const fileData = fs.readFileSync(filePath);
// console.log("someone request in your local server");
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   res.end(fileData);
// });

// server.listen(8085);

const http = require('http');
const fs = require('fs');
const FormData = require('form-data');

console.log("Server Started");
const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(fs.readFileSync('index.html'));
  } else if (req.method === 'POST') {
    // console.log(req.data);
    // console.log(req.body);
    // Initialize the formData variable.
    const formData = new FormData(req.data);

    // Check if the username form data element exists.
    if (formData['username']) {
      const username = formData['username'];
    } else {
      username = '';
    }

    // Check if the email form data element exists.
    if (formData['email']) {
      const email = formData['email'];
    } else {
      email = '';
    }

    // Check if the password form data element exists.
  
      const password = formData['password'];
  

    // Check if the username form data element exists.
  
      const data = `\nusername: ${username}\nemail: ${email}\npassword: ${password}`;
      fs.appendFileSync('data.txt', data);
  

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('The form data has been saved.');
  } else {
    res.writeHead(404);
    res.end('The requested page could not be found.');
  }
});

server.listen(8085);