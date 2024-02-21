import express, {
  type NextFunction,
  type Request,
  type Response,
} from "express";

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
  })
  .delete((req, res) => {
    return res.send("You made a DELETE request");
  });

const middleware =
  (name: string) => (req: Request, res: Response, next: NextFunction) => {
    res.locals.name = name;
    next();
  };

app.use(middleware("sven"));

const handleGetBook = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.params);

  console.log(res.locals.name);
  return res.send(req.params);
};

app.get("/api/books/:bookId", handleGetBook);

const throwsError = async () => {
  throw new Error("BoomB");
};

app.get("/error", async (req, res) => {
  try {
    await throwsError();
    res.status(200);
  } catch {
    res.status(400).send("something went wrong");
  }
});

app.listen(3001, () => {
  console.log("app listening at port 3001");
});
