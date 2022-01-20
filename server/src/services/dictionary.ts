/* eslint-disable no-await-in-loop */
import { genParams, genRandomWord, isPartOfSpeech } from "./helpers";

import docClient from "../utils/config/aws.config";

const getWord = async (word: string) => {
  const params = genParams(`word = :w`, word);
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const response = await docClient.query(params).promise();
  return {
    word: response.Items,
  };
};

const getWordAndPartOfSpeech = async (word: string, partofspeech: string) => {
  if (!isPartOfSpeech(partofspeech)) throw new Error("invalid part of speech");
  const params = genParams("word = :w and pos = :p", word, partofspeech);
  const response = await docClient.query(params).promise();
  return {
    words: response.Items,
  };
};

const randomWordBySpeech = async (part: string) => {
  if (!isPartOfSpeech(part)) throw new Error("invalid part of speech");
  let validWord = false;
  let response;
  const word = await genRandomWord();
  const params = genParams(`word = :w and pos = :p`, word.toUpperCase(), part);
  while (!validWord) {
    response = await docClient.query(params).promise();
    if (response.Count) validWord = true;
  }
  return {
    word: response?.Items,
  };
};

export default { getWord, getWordAndPartOfSpeech, randomWordBySpeech };
