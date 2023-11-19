/*
Вам потрібно зробити конструктор сутності "Студент".
Студент має ім'я, прізвище, рік народження — це властивості. Є масив з оцінками, це також властивість. 
І є можливість отримати вік студента та його середній бал – це методи.

Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, спочатку він не заповнений, але на 25 елементів. 
Це масив, в якому відзначається відвідуваність, щоразу коли ми викликаємо метод .present() на чергове порожнє місце, 
    в масив записується true, коли викликаємо .absent() - записується false. 
Передбачте будь-який захист від того, щоб у масиві відвідуваності не могло бути більше 25 записів.
Масив – це властивість, present та absent – ​​методи.
Останній метод: .summary(), перевіряє середню оцінку і середнє відвідування(кількістьВідвідин/кількістьЗанять), 
    і якщо середня оцінка більше 90, а середнє відвідування більше 0.9, то метод summary повертає рядок "Молодець!", 
    якщо одне з цих значень менше , то - "Добре, але можна краще ", якщо обидва нижче - "Редиска!".
Не забудьте після того, як напишите цей конструктор, створити 2-3 екземпляри (конкретних студентів) і показати використання цих 
    методів.
*/ 
class Student {
    constructor(name, surname, birthday, marks) {
        this.name = name;
        this.surname = surname;
        this.birthday = birthday;
        this.marks = marks;
        this.attendance = new Array(25).fill(null);
        this.numberOfClasses = 0
        // this.attendance = [];
        // this.attendance.length = 25;
    }

    present() {
        const emptyIndex = this.attendance.indexOf(null);
        if(emptyIndex !== -1) {
            this.attendance[emptyIndex] = true;
            this.numberOfClasses++;
        } else {
            console.log('There are no more spaces available to mark attendance.')
        }
        return this;
    }

    absent() {
        const emptyIndex = this.attendance.indexOf(null);
        if(emptyIndex !== -1) {
            this.attendance[emptyIndex] = false;
            this.numberOfClasses++;
        } else {
            console.log('There are no more spaces available to mark attendance.')
        }
        return this;
    }

    showAge() {
        const currentData = new Date();
        const currentYear = currentData.getFullYear();
        console.log(currentYear - this.birthday);
    }

    averageScore() {
        const score = Math.floor(this.marks.reduce((total, value) => total + value, 0) / this.marks.length);
        console.log(score);
        return score;
    }

    summary() {
        const onlyTrue = this.attendance.filter((item) => item === true);
        const averageAttendance = (onlyTrue.length / this.numberOfClasses).toFixed(2);
        // const roundAverageAttendance = Math.floor(averageAttendance * 100) / 100;

        console.log(parseFloat(averageAttendance));

        const score = this.averageScore();

        if(score >= 9 && parseFloat(averageAttendance) >= 0.9) {
            console.log('Excellent');
        } else if(score >= 9 || parseFloat(averageAttendance) >= 0.9) {
            console.log('Its good, but it could be better');
        } else {
            console.log('Very bad');
        }
    }  

}

const danylo = new Student('Danylo', 'Shvydkyi', 2001, [12, 10, 11, 10, 9, 9, 7, 10, 11, 12, 10, 11, 11]);
const nikita = new Student('Nikita', 'Shabelskiy', 2005, [12, 10, 11, 10, 12, 12, 11, 10, 11, 12, 11, 12, 12]);
const bogdan = new Student('Bogdan', 'Shvydkyi', 1994, [12, 12, 9, 8, 7, 6, 7, 6, 8, 9, 6, 5, 8]);
danylo.present().present().present().present().present().present().present().absent().present();
danylo.summary();

nikita.present().present().present().present().present().present().present().present().present();
nikita.summary();

bogdan.present().present().absent().present().absent().present().absent().present().absent();
bogdan.summary();
