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

class Apartment {
    residents = [];
    addResident(instance) {
        this.residents.push(instance);
    }
}

const firstPair = new Apartment();
firstPair.addResident(danylo);
firstPair.addResident(taya);


const secondPair = new Apartment();
secondPair.addResident(nikita);
secondPair.addResident(katya);

class House {
    constructor(max) {
        this.maxApartments = max;
        this.apartments = [];
    }
    
    addApartment(instance) {
        if(this.apartments.length >= this.maxApartments) {
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
console.log(firstApartment)


const secondApartment = new House(0);
secondApartment.addApartment(secondPair);
console.log(secondApartment);

