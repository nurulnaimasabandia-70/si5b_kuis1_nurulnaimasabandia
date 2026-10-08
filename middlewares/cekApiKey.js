require("dotenv").config();

const cekApiKey = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];

  if (!apiKey || apiKey !== process.env.API_KEY) {
    const error = new Error("API Key tidak valid atau tidak ada");
    error.status = 401;
    return next(error);
  }

  next();
};

module.exports = cekApiKey;