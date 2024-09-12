const mongoose = require("mongoose");
const config = require("./config");
let conn;

const connectDb = async () => {
  try {
    mongoose.set("strictQuery", false);
    conn = await mongoose.connect(config.uri);
    console.log(`Database Connected on ${config.uri}`);
  } catch (error) {
    console.log(error);
  }
};

const closeDb = async () => {
  if (conn) {
    await conn.close();
    console.log("MongoDB connection closed");
  }
};

module.exports = {
  connectDb,
  closeDb,
};
