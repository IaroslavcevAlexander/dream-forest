// var не используется 
// let - переменные, const - константы
// облость видимости - блок кода {..}
// чаще используется const
// (let если действительно нужно менять)


let price = 10499 ;
price = 10600 ;

const pi = 3.14;
// pi = 3;  це ошибка

const cupcakes = ['macaruns', 'напалион', 'сметаник'];

cupcakes.push('medovik');
console.log(cupcakes);