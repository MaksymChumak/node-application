// server.js

const express = require("express");
const port = process.env.PORT || 8080;

let app = express();

app.use(express.static(__dirname + "/views"));

app.get('/', (request, response) => {
  response.render('index.html');
})

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

fdfddfdf