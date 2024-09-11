require("dotenv").config();
const express = require("express");
const { connectDb, closeDb } = require("../config/config");

const app = express();

const startServer = async () => {
  try {
    await connectDb(); // Connect to database
    const port = process.env.PORT || 4000;
    const server = app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });

    // Graceful Shutdown
    process.on("SIGTERM", async () => {
      console.log("SIGTERM signal received: closing HTTP server");
      server.close(async () => {
        console.log("HTTP server closed");
        await closeDb(); // Close the database connection
        process.exit(0); // Exit process with success
      });
    });

    process.on("SIGINT", async () => {
      console.log("SIGINT signal received: closing HTTP server");
      server.close(async () => {
        console.log("HTTP server closed");
        await closeDb(); // Close the database connection
        process.exit(0); // Exit process with success
      });
    });
  } catch (error) {
    console.error("Unable to start server:", error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = {
  app,
  startServer,
};
