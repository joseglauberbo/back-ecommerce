export default class PromotionsManager {

  constructor() { }

  //se o usuário quiser adicionar uma nova promoção é só criar uma função
  pague1Leve2(product) {

    let productName = product.name
    let productId = product.id
    let productPrice = product.price
    let productPromotion = product.promotion
    let productQt = product.qt

    if (productPromotion == 1) {
      if ((productQt % 2) == 0) {
        let qtAux = (productQt) / 2
        productPrice = qtAux * productPrice
        var obj = { qt: productQt, id: productId, name: productName, price: productPrice, promotion: productPromotion }
      } else {
        productPrice = productQt * productPrice
        var obj = { qt: productQt, id: productId, name: productName, price: productPrice, promotion: productPromotion }
      }
    }
    return obj
  }

  promocao3por10(product) {

    let productName = product.name
    let productId = product.id
    let productPrice = product.price
    let productPromotion = product.promotion
    let productQt = product.qt

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
}