import dotenv from 'dotenv';

dotenv.config();

const config = {
  port: process.env.PORT,
  tokenKey: process.env.TOKEN_KEY,
};

export default config;
