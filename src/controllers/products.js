const ProductService = require("../services/ProductService");
 
// get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await ProductService.getAllProducts();
    res.send({ data: products, status: "success" });
  } catch (err) {
    
    res.status(500).send({ error: err.message });
  }
};
 
//create products
exports.createProduct = async (req, res) => {
  try {
    const product = await ProductService.createProduct(req.body);
    res.redirect('/add-product');
    // res.send({ data: product, status: "success" });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};
 
// get a single product
exports.getProductById = async (req, res) => {
  try {
    const product = await ProductService.getProductById(req.params.id);
    res.send({ data: product, status: "success" });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};
 
// update a single product
exports.updateProduct = async (req, res) => {
  try {
    const product = await ProductService.updateProduct(req.params.id, req.body);
    res.send({ data: product, status: "success" });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};
 
// delete a single product
exports.deleteProduct = async (req, res) => {
  try {
    const product = await ProductService.deleteProduct(req.params.id);
    res.send({ data: product, status: "success" });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};