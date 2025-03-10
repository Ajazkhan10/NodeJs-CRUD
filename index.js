const express = require("express");
const app = express();
const port = 8000;
const userRouter = require("./routes/users");
const { connect } = require("./connections");
const logRequest = require("./midlewares");



app.use(express.urlencoded({ extended: false }));
app.use(logRequest("task.txt"));



connect("mongodb://localhost:27017/youtubeApp");

app.use("/api/users", userRouter);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
