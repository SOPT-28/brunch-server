import express from "express";
const app = express();
import connectDB from "./loaders/db";

// Connect Database
connectDB();

app.use(express.json());

// Define Routes

app.use("/api/articles", require("./api/articles"));
app.use("/api/keywords", require("./api/keywords"));
// app.use("/api/search", require("./api/search"));
app.use("/api/writers", require("./api/writers"));


// error handler -> 포스트맨 요청 잘못보내면 이리로옴!
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "production" ? err : {};

  // render the error page
  res.status(err.status || 500).json({
    message: err.message,
    error: err
    });
 // res.render("error");
});

app
  .listen(5000, () => {
    console.log(`
    ################################################
    🛡️  Server listening on port: 5000 🛡️
    ################################################
  `);
  })
  .on("error", (err) => {
    console.error(err);
    process.exit(1);
  });
  