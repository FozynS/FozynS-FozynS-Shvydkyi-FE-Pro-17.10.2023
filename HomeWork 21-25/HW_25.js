/*
Створити клас SuperMath.
Додати до екземпляра метод - check(obj), параметр obj якого має властивості X, Y, znak. Метод повинен підтвердити у користувача, чи хоче він зробити дію znak c Х і У. Якщо хоче, зробити математичну дію znak (яка описана в прототипі), інакше - запитати введення нових даних через метод input() класу SuperMath. 
Приклад об'єкта: `obj = {X:12, Y:3, znak: “/”}`, можливі варіанти znak => `+ - / * %`.
При введенні znak потрібно перевірити коректність введення на можливі математичні дії.
*/

class SuperMath {
    input() {
        const x = +prompt('Введите первое число', '');
        const y = +prompt('Введите второе число', '');
        let znak;

        do{
            znak = prompt('Введите знак математической операции', '');
        } while(!this.isValidOperation(znak));

        return this.check({x, y, znak});
    }

    isValidOperation(sign) {
        const signs = ['+', '-', '*', '/', '%'];
        return signs.includes(sign);
    }

    check(obj) {
        const answer = confirm('Ты уверен?', '');
        if(!answer) {
            return this.input();
        } else {
            let result;
    
            switch(obj.znak) {
                case '+':
                    result = obj.x + obj.y;
                    break;
                case '-':
                    result = obj.x - obj.y;
                    break;
                case '*':
                    result = obj.x * obj.y;
                    break;
                case '/':
                    result = obj.x / obj.y;
                    break;
                case '%':
                    result = obj.x % obj.y;
                    break;
            }
            console.log(result);
            return result;
        }
    }

}

const calculate = new SuperMath();
const obj = {x:12, y:3, znak: '/'};
calculate.check(obj); // --> no p.input() -> 3 prompt -> рахує
