//Rest parameter

//Всегда массив (может быть пустым)
//Получает аргументы, которые не были присвоены бычным параметрам
//Должен быть в конце списка
//Только один rest-parameter на функцию

const shop = (a, b, ...shops) => {
    console.log(a)
    console.log(b)
    console.log(shops);
}

shop('alo.md', 'fidesco', 'panda-shop');
shop('','', 'hhp', 'tylior');