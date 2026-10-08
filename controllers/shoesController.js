const shoeModel = require("../models/shoesModel");

const getAllShoes = (req, res, next) => {
  try {
    const shoes = shoeModel.getAllShoes(req.query.merek);

    res.status(200).json({
      success: true,
      data: shoes
    });
  } catch (error) {
    next(error);
  }
};

const getShoeById = (req, res, next) => {
  try {
    const shoe = shoeModel.getShoeById(req.params.id);

    if (!shoe) {
      const error = new Error("Data sepatu tidak ditemukan");
      error.status = 404;
      throw error;
    }

    res.status(200).json({
      success: true,
      data: shoe
    });
  } catch (error) {
    next(error);
  }
};

const createShoe = (req, res, next) => {
  try {
    const { namaProduk, merek, ukuran, harga, stok } = req.body;

    if (
      !namaProduk ||
      !merek ||
      ukuran === undefined ||
      harga === undefined ||
      stok === undefined
    ) {
      const error = new Error("Data sepatu tidak lengkap");
      error.status = 400;
      throw error;
    }

    const newShoe = shoeModel.createShoe({
      namaProduk,
      merek,
      ukuran: Number(ukuran),
      harga: Number(harga),
      stok: Number(stok)
    });

    res.status(201).json({
      success: true,
      message: "Data sepatu berhasil ditambahkan",
      data: newShoe
    });
  } catch (error) {
    next(error);
  }
};

const updateShoe = (req, res, next) => {
  try {
    const updatedShoe = shoeModel.updateShoe(req.params.id, req.body);

    if (!updatedShoe) {
      const error = new Error("Data sepatu tidak ditemukan");
      error.status = 404;
      throw error;
    }

    res.status(200).json({
      success: true,
      message: "Data sepatu berhasil diubah",
      data: updatedShoe
    });
  } catch (error) {
    next(error);
  }
};

const deleteShoe = (req, res, next) => {
  try {
    const deleted = shoeModel.deleteShoe(req.params.id);

    if (!deleted) {
      const error = new Error("Data sepatu tidak ditemukan");
      error.status = 404;
      throw error;
    }

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllShoes,
  getShoeById,
  createShoe,
  updateShoe,
  deleteShoe
};