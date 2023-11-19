/*
1. Створити клас Людина.
Властивості:
    імʼя;
    стать.
Методи:
    конструктор, який приймає два параметри: імʼя та стать.
*/

class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

const danylo = new Person('Danylo', 'male');
const nikita = new Person('Nikita', 'male');
const taya = new Person('Taisiia', 'female');
const katya = new Person('Katerina', 'female');
// console.log(danylo,'\n',taya,'\n',nikita,'\n',katya);

/*
2. Створити клас Квартира.
Властивості:
    конструктор не потрібен;
    масив жителів, який при створенні пустий.
Методи:
    додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.
*/

class Apartment {
    residents = [];
    addResident(instance) {
        this.residents.push(instance.name);
    }
}

const firstPair = new Apartment();
firstPair.addResident(danylo);
firstPair.addResident(taya);


const secondPair = new Apartment();
secondPair.addResident(nikita);
secondPair.addResident(katya);

/*
3. Створити клас Будинок.
Властивості:
    масив квартир, який при створенні пустий;
    максимальна кількість квартир.
Методи:
    конструктор, який приймає один параметр: максимальну кількість квартир;
    додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти, 
    чи не буде кількість перевищувати максимальну кількість квартир, і якщо це так, додати квартиру, 
    в іншому випадку виводить у консоль відповідне повідомлення.
*/

class House {
    constructor(max) {
        this.maxApartments = max;
        this.apartments = [];
    }
    
    addApartment(instance) {
        if(this.maxApartments <= 0) {
            console.log('Sorry we dont have any apartment');
        } else {
            this.apartments.push(instance);
        }
    }

    /**
    addApartment = (instance) => this.maxApartments <= 0 
        ? console.log('Sorry we dont have any apartment')
        : this.apartments.push(instance);
    */
    
    /** 
    addApartment = (instance) => {
        this.maxApartments <= 0 
        ? console.log('Sorry we dont have any apartment')
        : this.apartments.push(instance);
    }
    */
    
}

const firstApartment = new House(2);
firstApartment.addApartment(firstPair);


const secondApartment = new House(0);
secondApartment.addApartment(secondPair);

