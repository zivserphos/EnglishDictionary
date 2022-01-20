import express from "express";
// eslint-disable-next-line import/no-extraneous-dependencies
import * as bodyParser from "body-parser";
// import serverless from "serverless-http";
import cors from "cors";
import morgan from "morgan";
import morganHandler from "./middlewares/morgan";
import errorHandler from "./middlewares/errorHandlers";
import DictionaryRouter from "./routes/dictionaryRouter";

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.text());
app.use(
  morganHandler,
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);

app.use("/", DictionaryRouter);

app.get("/hello", (_req, res) => {
  res.send("hello world");
});
app.use(errorHandler);

export default app;
