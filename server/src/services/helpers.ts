import axios from "axios";

const TABLE_NAME = "dictionary";

const validSpeech = ["adv.", "n.", "v.", "prep.", "conj.", "interj.", "pron."];

export const genParams = (
  keyCon: string,
  expressionAttr: string,
  partOfSpeech?: string
) => {
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
export const genRandomWord = async () => {
  const {
    data: [word],
  } = await axios.get("https://random-word-api.herokuapp.com/word?number=1");
  return word;
};

export const isPartOfSpeech = (param: unknown) =>
  !!validSpeech.find((speech) => speech === param);
