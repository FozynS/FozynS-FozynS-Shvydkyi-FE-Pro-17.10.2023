class SuperMath {
    input() {
        const x = +prompt('Введите первое число', '');
        const y = +prompt('Введите второе число', '');
        const signs = ['+', '-', '*', '/', '%'];
        let znak;

        do{
            
            znak = prompt('Введите знак математической операции (+, -, *, /, %)', '');
        } while(!signs.includes(znak));

        return this.check({x, y, znak});
    }

    check(obj) {
        const answer = confirm('Ты уверен?', '');
        if(!answer) {
            this.input();
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
            return result;
        }
    }

}

const calculate = new SuperMath();
const obj = {x:12, y:3, znak: '/'};
calculate.check(obj); // --> no p.input() -> 3 prompt -> рахує
console.log(calculate.check(obj));