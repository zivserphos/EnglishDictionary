"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const index_1 = __importDefault(require("../index"));
const awsConfig = {
    region: "eu-west-1",
    endpoint: "http://dynamodb.eu-west-1.amazonaws.com",
    accessKeyId: index_1.default.AWS_accessKeyId,
    secretAccessKey: index_1.default.Aws_secretAccessKey,
};
console.log(awsConfig);
aws_sdk_1.default.config.update(awsConfig);
const docClient = new aws_sdk_1.default.DynamoDB.DocumentClient();
console.log("Connected to DynamoDb");
exports.default = docClient;
