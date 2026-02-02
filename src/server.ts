import { app } from './app';
import { env } from './config/env.js';


app.listen(env.port, () => {
    console.log(`🚀 API rodando na porta ${env.port}`);
});