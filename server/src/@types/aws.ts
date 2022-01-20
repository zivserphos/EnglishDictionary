import "express";

export interface Params {
  TableName: string;
  KeyConditionExpression: string;
  ExpressionAttributeValues: string;
}
