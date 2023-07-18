const { coffee2s } = require("../models");
const {upload} = require("../middleware/uploader")
const {imagekit} = require('../lib/imagekit');
exports.getAllNews = async (req, res) => {
  try {
    const listnews = await coffee2s.findAll({
      attributes: [
        "id",
        "coffeeshop_name",
        "desc",
        "address",
        "img",
      ],
    });
    res.status(200).json({
      success: true,
      message: "List All News",
      data: listnews,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.tambahData =  async (req, res) => {

  const {coffeeshop_name, desc, address, image} = req.body
  
  try {
    let listcoffee = await coffee2s.create({
      coffeeshop_name:coffeeshop_name,
      desc:desc,
      address:address,
      img:image,
    })
    
    res.status(200).json({
      success: true,
      message: "Add Succesfully",
      
    });
  } catch (error) {
    console.log(error);
  }
};


