import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.send("hello world");
});

app.post("/api/data", (req, res) => {
  console.log(req.body);
  return res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("app listening at port 3000");
});
