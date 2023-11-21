class Hamburger{
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }
    static SIZE_SMALL = {price: 50, calories: 20};
    static SIZE_BIG = {price: 100, calories: 40};

    static STUFFING_CHEESE = {price: 10, calories: 20};
    static STUFFING_SALAD = {price: 20, calories: 5};
    static STUFFING_POTATO = {price: 15, calories: 10};

    static TOPPING_SAUCE = {price: 15, calories: 0};
    static TOPPING_MAYO = {price: 20, calories: 5};

    addTopping(topping) {
        this.toppings.push(topping); 
    }
    
    searchAttribute(atribute, array) {
        let total = 0;
        for(let i = 0; i < array.length; i++){
            total += array[i][atribute];
        }
        return total;
    }
    calculateCalories() {
        return this.searchAttribute('calories', this.toppings) + this.size.calories + this.stuffing.calories;
    }

    calculatePrice() {
        return this.searchAttribute('price', this.toppings) + this.size.price + this.stuffing.price;
    }
}
// маленький гамбургер з начинкою з сиру
let bigHamburger = new Hamburger(Hamburger.SIZE_BIG, Hamburger.STUFFING_CHEESE);
// console.log(bigHamburger)

// добавка з майонезу
bigHamburger.addTopping(Hamburger.TOPPING_MAYO);
// console.log(bigHamburger)

// запитаємо скільки там калорій
console.log("Calories: " + bigHamburger.calculateCalories());

// скільки коштує
console.log("Price: " + bigHamburger.calculatePrice());

// я тут передумав і вирішив додати ще приправу
bigHamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А скільки тепер коштує?
console.log("Price with sauce: " + bigHamburger.calculatePrice());
// console.log(bigHamburger);