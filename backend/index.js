const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
dotenv.config();
const app = express();
const connectDB = require("./db/connectDB");
const PORT = process.env.PORT || 3000;
var routes = require("./routes/index.routes");
connectDB();
// app.all("/", function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   next();
// });
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     credentials: true,
//     allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"], // allow specific headers
//   })
// );
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/hello", (req, res) => {
  res.json({ message: "Hello" });
});
routes(app);
app.listen(() => {
  console.log(`Listening on http://localhost:${PORT}`);
});
