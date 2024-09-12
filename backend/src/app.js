const configureMiddleware = require("./Api/v1/middlewares/middleware");
const { app, startServer } = require("../config/server");
const {
  notFoundHandler,
  errorHandler,
} = require("./Api/v1/helpers/errorHandler");
const corsConfig = require("./Api/v1/middlewares/cors");
const router = require("./Api/v1/routes/api");

// CORS Configuration
app.options("*", corsConfig);

// Middleware
configureMiddleware(app);

// router
app.use("/api/v1", router);

// Catch 404 and forward to error handler
app.use(notFoundHandler);

// Error handler
app.use(errorHandler);

startServer();
