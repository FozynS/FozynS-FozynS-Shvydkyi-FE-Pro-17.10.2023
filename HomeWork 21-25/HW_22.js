/*
1. Створити сутність "Людина".
Властивості:
    імʼя;
    вік.
Методи:
    конструктор, який приймає два параметри: імʼя та вік;
    метод, який виводить у консоль інформацію про людину.
*/

class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    showInformation() {
        console.log(`name: ${this.name} \n age: ${this.age} years old \n`);
    }
}

const danylo = new Human('Danylo', 22);
// danylo.showInformation();
const nikita = new Human('Nikita', 17);
// nikita.showInformation();

/*
2. Створити сутність "Автомобіль".
Властивості:
    марка, модель, рік виписку, номерний знак (або на Ваш розсуд);
    власник.
Методи:
конструктор, який приймає чотитри параметри (тобто, всі окрім власника): марка, модель, рік виписку, номерний знак 
присвоїти власника - метод повинен приймати екземпляр класу Людина, та зберігати екземпляр класу Людина у відповідному полі, якщо вік більше 18, інакше виводити у консоль відповідне повідомлення
метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації класу Людина для виведення інформації про власника
В якості демонстраціїї створити:
декілька екземплярів класу Людина;
декілька екземплярів класу Автомобіль;
присвоїти власників автомобілям.
*/

class Car {
    constructor(mark, model, year, plate) {
        this.mark = mark;
        this.model = model;
        this.year = year;
        this.plate = plate;
        this.owner = this.owner;
    }

    addOwner(instance) {
        if(instance.age > 18) {
            this.owner = instance.name;
        } else {
            console.log('Sorry, you"re still young to drive');
        }
    }

    showAllInformation(instance) {
        console.log(this.mark, this.model, this.year, this.plate);
        instance.showInformation();
    }
}

const firstCar = new Car('Audi', 'Q3', 2023, 'BH1941EX');
firstCar.addOwner(danylo);
firstCar.showAllInformation(danylo);
// console.log(firstCar);
const secondCar = new Car('Porshe', 'Macan', 2021, 'BH7879AM');
secondCar.addOwner(nikita);
secondCar.showAllInformation(nikita);
// console.log(secondCar);