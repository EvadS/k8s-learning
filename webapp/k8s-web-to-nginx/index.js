const fetch = require('node-fetch');
const express = require('express');
const app = express();

// Allocating os module 
const os = require('os');
const PORT = 3000

app.get('/', (req, res) => {
  const helloMessage = `<h1>Hello from the ${os.hostname()}</h1>`

  console.log(helloMessage)
  res.send(helloMessage)
});

app.get("/nginx", async (req, res) => {
  const url = 'http://nginx'
  console.log("fetch nginx")
  const response = await fetch(url);
  const body = await response.text();
  res.send(body)
})

app.get("/jsonplaceholder", async (req, res) => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  const response = await fetch(url);
  const body = await response.text();
  res.setHeader("Content-Type", "application/json");
  res.send(body);
});

app.listen(PORT, () => {
  console.log(`Web server is listening at port ${PORT}`)
})


console.log('Running on http://localhost:3000');