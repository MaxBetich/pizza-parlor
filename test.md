Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
Expected Output: Pizza {toppings: ["anchovies", "pineapple"], size: "medium"}



Describe: Pizza.prototype.sizeCost()

Test: "It should create an attribute called sizeCost within the targeted Pizza object"
Code: 
let myPizza = new Pizza();
myPizza.sizeCost();
Expected Output: Pizza {toppings: undefined, size: undefined, sizeCost: 0}

Test: "It should return a sizeCost value of 12 when size value is 'small'"
Code:
let myPizza = new Pizza("anchovies", "small");
myPizza.sizeCost();
Expected Output: Pizza {toppings: "anchovies", size: "small", sizeCost: 12}

Test: "It should return a sizeCost value of 15 when size value is 'medium'"
Code:
let myPizza = new Pizza("anchovies", "medium");
myPizza.sizeCost();
Expected Output: Pizza {toppings: "anchovies", size: "medium", sizeCost: 15}

Test: "It should return a sizeCost value of 18 when size value is 'large'"
Code:
let myPizza = new Pizza("anchovies", "large");
myPizza.sizeCost();
Expected Output: Pizza {toppings: "anchovies", size: "large", sizeCost: 18}



Describe: Pizza.prototype.toppingsCost()

Test: "It should create an attribute called toppingsCost within the targeted Pizza object"
Code:
let myPizza = new Pizza();
myPizza.toppingsCost();
Expected Output: Pizza {toppings: undefined, size: undefined, toppingsCost: 0}

Test: "It should return a toppingsCost value of 1.50 when the toppings value is an array containing a single item"
Code:
let myPizza = new Pizza(["anchovies"]);
myPizza.toppingsCost();
Expected Output: Pizza {toppings: ["anchovies"], size: undefined, toppingsCost: 1.50}