import express from "express";
import mongoose from "mongoose";
import config from "./database/config";
import Routes from "./routes/movie.routes";

const app = express();
const port = config.port;

app.use(express.json());
app.use("/api/movies", Routes);

mongoose
  .connect(config.mongoCongig.uri)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
