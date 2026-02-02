import  express  from "express";
import { helmetMiddleware } from "./middlewares/helmet.middleware.js";
import { corsMiddleware } from "./middlewares/cors.middleware.js";
import { customSecurityHeaders } from "./middlewares/security-headers.middleware.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";

const app = express();
app.use(express.json());
app.use(helmetMiddleware);
app.use(corsMiddleware);
app.use(customSecurityHeaders);

app.use(errorMiddleware);


export { app };