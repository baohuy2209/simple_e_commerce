const authRouter = require("./auth.routes");
const clothesRouter = require("./clothes.routes");
function routes(app) {
  app.use("/api/auth", authRouter);
  app.use("/api/clothes", clothesRouter);
}
module.exports = routes;
