Describe: Pizza()

Test: "It should return a Pizza object with five properties for toppings, size, toppingsCost, sizeCost, and totalCost"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
Expected Output: Pizza {toppings: ["anchovies", "pineapple"], size: "medium", toppingsCost: 0, sizeCost: 0, totalCost: 0}



Describe: Pizza.prototype.sizePrice()

Test: "It should return a sizeCost value of 12 when size value is 'small'"
Code:
let myPizza = new Pizza("anchovies", "small");
myPizza.sizePrice();
Expected Output: Pizza {toppings: "anchovies", size: "small", sizeCost: 12, toppingsCost: 0, totalCost: 0}

Test: "It should return a sizeCost value of 15 when size value is 'medium'"
Code:
let myPizza = new Pizza("anchovies", "medium");
myPizza.sizePrice();
Expected Output: Pizza {toppings: "anchovies", size: "medium", sizeCost: 15, toppingsCost: 0, totalCost: 0}

Test: "It should return a sizeCost value of 18 when size value is 'large'"
Code:
let myPizza = new Pizza("anchovies", "large");
myPizza.sizePrice();
Expected Output: Pizza {toppings: "anchovies", size: "large", sizeCost: 18, toppingsCost: 0, totalCost: 0}



Describe: Pizza.prototype.toppingsPrice()

Test: "It should return a toppingsCost value of 1.5 when the toppings value is an array containing a single item"
Code:
let myPizza = new Pizza(["anchovies"]);
myPizza.toppingsPrice();
Expected Output: Pizza {toppings: ["anchovies"], size: undefined, toppingsCost: 1.5, sizeCost: 0, totalCost: 0}

Test: "It should return a toppingsCost value equal to 1.5 times the length of the array stored in the toppings key-value pair"
Code:
let myPizza = new Pizza(["anchovies", "bananas"]);
myPizza.toppingsPrice();
Expected Output: Pizza {toppings: ["anchovies", "bananas"], size: undefined, toppingsCost: 3, sizeCost: 0, totalCost: 0}



Describe: Pizza.prototype.overallCost()

Test: "It should return an attribute called totalCost within the targeted Pizza object with a value equal to the sum of the sizeCost and toppingsCost values"
Code:
let myPizza = new Pizza(["anchovies"], "small")
myPizza.toppingsPrice();
myPizza.sizePrice();
myPizza.overallCost();
Expected Output: Pizza {toppings: ["anchovies], size: "small", toppingsCost: 1.5, sizeCost: 12, totalCost: 13.5}