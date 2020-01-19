import PromotionsManager from '../service/gerenciadorPromocoes'

let arrayOfProducts = [];
let arrAux = [];
let totalValue = 0;
let sizeShopCart = 0
let varControle = 0;

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
      arrAux = []
      let obj2 = this.calculaValorDoCarrinho(arrayOfProducts)
      arrAux.push(obj2)
    } else {
      let obj = gerenciador.promocao3por10(product)
      arrayOfProducts.push(obj)
      arrAux = []
      let obj2 = this.calculaValorDoCarrinho(arrayOfProducts)
      arrAux.push(obj2)
    }
  } else {
    productPrice = product.qt * productPrice
    var obj = { qt: product.qt, id: product.id, name: product.name, price: productPrice, promotion: product.promotion }
    arrayOfProducts.push(obj);
    arrAux = []
    let obj2 = this.calculaValorDoCarrinho(arrayOfProducts)
    arrAux.push(obj2)
  }
}

exports.calculaValorDoCarrinho = (arrayOfProducts) => {

  var obj = {}

  console.log('aqui')
  for (var productIndex = varControle; productIndex < arrayOfProducts.length; productIndex++) {
    totalValue = totalValue + arrayOfProducts[productIndex].price
    varControle = varControle + 1;
  }

  obj = { value: totalValue }

  console.log(obj)

  return obj
}

exports.getAllProducts = (req, res) => {
  res.status(200).send(arrayOfProducts);
}

exports.getInfoAboutShopCart = (req, res) => {
  res.status(200).send(arrAux);
}


