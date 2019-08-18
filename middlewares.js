//locals에 로컬변수를 저장하면, 이 변수들을 템플릿에서 사용할 수 있음

import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "HwaTube";
  res.locals.routes = routes;
  next();
};
