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

class Car {
    constructor(mark, model, year, plate) {
        this.mark = mark;
        this.model = model;
        this.year = year;
        this.plate = plate;
    }

    addOwner(instance) {
        if(instance.age > 18) {
            this.owner = instance;
        } else {
            console.log('Sorry, you"re still young to drive');
        }
    }

    showAllInformation() {
        console.log(this.mark, this.model, this.year, this.plate);
        this.owner.showInformation();
    }
}

const firstCar = new Car('Audi', 'Q3', 2023, 'BH1941EX');
firstCar.addOwner(danylo);
firstCar.showAllInformation();
// console.log(firstCar);

const secondCar = new Car('Porshe', 'Macan', 2021, 'BH7879AM');
secondCar.addOwner(nikita);
secondCar.showAllInformation();
// console.log(secondCar);