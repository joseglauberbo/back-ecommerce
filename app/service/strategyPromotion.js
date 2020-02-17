var productName;
var productId;
var productPrice;
var productPromotion;
var productQt;

function pague1Leve2(product) {

  productName = product.name
  productId = product.id
  productPrice = product.price
  productPromotion = product.promotion
  productQt = product.qt

  if ((productQt % 2) == 0) {
    let qtAux = (productQt) / 2
    productPrice = qtAux * productPrice
    var obj = { qt: productQt, id: productId, name: productName, price: productPrice, promotion: productPromotion }
  } else {
    productPrice = productQt * productPrice
    var obj = { qt: productQt, id: productId, name: productName, price: productPrice, promotion: productPromotion }
  }
  return obj
}

function trêsPorDez(product) {
  productName = product.name
  productId = product.id
  productPrice = product.price
  productPromotion = product.promotion
  productQt = product.qt

  if ((productQt % 3) == 0) {
    let qtAux = (productQt) / 3
    productPrice = qtAux * 10
    var obj = { qt: productQt, id: productId, name: productName, price: productPrice, promotion: productPromotion }
  } else {
    productPrice = productQt * productPrice
    var obj = { qt: productQt, id: productId, name: productName, price: productPrice, promotion: productPromotion }
  }
  return obj
}

module.exports["1"] = pague1Leve2;
module.exports["2"] = trêsPorDez;