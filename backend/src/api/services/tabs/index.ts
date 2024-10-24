import { Request, Response } from 'express';
import { HttpStatus } from 'src/constant/httpStatus';

const { BAD_REQUEST } = HttpStatus;

const promptChatGPTServices = () => ({
  get: (_req: Request, res: Response) => {
    try {
      res.status(200).json('data');
    } catch (error) {
      res.status(400).json(BAD_REQUEST);
    }
  },
});

export default promptChatGPTServices;
