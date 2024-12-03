const { db } = require("../config/neondb.js");
const products = [
  { id: 101, name: "iPhone", price: 800 },
  { id: 201, name: "iPad", price: 700 },
  { id: 301, name: "iWatch", price: 600 },
];

const getAllProductsDB = () => {
  return db("products").select("id", "name", "price", "description");
};

const getProductByIdDB = (id) => {
  return db("products")
    .select("id", "name", "price", "description")
    .where({ id });
};

const insertProductDB = (name, price) => {
  return db("products").insert({ name, price }, ["id", "name", "price"]);
};

module.exports = {
  products,
  getAllProductsDB,
  getProductByIdDB,
  insertProductDB
};
