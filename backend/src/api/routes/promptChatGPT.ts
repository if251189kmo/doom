import express from 'express';
import { getAsyncPromptChatGPT } from './helpers/promptChatGPT';

const router = express.Router();

router.get('/promptChatGPT', getAsyncPromptChatGPT);

export default router;
