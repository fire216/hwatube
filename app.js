import express from "express";
import logger from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middlewares";
import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";

const app = express();

app.use(helmet()); // application이 더 안전하도록 만듦
app.set("view engine", "pug");
app.use(cookieParser()); // cookie를 전달받아서 사용할 수 있도록 하는 미들웨어 사용자 인증 같은곳에서 쿠키 검사할 때 사용
app.use(bodyParser.json()); // 사용자가 웹사이트로 전달하는 정보들을 검사하는 미들웨어
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger("dev")); // application에서 발생하는 모든일들을 logging 함

app.use(localsMiddleware);

//use의 의미? 누군가 /user에 접속하면 이  router 전체를 사용하겠다는 의미
app.use(routes.home, globalRouter); // /join, /login, /search 등을 다룰꺼임
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
