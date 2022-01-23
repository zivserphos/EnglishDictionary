import AWS from "aws-sdk";
import config from "../index";

const awsConfig = {
  region: "eu-west-1",
  endpoint: "http://dynamodb.eu-west-1.amazonaws.com",
  accessKeyId: config.AWS_accessKeyId,
  secretAccessKey: config.Aws_secretAccessKey,
};
console.log(awsConfig);
AWS.config.update(awsConfig);

const docClient = new AWS.DynamoDB.DocumentClient();
console.log("Connected to DynamoDb");

export default docClient;
