const usersAnswer = prompt('Введите что-то для создания массива без запятой');

const usersArray = usersAnswer.split(' ');
alert(usersArray);

const sortArray = usersArray.sort((a, b) => a - b);
alert(sortArray);

usersArray.splice(2, 3);
alert(usersArray);
