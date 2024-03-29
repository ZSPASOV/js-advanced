// 1 create restaurant class with
// constructor - takes budget as param
// 2. loadProducts method - takes 1 argument(products: string[]),
// fill stocProducts object with data from the Array,
// add Action to history
// 3. addToMenu method - takes meal (string), products (array), price 
// adds meal to meal object. Returns arrays depending on action taken. 
// 4. showTheMenu() - returns all meals from object formatted. If no meals returns predifined string
// 5. makeTheOrder() - takes meal (string). Checks if the meal can be prepared ( has enough products).argument
// deducts products if meal is prepared. Prints result of the action that is taken. Adds meal price to totalBudget





class Restaurant {
    constructor(budget) {

    this.budgetMoney = Number(budget);
    this.menu = {};
    this.stockProducts = {};
    this.history = [];
    }


    loadProducts(products) {
        products.forEach((el) => {
            let [name, quantity, totalPrice] = el.split(' ');


            quantity = Number(quantity);
            totalPrice = Number(totalPrice);
            if (this.budgetMoney >= totalPrice) {
                if (!this.stockProducts[name]) {
                    this.stockProducts[name] = 0;
                }
                this.stockProducts[name] += quantity;
                this.budgetMoney -= totalPrice;
                this.history.push(`Successfully loaded ${quantity} ${name}`);
            } else {
                this.history.push(`There was not enough money to load ${quantity} ${name}`);
            }
        });

        return this.history.join('\n');
    }

    addToMenu(meal, products, price) {
        if (!this.menu[meal]) {
            this.menu[meal] = {
                products: {},
                price: price
            }

            products.forEach((el) => {
                let [name, quantity] = el.split(' ');
                quantity = Number(quantity);
                this.menu[meal].products[name] = quantity;
            })

            const mealCount = Object.keys(this.menu).length;
            if (mealCount == 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
            } else {
                return `Great idea! Now with the ${meal} we have ${mealCount} meals in the menu, other ideas?`
            } 

        } else {
            return `The ${meal} is already in the our menu, try something different.`
        }
    } 

    showTheMenu() {
        if (Object.keys(this.menu).length == 0) {
            return 'Our menu is not ready yet, please come later...';
        } else {
            let result = [];

            for (let meal in this.menu) {
                result.push(`${meal} - $ ${this.menu[meal].price}`);
            }

            return result.join('\n');
        }
    }

    makeTheOrder(meal) {
        if (!this.menu[meal]) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        } else {
            const neededProducts = {};
            for (let product in this.menu[meal].products) {
                if (!this.stockProducts[product] || this.stockProducts[product] < this.menu[meal].products[product]) {
                    return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
                } else {
                    neededProducts[product] = this.menu[meal].products[product];
                }
            }

            for (let neededProduct in neededProducts) {
                this.stockProducts[neededProduct] -= neededProducts[neededProduct];
            }

            this.budgetMoney += this.menu[meal].price;

            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
        }
    }
}


let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));


let kitchen2 = new Restaurant(1000);
console.log(kitchen2.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen2.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

let kitchen3 = new Restaurant(1000);
console.log(kitchen3.showTheMenu());

let kitchen4 = new Restaurant(1000);
kitchen4.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen4.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen4.makeTheOrder('frozenYogurt'));
