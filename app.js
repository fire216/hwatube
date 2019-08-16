import express from "express";
import logger from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(logger("dev"));

//use의 의미? 누군가 /user에 접속하면 이  router 전체를 사용하겠다는 의미
app.use(routes.home, globalRouter); // /join, /login, /search 등을 다룰꺼임
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
