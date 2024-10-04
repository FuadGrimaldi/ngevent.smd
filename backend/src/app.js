const configureMiddleware = require("./middlewares/middleware");
const { app, startServer } = require("../config/server");
const NotFoundMiddleware = require("./middlewares/not-found");
const handlerErrorMiddleware = require("./middlewares/handler-error");
const cors = require("cors");
const router = require("./routes/api");

// CORS Configuration
app.use(cors());

// Middleware
configureMiddleware(app);

// router
app.use("/api/v1", router);

// test welcome
app.use("/", (req, res) => {
  res.status(200).json({
    message: "Api ngevent.smd",
  });
});

// middleware error
app.use(NotFoundMiddleware);
app.use(handlerErrorMiddleware);

startServer();
