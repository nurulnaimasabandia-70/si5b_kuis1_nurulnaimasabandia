require("dotenv").config();

const express = require("express");
const cors = require("cors");

const logger = require("./middlewares/logger");
const errorHandler = require("./middlewares/errorHandler");
const shoesRoutes = require("./routes/shoesRoutes");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(logger);
app.use(express.json());

app.use("/shoes", shoesRoutes);

app.use((req, res, next) => {
  const error = new Error("Route tidak ditemukan");
  error.status = 404;
  next(error);
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});