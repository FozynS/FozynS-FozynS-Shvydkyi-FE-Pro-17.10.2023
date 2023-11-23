/*
Створіть клас A з методом read
Створіть клас B, який наслідується (extends) від A, та має метод close
Створіть instanceB класу B
Перевірити:
наявніcть методів read/close в instanceB через оператор in
наявніcть методів read/close в instanceB через метод hasOwnProperty
всі ключі instanceB (Object.keys)
*/

class A {
    read() {
        console.log('Read');
    }
}

class B extends A {
    close() {
        console.log('Close');
    }
}

const instanceB = new B();
console.log('read' in instanceB);
console.log('close' in instanceB);  

console.log(instanceB.hasOwnProperty('read'));
console.log(instanceB.hasOwnProperty('close'));

console.log(Object.keys(instanceB));