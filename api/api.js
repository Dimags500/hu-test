const express = require("express");
const fs = require("fs");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  let data = getData("../data/data.json");
  res.send(data);
  res.end();
});

function getData(filePath) {
  if (fs.existsSync(filePath)) {
    let users = fs.readFileSync(filePath);
    return JSON.parse(users);
  } else {
    return "file not fount ";
  }
}

app.listen(4090, () => {
  console.log("server work");
});
