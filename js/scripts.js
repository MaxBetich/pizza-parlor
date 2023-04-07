function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.sizeCost = function() {
  if (this.size === "small") {
    this.sizeCost = 12;
  } else if (this.size === "medium") {
    this.sizeCost = 15;
  }
};