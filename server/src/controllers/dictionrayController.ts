import { Handler } from "express";
import dictionaryService from "../services/dictionary";

export const getWord: Handler = async (req, res, next) => {
  try {
    const word = req.params.word.toUpperCase();
    const wordDefinision = await dictionaryService.getWord(word);
    return res.send(wordDefinision);
  } catch (err) {
    return next({ status: 400, message: { erorr: err } });
  }
};

export const getWordAndPartOfSpeech: Handler = async (req, res, next) => {
  try {
    const word = req.params.word.toUpperCase();
    const { partofspeech } = req.params;
    const wordDefinision = await dictionaryService.getWordAndPartOfSpeech(
      word,
      partofspeech
    );
    return res.json({
      wordDefinision,
    });
  } catch (err) {
    return next({ status: 400, message: { error: err } });
  }
};

export const randomWordBySpeech: Handler = async (req, res, next) => {
  try {
    const { part } = req.params;
    const wordDefinision = await dictionaryService.randomWordBySpeech(part);
    return res.send({
      wordDefinision,
    });
  } catch (err) {
    return next({ status: 400, message: { erorr: err } });
  }
};
