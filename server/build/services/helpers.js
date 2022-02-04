"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPartOfSpeech = exports.genRandomWord = exports.genParams = exports.genHeaders = void 0;
const axios_1 = __importDefault(require("axios"));
const TABLE_NAME = "dictionary";
const validSpeech = ["adv.", "n.", "v.", "prep.", "conj.", "interj.", "pron."];
const genHeaders = (res) => res.writeHead(200, { "Access-Control-Allow-Origin": "*" });
exports.genHeaders = genHeaders;
const genParams = (keyCon, expressionAttr, partOfSpeech) => {
    const ExpressionAttributeValues = partOfSpeech
        ? { ":w": expressionAttr, ":p": partOfSpeech }
        : {
            ":w": expressionAttr,
        };
    return {
        TableName: TABLE_NAME,
        KeyConditionExpression: keyCon,
        ExpressionAttributeValues,
    };
};
exports.genParams = genParams;
const genRandomWord = () => __awaiter(void 0, void 0, void 0, function* () {
    const { data: [word], } = yield axios_1.default.get("https://random-word-api.herokuapp.com/word?number=1");
    return word;
});
exports.genRandomWord = genRandomWord;
const isPartOfSpeech = (param) => !!validSpeech.find((speech) => speech === param);
exports.isPartOfSpeech = isPartOfSpeech;
