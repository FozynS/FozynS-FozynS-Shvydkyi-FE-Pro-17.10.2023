class Student {
    constructor(name, surname, birthyear, marks) {
        this.name = name;
        this.surname = surname;
        this.birthyear = birthyear;
        this.marks = marks;
        this.attendance = new Array(25).fill(null);
    }

    attendanceCheck(status) {
        const emptyIndex = this.attendance.indexOf(null);
        if(emptyIndex !== -1) {
            this.attendance[emptyIndex] = status;
        } else {
            console.log('There are no more spaces available to mark attendance.')
        }
        return this;
    }

    present() {
        return this.attendanceCheck(true);
    }

    absent() {
        return this.attendanceCheck(false);
    }

    numberOfClasses() {
        return this.attendance.indexOf(null);
    }

    showAge() {
        const currentData = new Date();
        const currentYear = currentData.getFullYear();
        console.log(currentYear - this.birthyear);
    }

    averageScore() {
        const score = Math.floor(this.marks.reduce((total, value) => total + value, 0) / this.marks.length);
        return score;
    }

    summary() {
        const allTrue = this.attendance.filter((item) => item === true);
        const averageAttendance = (allTrue.length / this.numberOfClasses()).toFixed(2);

        const pointAverage = 9;
        const validAttendance = 0.9;
        const score = this.averageScore();

        const pointComparison  = score >= pointAverage;
        const visitComparison  = parseFloat(averageAttendance) >= validAttendance;

        if(pointComparison && visitComparison) {
            console.log('Excellent');
        } else if(pointComparison || visitComparison) {
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
