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

Pizza.prototype.overallCost = function() {
  this.totalCost = this.sizeCost + this.toppingsCost;
}

function sizeCreator() {
  const size = document.querySelector("input[name='size']:checked").value;
  return size;
}

function toppingsCreator() {
  const toppings = document.querySelectorAll("input[name='toppings']:checked");
  let toppingsArray = [];
  toppings.forEach(element => {
    toppingsArray.push(element.value);
  })
  return toppingsArray;
}

function errorMessage() {
  document.getElementById("order-output").innerText = "";
  const newH3 = document.createElement("h3");
  newH3.innerText = "Please Select At Least One Topping";
  document.getElementById("order-output").append(newH3);
}

function pizzaCreator() {
  const size = sizeCreator();
  const toppings = toppingsCreator();
  if (toppings.length === 0) {
    errorMessage();
  } else {
    const newPizza = new Pizza(toppings, size);
    return newPizza;
  }
}

function pizzaCost() {
  let newPizza = pizzaCreator();
  newPizza.sizeCost();
  newPizza.toppingsCost();
  newPizza.overallCost();
  return newPizza.totalCost;
}