/* eslint-disable no-await-in-loop */
import { genParams, genRandomWord, isPartOfSpeech } from "./helpers";

import docClient from "../utils/config/aws.config";

const getWord = async (word: string) => {
  const params = genParams(`word = :w`, word);
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const response = await docClient.query(params).promise();
  console.log(response);
  return {
    data: response.Items,
  };
};

const getWordAndPartOfSpeech = async (word: string, partofspeech: string) => {
  console.log(partofspeech);
  if (!isPartOfSpeech(partofspeech)) throw new Error("invalid part of speech");
  const params = genParams("word = :w and pos = :p", word, partofspeech);
  console.log(params);
  const response = await docClient.query(params).promise();
  console.log(response.Items);
  return {
    data: response.Items,
  };
};

const randomWordBySpeech = async (part: string) => {
  if (!isPartOfSpeech(part)) throw new Error("invalid part of speech");
  let validWord = false;
  let response;
  let word = await genRandomWord();
  let params = genParams(`word = :w and pos = :p`, word.toUpperCase(), part);
  while (!validWord) {
    word = await genRandomWord();
    params = genParams(`word = :w and pos = :p`, word.toUpperCase(), part);
    response = await docClient.query(params).promise();
    if (response.Count) validWord = true;
  }
  return {
    data: response?.Items,
  };
};

export default { getWord, getWordAndPartOfSpeech, randomWordBySpeech };
