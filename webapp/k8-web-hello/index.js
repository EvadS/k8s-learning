const express = require('express');
const app = express();
// Allocating os module 
const os = require('os'); 

const PORT = 3000

app.get('/', (req, res) => {
 
  const helloMessage = `<h1>VERSION 2: Hello from the ${os.hostname()}</h1>`
  
  console.log(helloMessage)
  res.send(helloMessage)
});

app.listen(PORT, () => {
    console.log(`Web server is listening at port ${PORT}`)
   })


console.log('Running on http://localhost:3000');