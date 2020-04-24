const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello world from express");
  console.log(`/ ${port}`);
});

app.get("/demo", (req, res) => {
  res.set("X-full-stack", "4life"); //add header "X-full-stack", "4life" in demo under network
  res.status(418);
  res.send("I prefer coffee at /demo"); //screen output
  console.log(`/demo ${port}`); //server console output
});

app.listen(port, () => console.log(`example app listening on port ${port}!`));
