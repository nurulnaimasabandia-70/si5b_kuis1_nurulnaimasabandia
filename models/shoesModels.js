let shoes = [
  {
    id: 1,
    namaProduk: "Sepatu Lari Hyperblast",
    merek: "Ortuseight",
    ukuran: 42,
    harga: 529000,
    stok: 10
  },
  {
    id: 2,
    namaProduk: "Sepatu Futsal Catalyst",
    merek: "Specs",
    ukuran: 41,
    harga: 449000,
    stok: 8
  },
  {
    id: 3,
    namaProduk: "Sepatu Training Power",
    merek: "League",
    ukuran: 40,
    harga: 399000,
    stok: 12
  }
];

let nextId = 4;

const getAllShoes = (merek) => {
  if (merek) {
    return shoes.filter(
      (shoe) => shoe.merek.toLowerCase() === merek.toLowerCase()
    );
  }

  return shoes;
};

const getShoeById = (id) => {
  return shoes.find((shoe) => shoe.id === Number(id));
};

const createShoe = (data) => {
  const newShoe = {
    id: nextId++,
    ...data
  };

  shoes.push(newShoe);
  return newShoe;
};

const updateShoe = (id, data) => {
  const index = shoes.findIndex((shoe) => shoe.id === Number(id));

  if (index === -1) {
    return null;
  }

  shoes[index] = {
    ...shoes[index],
    ...data
  };

  return shoes[index];
};

const deleteShoe = (id) => {
  const index = shoes.findIndex((shoe) => shoe.id === Number(id));

  if (index === -1) {
    return false;
  }

  shoes.splice(index, 1);
  return true;
};

module.exports = {
  getAllShoes,
  getShoeById,
  createShoe,
  updateShoe,
  deleteShoe
};