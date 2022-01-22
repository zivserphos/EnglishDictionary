/* eslint-disable import/prefer-default-export */
import serverless from "serverless-http";
import config from "./utils/index";
import app from "./app";

const PORT = config.port || 3001;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

const handler = serverless(app);

export { handler };
