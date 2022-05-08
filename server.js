const express = require("express");
const path = require("path");
const PORT = 5000 || process.env.PORT;
const morgan = require("morgan");
const connectDB = require("./config/db");
const userRouter = require("./routes/userRoutes");
const portfolioRouter = require("./routes/portfolioRoutes");
const bodyParser = require("body-parser");
const cors = require("cors");

const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const xss = require("xss-clean");
const hpp = require("hpp");

const app = express();

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!",
});

app.use(
  helmet({ contentSecurityPolicy: false, crossOriginEmbedderPolicy: false })
);
app.use("/api", limiter);
app.use(xss());

app.use(express.json({ limit: "10kb" }));

app.use(
  cors({
    origin: "*",
  })
);
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.set("view engine", "ejs");

app.use("/api/v1/users", userRouter);
app.use("/api/v1/portfolio", portfolioRouter);

app.get("/api/v1/", (req, res) => {
  res.render("index");
});

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/dist", "index.html"));
});

app.listen(process.env.PORT, () => {
  try {
    connectDB();
    console.log(`App is listening on port: ${PORT}.`);
  } catch (err) {
    console.error(err);
  }
});
