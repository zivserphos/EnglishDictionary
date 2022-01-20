import { Handler } from "express";
import docClient from "../utils/config/aws.config";

const TABLE_NAME = "dictionary";

const genParams = (keyCon: string, expressionAttr: string) => ({
  TableName: TABLE_NAME,
  KeyConditionExpression: keyCon,
  ExpressionAttributeValues: {
    ":w": expressionAttr,
  },
});

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

export const getWordAndPartOfSpeech: Handelr = (req , res , next) => {
  try {
    const word = req.params.word.toUpperCase();
    const partOfSpeech = req.params.partOfSpeech;
  }
};
