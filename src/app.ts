import express from "express";

const app = express();

app.use(express.json());

app
  .route("/")
  .get((req, res) => {
    return res.send("You made a GET request");
  })
  .post((req, res) => {
    return res.send("You made a POST request");
  })
  .put((req, res) => {
    return res.send("You made a PUT request");
  });

app.listen(3000, () => {
  console.log("app listening at port 3000");
});
