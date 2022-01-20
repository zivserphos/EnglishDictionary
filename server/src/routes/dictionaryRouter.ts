/* eslint-disable import/named */
import { Router } from "express";
import {
  getWord,
  getWordAndPartOfSpeech,
} from "../controllers/dictionrayController";

const router = Router();

router.get("/:word/:partofspeech", getWordAndPartOfSpeech);
router.get("/:word", getWord);

export default router;
