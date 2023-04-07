function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.sizeCost = function() {
  if (this.size === "small") {
    this.sizeCost = 12;
  } else if (this.size === "medium") {
    this.sizeCost = 15;
  } else if (this.size === "large") {
    this.sizeCost = 18;
  }
};

Pizza.prototype.toppingsCost = function() {
  this.toppingsCost = this.toppings.length * 1.50;
  //Note that we can use toFixed on the toppingsCost value to display it as a string with the floating 0 if desired
}

Pizza.prototype.totalCost = function() {
  this.totalCost = this.sizeCost + this.toppingsCost;
}