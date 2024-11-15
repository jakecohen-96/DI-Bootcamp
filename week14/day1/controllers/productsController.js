const { products } = require("../models/productsData.js");
const {
  getAllProductsDB,
  getProductByIdDB,
  insertProductDB,
} = require("../models/productsData.js");

const getAllProducts = async (req, res) => {
  try {
    const data = await getAllProductsDB();
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "somthing went wrong" });
  }
};

const deleteProduct = (req, res) => {
  const { id } = req.params;
  const index = products.findIndex((item) => item.id == id);
  if (index === -1) {
    return res.status(404).send("product to delete not found");
  }
  products.splice(index, 1);
  res.json(products);
};

const updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const index = products.findIndex((item) => item.id == id);

  if (index === -1) {
    return res.status(404).send("product to update not found");
  }

  products[index] = { ...products[index], name, price };

  res.json(products);
};

const addProduct = async (req, res) => {
  console.log(req.body);
  const { name, price } = req.body;
  try {
    const data = await insertProductDB(name, price);
    res.json(data);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
  // const newProduct = { name, price, id: products.length + 1 };
  // products.push(newProduct);
  // //   res.json(products);
  // res.sendStatus(201);
};

const getProductById = async (req, res) => {
  console.log(req.params);
  const { prod_id } = req.params;

  try {
    const [data] = await getProductByIdDB(prod_id);
    if (!data) {
      return res.sendStatus(404);
    }
    res.json(data);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
  // const myProd = products.find((item) => item.id == prod_id);
  // if (!myProd) {
  //   // return res.status(404).send('not found')
  //   return res.sendStatus(404);
  // }
  // res.send(myProd);
};
const searchProducts = (req, res) => {
  console.log(req.query);
  const { name } = req.query;
  const filtered = products.filter((item) => {
    return item.name.toLowerCase().includes(name.toLowerCase());
  });
  if (filtered.length === 0) {
    return res.status(404).send("no product match your search!!!");
  }
  res.json(filtered);
};

module.exports = {
  getAllProducts,
  deleteProduct,
  updateProduct,
  addProduct,
  getProductById,
  searchProducts,
};
