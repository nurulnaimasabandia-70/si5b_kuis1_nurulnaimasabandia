const express = require("express");

const router = express.Router();

const shoeController = require("../controllers/shoesController");
const cekApiKey = require("../middlewares/cekApiKey");

router.get("/", shoeController.getAllShoes);
router.get("/:id", shoeController.getShoeById);

router.post("/", cekApiKey, shoeController.createShoe);
router.put("/:id", cekApiKey, shoeController.updateShoe);
router.delete("/:id", cekApiKey, shoeController.deleteShoe);

module.exports = router;