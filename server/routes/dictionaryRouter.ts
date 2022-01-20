/* eslint-disable import/named */
import { Router } from "express";
import {
  getWord,
  getWordAndPartOfSpeech,
} from "../controllers/dictionrayController";

const router = Router();

router.get("/:word", getWord);
router.get("/:word:/:partofspeech");

export default router;
