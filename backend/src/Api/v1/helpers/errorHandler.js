const createError = require("http-errors");

// Catch 404 and forward to error handler
const notFoundHandler = (req, res, next) => {
  next(createError(404));
};

// Error handler
const errorHandler = (err, req, res, next) => {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render("error");
};

module.exports = {
  notFoundHandler,
  errorHandler,
};
