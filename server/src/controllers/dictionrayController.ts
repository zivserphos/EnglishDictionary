import { Handler } from "express";
import docClient from "../utils/config/aws.config";
import { genParams, isPartOfSpeech } from "./helpers";

export const getWord: Handler = async (req, res, next) => {
  try {
    const word = req.params.word.toUpperCase();
    const params = genParams(`word = :w`, word);
    const response = await docClient.query(params).promise();
    return res.status(200).json({
      word: response.Items,
    });
  } catch (err) {
    console.log(err);
    return next({ status: 400, message: { erorr: err } });
  }
};

export const getWordAndPartOfSpeech: Handler = async (req, res, next) => {
  try {
    const word = req.params.word.toUpperCase();
    const { partofspeech } = req.params;
    console.log(req.params);
    if (!isPartOfSpeech(partofspeech))
      throw new Error("invalid part of speech");
    const params = genParams("word = :w and pos = :p", word, partofspeech);
    const response = await docClient.query(params).promise();
    return res.status(200).json({
      words: response.Items,
    });
  } catch (err) {
    return next({ status: 400, message: { error: err } });
  }
};

export const randomWordBySpeech: Handler = async (req, res, next) => {
  // const { part } = req.params;
};
