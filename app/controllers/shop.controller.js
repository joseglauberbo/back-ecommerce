var shopService = require("../service/shop.service")

exports.addProductToShop = (req, res) => {
  shopService["addProductToShop"](req, res)
}

exports.calculaValorDoCarrinho = (productPrice) => {
  shopService["calculaValorDoCarrinho"](productPrice)
}

exports.getAllProducts = (req, res) => {
  shopService["getAllProducts"](req, res)
}

exports.getInfoAboutShopCart = (req, res) => {
  shopService["getInfoAboutShopCart"](req, res)
}


