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
    let result = routeString;
    for (const key in params) {
        const value = params[key]
        result = routeString.replace(/:(\w+)-(\w+)/ig, (match, firstGroup, secondGroup) => {
            const theSame = firstGroup + secondGroup;
            if(theSame === key.toLowerCase()) {
                return value;
            }
        });
    }
    
    console.log(result);
    return result;
}
    
(buildRoute('/user/:user-id/create', {userId: 1})); // '/user/1/create'
(buildRoute('/:tour-id/:game-id/:player-id/goal', {tourId: 1, gameId: 14, playerId: 125151})); // '/1/14/125151/goal'