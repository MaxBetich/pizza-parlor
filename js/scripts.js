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
    const newPizza = new Pizza(toppings, size);
    return newPizza;
}

function pizzaCost() {
  let newPizza = pizzaCreator();
  if (newPizza !== undefined) {
    newPizza.sizeCost();
    newPizza.toppingsCost();
    newPizza.overallCost();
    return newPizza.totalCost;
  }
}

function orderSubmit(event) {
  event.preventDefault();
  const orderPizza = pizzaCreator();
  if (orderPizza.toppings.length === 0) {
    errorMessage();
  } else {
    const orderCost = pizzaCost();
    const outputDiv = document.getElementById("order-output");
    outputDiv.innerText = "";
    const newH4 = document.createElement("h4");
    newH4.innerText = "Your Order:"
    outputDiv.append(newH4);
    const newP = document.createElement("p");
    newP.innerText = "Size: " + (orderPizza.size).toUpperCase();
    outputDiv.append(newP);
    const newP2 = document.createElement("p");
    newP2.innerText = "Toppings:"
    outputDiv.append(newP2);
    const newUl = document.createElement("ul");
    orderPizza.toppings.forEach(topping => {
      let newLi = document.createElement("li");
      newLi.append(topping);
      newUl.append(newLi);
    });
    outputDiv.append(newUl);
    const newP3 = document.createElement("p");
    newP3.innerText = "Cost: $" + orderCost.toFixed(2);
    outputDiv.append(newP3);
  }
}

window.addEventListener("load", function() {
  const form = document.querySelector("form");
  form.addEventListener("submit", orderSubmit);
});