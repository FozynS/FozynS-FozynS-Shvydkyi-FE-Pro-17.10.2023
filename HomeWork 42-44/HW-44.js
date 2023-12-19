/**
Написати функцію, що буде отримувати шаблон роуту та параметри - і повертати 
повноцінний URL із заповненими відповідними параметрами

Для виконання використовуйте String.prototype.replace

const buildRoute = (routeSting, params) => {
// code
// use replace method
}

console.log(buildRoute('/user/:user-id/create', {userId: 1})); // 'user/1/create'
console.log(buildRoute('/:tour-id/:game-id/:player-id/goal', {tourId: 1, gameId: 14, playerId: 125151})); // '/1/14/125151/goal'
*/

const buildRoute = (routeString, params) => {
    const value = Object.values(params);
    const result = routeString.replace(/(:\w+-\w+)/g, () => value.shift());

    return result;
}
    
console.log(buildRoute('/user/:user-id/create', {userId: 1})); // '/user/1/create'
console.log(buildRoute('/:tour-id/:game-id/:player-id/goal', {tourId: 1, gameId: 14, playerId: 125151})); // '/1/14/125151/goal'