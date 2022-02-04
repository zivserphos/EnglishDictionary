"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/prefer-default-export */
// import serverless from "serverless-http";
const app_1 = __importDefault(require("./app"));
const index_1 = __importDefault(require("./utils/index"));
const PORT = index_1.default.port;
app_1.default.listen(PORT, () => {
    console.log(`app is running at ${PORT}`);
});
