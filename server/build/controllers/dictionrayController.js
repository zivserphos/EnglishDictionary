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
exports.randomWordBySpeech = exports.getWordAndPartOfSpeech = exports.getWord = void 0;
const dictionary_1 = __importDefault(require("../services/dictionary"));
const getWord = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        const word = req.params.word.toUpperCase();
        const wordDefinision = yield dictionary_1.default.getWord(word);
        console.log(res);
        return res.send(wordDefinision);
    }
    catch (err) {
        return next({ status: 400, message: { erorr: err } });
    }
});
exports.getWord = getWord;
const getWordAndPartOfSpeech = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("hereee");
        res.setHeader("Access-Control-Allow-Origin", "*");
        const word = req.params.word.toUpperCase();
        const { partofspeech } = req.params;
        const wordDefinision = yield dictionary_1.default.getWordAndPartOfSpeech(word, partofspeech);
        return res.send(wordDefinision);
    }
    catch (err) {
        return next({ status: 400, message: { error: err } });
    }
});
exports.getWordAndPartOfSpeech = getWordAndPartOfSpeech;
const randomWordBySpeech = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        const { part } = req.params;
        const wordDefinision = yield dictionary_1.default.randomWordBySpeech(part);
        console.log(wordDefinision);
        return res.send(wordDefinision);
    }
    catch (err) {
        return next({ status: 400, message: { erorr: err } });
    }
});
exports.randomWordBySpeech = randomWordBySpeech;
