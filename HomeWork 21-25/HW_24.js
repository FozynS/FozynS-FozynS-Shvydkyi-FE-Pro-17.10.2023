/*
Мережа фастфудів пропонує кілька видів гамбургерів:
    маленький (50 тугриків, 20 калорій);
    великий (100 тугриків, 40 калорій).
Гамбургер може бути з одним із декількох видів начинок:
    сиром (+ 10 тугриків, + 20 калорій);
    салатом (+ 20 тугриків, + 5 калорій);
    картоплею (+ 15 тугриків, + 10 калорій).
Можна додати добавки:
    посипати приправою (+15 тугриків, 0 калорій) - полити майонезом (+ 20 тугриків, +5 калорій).
    Напишіть програму, яка розраховує вартість та калорійність гамбургера. Використовуйте ООП підхід.
(підказка: потрібен клас Гамбургер, константи, методи для вибору опцій та розрахунку потрібних величин)
*/
class Hamburger{
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
        this.price = size.price + stuffing.price;
        this.calories = size.calories + stuffing.calories;
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
        this.price += topping.price;
        this.calories += topping.calories;
    }

    calculateCalories() {
        return this.calories;
    }

    calculatePrice() {
        return this.price;
    }
}
// маленький гамбургер з начинкою з сиру
let bigHamburger = new Hamburger(Hamburger.SIZE_BIG, Hamburger.STUFFING_CHEESE);
console.log(bigHamburger)

// добавка з майонезу
bigHamburger.addTopping(Hamburger.TOPPING_MAYO);
console.log(bigHamburger)

// запитаємо скільки там калорій
console.log("Calories: " + bigHamburger.calculateCalories());

// скільки коштує
console.log("Price: " + bigHamburger.calculatePrice());

// я тут передумав і вирішив додати ще приправу
bigHamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А скільки тепер коштує?
console.log("Price with sauce: " + bigHamburger.calculatePrice());
console.log(bigHamburger)