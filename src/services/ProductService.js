const Product = require("../models/Product.model");
 
exports.getAllProducts = async () => {
  return await Product.find();
};
 
exports.AddProduct = async (blog) => {
  return await Product.create(blog);
};
exports.getProductById = async (id) => {
  return await Product.findById(id);
};
 
exports.updateProduct = async (id, blog) => {
  return await Product.findByIdAndUpdate(id, blog);
};
 
exports.deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};