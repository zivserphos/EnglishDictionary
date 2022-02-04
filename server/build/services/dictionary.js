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
/* eslint-disable no-await-in-loop */
const helpers_1 = require("./helpers");
const aws_config_1 = __importDefault(require("../utils/config/aws.config"));
const getWord = (word) => __awaiter(void 0, void 0, void 0, function* () {
    const params = (0, helpers_1.genParams)(`word = :w`, word);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const response = yield aws_config_1.default.query(params).promise();
    console.log(response);
    return {
        data: response.Items,
    };
});
const getWordAndPartOfSpeech = (word, partofspeech) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(partofspeech);
    if (!(0, helpers_1.isPartOfSpeech)(partofspeech))
        throw new Error("invalid part of speech");
    const params = (0, helpers_1.genParams)("word = :w and pos = :p", word, partofspeech);
    console.log(params);
    const response = yield aws_config_1.default.query(params).promise();
    console.log(response.Items);
    return {
        data: response.Items,
    };
});
const randomWordBySpeech = (part) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(0, helpers_1.isPartOfSpeech)(part))
        throw new Error("invalid part of speech");
    let validWord = false;
    let response;
    let word = yield (0, helpers_1.genRandomWord)();
    let params = (0, helpers_1.genParams)(`word = :w and pos = :p`, word.toUpperCase(), part);
    while (!validWord) {
        word = yield (0, helpers_1.genRandomWord)();
        params = (0, helpers_1.genParams)(`word = :w and pos = :p`, word.toUpperCase(), part);
        response = yield aws_config_1.default.query(params).promise();
        if (response.Count)
            validWord = true;
    }
    return {
        data: response === null || response === void 0 ? void 0 : response.Items,
    };
});
exports.default = { getWord, getWordAndPartOfSpeech, randomWordBySpeech };
