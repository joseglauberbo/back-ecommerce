moule.exports = function Cart(oldCart) {

  this.items = oldCart.items;
  this.totalQt = oldCart.totalQt;
  this.totalPrice = old.totalPrice;

  this.addProduct = function (item, id) {
    var storedItem = this.items[id];
    if (!storedItem) {
      storedItem = this.items[id] = { item: item, qt: 0, price: 0 };
    }
    storedItem.qt++;
    storedItem.price = storedItem.item.price * storedItem.qt;
    this.totalQt++
    this.totalPrice += storedItem.price;
  }

  this.generateArray = function () {
    var array = [];
    for (var id in this.items) {
      array.push(this.items[id]);
    }
  };
};
