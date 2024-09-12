const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  uri: process.env.MONGODB_URI,
  dbname: process.env.DBNAME,
  port: process.env.PORT,
  secret_key: process.env.JWT_SECRET,
};
