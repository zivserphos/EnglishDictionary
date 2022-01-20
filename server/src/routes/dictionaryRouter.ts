/* eslint-disable import/named */
import { Router } from "express";
import {
  getWord,
  getWordAndPartOfSpeech,
  randomWordBySpeech,
} from "../controllers/dictionrayController";

const router = Router();

router.get("/part-of-speech/:part", randomWordBySpeech);
router.get("/:word/:partofspeech", getWordAndPartOfSpeech);
router.get("/:word", getWord);

export default router;
