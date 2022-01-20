import "express";

declare global {
  interface ExpressionAttr {
    ":w": string;
    ":p"?: string;
  }
}
