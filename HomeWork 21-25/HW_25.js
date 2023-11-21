class SuperMath {
    input() {
        const x = +prompt('Введите первое число', '');
        const y = +prompt('Введите второе число', '');
        let znak;

        do{
            znak = prompt('Введите знак математической операции (+, -, *, /, %)', '');
        } while(!this.isValidOperation(znak));

        return this.check({x, y, znak});
    }

    isValidOperation(sign) {
        const signs = ['+', '-', '*', '/', '%'];
        return signs.includes(sign);
    }

    check(obj) {
        const answer = confirm('Ты уверен?', '');
        // const answer = true;
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
