import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// routes
import promptChatGPT from './api/routes/promptChatGPT';

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/doom', promptChatGPT);

export default app;
