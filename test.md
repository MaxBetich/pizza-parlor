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
let myPizza = new Pizza("anchovies", "small")
myPizza.sizeCost();
Expected Output: Pizza {toppings: "anchovies", size: "small", sizeCost: 12}