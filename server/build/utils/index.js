"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    port: process.env.PORT || 3001,
    AWS_accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    Aws_secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
};
