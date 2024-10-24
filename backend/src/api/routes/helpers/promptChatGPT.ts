import { Request, Response } from 'express';
import initTabController from '../../controllers/promptChatGPT';

const getAsyncPromptChatGPT = async (req: Request, res: Response) => {
  const { getPromptChatGPT } = await initTabController();
  return getPromptChatGPT(req, res);
};

export { getAsyncPromptChatGPT };
