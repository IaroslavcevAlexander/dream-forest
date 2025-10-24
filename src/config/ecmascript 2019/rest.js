//Rest parameter

//Всегда массив (может быть пустым)
//Получает аргументы, которые не были присвоены бычным параметрам
//Должен быть в конце списка
//Только один rest-parameter на функцию

const max = (a, b, ...numbers) => {
    console.log(a)
    console.log(b)
    console.log(numbers);
}

max(10, 20, 30, 40, 50, 60);
max(69, 70)