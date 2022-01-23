import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT || 3001,
  AWS_accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
  Aws_secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
};
