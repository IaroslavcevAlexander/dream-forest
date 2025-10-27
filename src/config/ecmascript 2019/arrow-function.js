// arrow - function
// 'легковесная' версия обычных функции
// компактный синтаксис (x) => x*x;
// сохроняют лексическое значение this
// свойство prototype нет и не могут быть вызваны с new



// function square(x) {
//     return x*x;
// }

const sq = x => x*x;

console.log(sq(10));

const arr = ['3', '4', '6', '1', '1001'];

const res = arr
    .map((el) => parseInt(el))
    .filter((num) => num%2)
    .reduce((max, value) => Math.max(max, value), 0)

console.log(res)