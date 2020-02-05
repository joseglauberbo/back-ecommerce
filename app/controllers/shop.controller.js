var Strategy = require("../service/strategyPromotion")

var arrayOfProducts = [];
var arrayWithValue;
var totalValue = 0;
var sizeOfShop = 0;

exports.addProductToShop = (req, res) => {

  let product = req.body
  let productPromotion = product.promotion
  let productPrice = product.price

  //using strategy to promotion
  if (productPromotion != 0) {
    let object = Strategy[productPromotion](product)
    arrayOfProducts.push(object)
    arrayWithValue = []
    arrayWithValue.push(this.calculaValorDoCarrinho(object.price))
  } else {
    productPrice = product.qt * productPrice
    let object = { qt: product.qt, id: product.id, name: product.name, price: productPrice, promotion: product.promotion }
    arrayOfProducts.push(object)
    arrayWithValue = []
    arrayWithValue.push(this.calculaValorDoCarrinho(object.price))
  }
}

exports.calculaValorDoCarrinho = (productPrice) => {

  let objectWithValueAndSize = {}

  totalValue = totalValue + productPrice
  sizeOfShop = sizeOfShop + 1

  objectWithValueAndSize = { value: totalValue, size: sizeOfShop }

  return objectWithValueAndSize

}

exports.getAllProducts = (req, res) => {
  res.status(200).send(arrayOfProducts);
}

exports.getInfoAboutShopCart = (req, res) => {
  res.status(200).send(arrayWithValue);
}


