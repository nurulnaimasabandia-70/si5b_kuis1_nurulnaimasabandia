const errorHandler = (err, req, res, next) => {
  console.error(err.message);

  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res.status(400).json({
      success: false,
      message: "Format JSON tidak valid"
    });
  }

  const status = err.status || 500;

  res.status(status).json({
    success: false,
    message: err.message || "Terjadi kesalahan pada server"
  });
};

module.exports = errorHandler;