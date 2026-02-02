import  express  from "express";
import  { helmetMiddleware }  from "./middlewares/helmet.middleware";
import  { corsMiddleware }  from "./middlewares/cors.middleware";
import  { customSecurityHeaders }  from "./middlewares/security-headers.middleware";
import  { errorMiddleware }  from "./middlewares/error.middleware";

const app = express();
app.use(express.json());
app.use(helmetMiddleware);
app.use(corsMiddleware);
app.use(customSecurityHeaders);

app.use(errorMiddleware);


export { app };