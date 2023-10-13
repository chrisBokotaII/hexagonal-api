import dotenv from "dotenv";
dotenv.config();
const {
  MONGO_USER = "",
  MONGO_PASSWORD = "",
  MONGO_DB = "",
  NODE_ENV = "development",
  PORT = 5000,
} = process.env;
const MONGO_DB_URI = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0.hi8a955.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority
`;
const config = {
  mongoCongig: {
    uri: MONGO_DB_URI,
  },
  port: PORT,
};
if (NODE_ENV === "production") {
  config.mongoCongig.uri = MONGO_DB_URI;
  config.port = PORT;
}
export default config;
