import PromotionsManager from '../service/gerenciadorPromocoes'

let arrayOfProducts = [];

exports.addProductToShop = (req, res) => {

  let product = req.body
  let productPromotion = product.promotion
  let productPrice = product.price

  const gerenciador = new PromotionsManager()

  //logica da promoção p mudar o carrinho => delegate
  if (productPromotion != 0) {
    if (productPromotion == 1) {
      let obj = gerenciador.pague1Leve2(product)
      arrayOfProducts.push(obj)
    } else {
      let obj = gerenciador.promocao3por10(product)
      arrayOfProducts.push(obj)
    }
  } else {
    productPrice = product.qt * productPrice
    var obj = { qt: product.qt, id: product.id, name: product.name, price: productPrice, promotion: product.promotion }
    arrayOfProducts.push(obj);
  }
}

exports.getAllProducts = (req, res) => {
  res.status(200).send(arrayOfProducts);
}



