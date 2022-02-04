"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/named */
const express_1 = require("express");
const dictionrayController_1 = require("../controllers/dictionrayController");
const router = (0, express_1.Router)();
router.get("/part-of-speech/:part", dictionrayController_1.randomWordBySpeech);
router.get("/words/:word/:partofspeech", dictionrayController_1.getWordAndPartOfSpeech);
router.get("/words/:word", dictionrayController_1.getWord);
exports.default = router;
