/* eslint-disable import/prefer-default-export */
// import serverless from "serverless-http";
import app from "./app";
import config from "./utils/index";

const PORT = config.port;

app.listen(PORT, () => {
  console.log(`app is running at ${PORT}`);
});
