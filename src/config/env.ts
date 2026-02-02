import 'dotenv/config';

export const env = {
    port: Number(process.env.PORT) || 3069,
     nodeEnv: process.env.NODE_ENV || 'development',
};