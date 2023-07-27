const { where } = require("sequelize");
const { coffee2 } = require("../models");

exports.getAllNews = async (req, res) => {
  try {
    const listnews = await coffee2.findAll({
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

exports.getNewsById = async (req, res) => {
  try {
    const { newsId } = req.params
    const listnews = await coffee2.findAll({
      attributes: [
        "id",
        "coffeeshop_name",
        "desc",
        "address",
        "img",
      ],
      where: {
        id: newsId,
      }
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
    let listcoffee = await coffee2.create({
      coffeeshop_name:coffeeshop_name,
      desc:desc,
      address:address,
      img:image,
    })
    
    listcoffee = JSON.parse(JSON.stringify(listcoffee))
    res.status(200).json({
      success: true,
      message: "Add Succesfully",
      
    });
  } catch (error) {
    console.log(error);
  }
};


