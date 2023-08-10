const Product = require("../Model/productModel");

const addProduct = async (req, res) => {
  console.log("req.file:", req.file);
  console.log("req.body:", req.body);
  try {
    const image = req.file.filename;
    const { sku, name, price, model, manufacturer } = req.body;

    const productData = { image, sku, name, price, model, manufacturer };

    const product = new Product(productData);
    const result = await product.save();

    res.status(201).send("Product added successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const showProduct = async (req, res) => {
  try {
    const product = await Product.find(req.body);
    res.status(201).send(product);
  } catch (error) {
    console.log(error);
    res.status(500).send("----------");
  }
};



const findForUpdateProduct = async(req,res)=>{
  try {
    const product = await Product.findOne({ _id : req.params.id})
    res.status(201).send(product)
  } catch (error) {
    console.log(error)
    res.status(500).send('================')
  }
}



const UpdateProduct = async(req,res)=>{
  try {
    const product = await Product.updateOne(
      { _id : req.params.id},
      {$set:req.body}
      )
    res.status(201).send(product)
  } catch (error) {
    console.log(error)
    res.status(500).send('================')
  }
}


const deleteProduct = async(req,res)=>{
  try {
    const product = await Product.deleteOne({_id: req.params.id})
    res.status(500).send(product)
  } catch (error) {
    console.log(error)
    res.status(500).send('**********************')
  }
}




module.exports = {
  addProduct,
  showProduct,
  findForUpdateProduct,
  UpdateProduct,
  deleteProduct,
};
