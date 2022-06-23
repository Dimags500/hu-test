const express = require("express");
const fs = require("fs");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  var currentPath = process.cwd();

  console.log(currentPath);
  let data = await readFile("data/data.json");
  res.send(data);
  res.end();
});

const readFile = async (filePath) => {
  try {
    const users = await fs.promises.readFile(filePath);
    return JSON.parse(users);
  } catch (err) {
    console.log(err);
  }
};

const PORT = process.env.PORT || 4090;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
