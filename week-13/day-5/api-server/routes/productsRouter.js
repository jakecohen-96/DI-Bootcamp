const { Router } = require("express");
const {
  getAllProducts,
  deleteProduct,
  updateProduct,
  addProduct,
  getProductById,
  searchProducts,
} = require("../controllers/productsController.js");

const router = Router();

/**
 * Read - GET
 */
router.get("/api/all", getAllProducts);

/**
 * Delete - DELETE
 */
router.delete("/:id", deleteProduct);

/**
 * Update - PUT
 */
router.put("/:id", updateProduct);

/**
 * Create - POST
 */
router.post("/", addProduct);
router.get("/all/:prod_id", getProductById);
router.get("/search", searchProducts);

module.exports = router;
