import express from "express";
import readFile from "./file-reader.js";
import OutputManager from "./OutputManager.js";

const app = express();

app.get("/readFile/:filename/:pageLines", (req, res) => {
  res.send("Read File route was called");
  new OutputManager(
    readFile(req.params.filename),
    req.params.pageLines
  ).output();
});

app.listen(8080, () => {});
