var Sistema = require("../service/sistema")

let qtProdutoAdicionado = 0;
let arrayOfProducts = [];
let valorTotal = 0;
let qtProdutos = 0;

exports.addProductToShop = (req, res) => {

  console.log(req.body)
  let promotionOfProduct = req.body.hasPromotion;

  //logica da promoção p mudar o carrinho => delegate

  arrayOfProducts.push((req.body));
  res.status(200).send(arrayOfProducts);

}

exports.AddProductsToArray = (req, res) => {

}

exports.getAllProducts = (req, res) => {
  console.log(arrayOfProducts);
  res.status(200).send(arrayOfProducts);
}

