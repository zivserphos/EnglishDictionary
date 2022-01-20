import dotenv from "dotenv";

dotenv.config();

console.log(process.env.PORT);

export default {
  port: process.env.PORT || 3001,
  AWS_accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
  Aws_secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
};
