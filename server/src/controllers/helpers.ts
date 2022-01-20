const TABLE_NAME = "dictionary";

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
const validSpeech = ["adv.", "n.", "v.", "prep.", "conj.", "interj.", "pron."];

export const isPartOfSpeech = (param: unknown) =>
  !!validSpeech.find((speech) => speech === param);
