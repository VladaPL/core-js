// ! Чертой --------------- отделяются вопросы друг от друга.

// Data types----------------------------------------------

// Примитивы: у примитивов нет своих методов,
// но у них есть свои объектные обертки, которые позволяют проводить различные операции.
var text = "текст".charAt(1); // Аналогично - new String("текст").charAt(1)
console.log(text);
// Именно поэтому нет изменения первоначального значения переменной.
let greeting = "hello";
let upper = greeting.toUpperCase();
let substr = greeting.substring(0,3);
console.log(upper, substr, greeting);

//bollean
// string
// number
// null
// undefined
// symbol
// bigint

// Не примитив:
// object

// У каждой объектной обертки есть метод velueOf(), который возвращает соответствующее значение примитивного типа.



// Доказательство почему ф-ии это объект --------------------------------------------------------------------
function fn() {
  // функция наследуется от объекта
}

console.log(fn instanceof Object);

// Number methods-------------------------------------------------------

// Math.floor - Округляет аргумент до ближайшего меньшего целого.
console.log(Math.floor(45.95)); //  45
console.log(Math.floor(-45.95)); // -46
// Math.ceil - Округляет аргумент до ближайшего большего целого.
console.log(Math.ceil(0.95)); // 1
console.log(Math.ceil(4)); // 4
// Math.trunc -  возвращает целую часть числа путём удаления всех дробных знаков.
console.log(Math.trunc(13.37));
// Math.round - возвращает число, округлённое к ближайшему целому.
x = Math.round(20.49); // Вернёт значение 20
// num.toFixed(precision) - форматирует число, используя запись с фиксированной запятой.
var numObj = 12345.6789;
numObj.toFixed(); // Вернёт '12346': обратите внимание на округление, дробной части нет
numObj.toFixed(1); // Вернёт '12345.7': обратите внимание на округление
numObj.toFixed(6); // Вернёт '12345.678900': обратите внимание на дополнение нулями

// String methods--------------------------------------------------------------------

let str = "Какой чудесный день!   ";
str.charAt(1); // 'a' - получаем символ по индексу
str.indexOf("!"); // 19 - узнаем индекс по символу
str.lastIndexOf("д"); // 15 - узнаем индекс последнего вхождения символа
str.slice(6, 14); // 'чудесный' - извлечение подстроки
str.substring(6, 14); // 'чудесный' - извлечение подстроки
str.replace("день", "пень"); // 'Какой чудесный пень!   ' - замена значений
str.trim(); // 'Какой чудесный день!' - отсечение пробельных символов в начале и конце

// let var const - differences------------------------------------------------------

function sayHi() {
  word = "Hi!"; // всплывают
  console.log(word);
  var word;
}

sayHi();

if (true) {
  var test = "ok"; // ok - var не имеют блочной видимости (ограничены телом ф-ии)
  // let test = "ok"; // test is not defined
}

console.log(test);

//const k = []; // вызовет ошибку, конст не переопределяется
let k = []; // выведет 1
console.log((k = 1));

// ternary operator---------------------------------------------------------

//let age = prompt('Сколько вам лет?', '');
//let ternOper = (age >= 18) ? console.log("Привет") : console.log("Пока");

// switch case - examples, where it can be useful------------------------------

// let a = 2 + 2;

// switch (a) {
//   case 3: // if (a === 3)
//     alert( 'Маловато' ); // Если break нет, то выполнение пойдёт ниже по следующим case, при этом остальные проверки игнорируются.
//   case 4:
//     alert( 'В точку!' ); // выведет только это, так как есть break
//     break;
//   case 5:
//     alert( 'Перебор' );
//   default:
//     alert( "Нет таких значений" );
// }

// type conversions----------------------------------------------------------

// Логическое – Происходит в логических операциях.
// FALSY: 0, null, undefined, NaN, ""
console.log(Boolean("0")); // true
console.log(Boolean(" ")); // пробел это тоже true (любая непустая строка это true)

// Строковое - Происходит, когда нам нужно что-то вывести
let value = true;
value = String(value); // теперь value это строка "true"

// Численное – Происходит в математических операциях.
console.log("6" / "2"); // 3, строки преобразуются в числа

let p = "123";
let num = Number(p); // становится числом 123

// Strict comparison--------------------------------------

5 > 4; // true
"ананас" > "яблоко"; // false
"2" > "12"; // true
undefined == null; // true
undefined === null; // false
null == "\n0\n"; // false, т.к. строка всегда приводится к true, а null не равен ничему, кроме null и undefined.
null === +"\n0\n"; // false

// Оператор опциональной последовательности-----------------------------

// Если мы обращаемся к свойству или методу объекта, который отсутствует, то получаем ошибку и приложение падает.
// Опциональная цепочка ?. позволяет получить в этом случае undefined и приложение продолжит работу.
// Используют для исключения дополнительных проверок.
// obj?.prop
// obj?.[expr]
// arr?.[index]
// func?.(args)

const auto = {
  brand: "Tesla",
  model: "ModelX",
  // details: {
  //   color: 'red',
  //   year: 2021,
  //   atStock: true,
  //}
  // drive() {
  //   console.log('rrrr');
  // }
};

const cars = [auto];

cars.forEach((car) => {
  console.log(
    `${car.brand} ${car.details?.year}: color - ${car.details?.color}`
  );
});

auto.drive?.(); // с ?. приложение не упадет, в консоль просто ничего не выведется при отсутствии метода.

// Be able to discover cases of implicit data types conversion into boolean, string, number --------------------------------------------------------

// Уметь обнаруживать случаи преобразования неявных типов данных в логические, строковые, числовые

// true + false             // 1
// 12 / "6"                 // 2
// "number" + 15 + 3        // 'number153'
// 15 + 3 + "number"        // '18number'
// [1] > null               // true
// "foo" + + "bar"          // 'fooNaN'
// 'true' == true           // false
// false == 'false'         // false
// null == ''               // false
// !!"false" == !!"true"    // true - Оператор !! конвертирует строки 'true' и 'false' в логическое true, так как они являются непустыми строками
// ['x'] == 'x'             // true
// [] + null + 1            // 'null1'
// 0 || "0" && {}           // {}
// [1,2,3] == [1,2,3]       // false
// {}+[]+{}+[1]             // '0[object Object]1'
// !+[]+[]+![]              // 'truefalse'
// new Date(0) - 0          // 0
// new Date(0) + 0          // 'Thu Jan 01 1970 02:00:00(EET)0'

// arrow func/ func expression/ func declaration -------------------------------------

const foo = (c) => {
  c++;
}; // arrow func
const c = function () {
  c--;
}; // func expression - создаются, только когда поток выполнения достигает их.
function sayYes() {
  console.log("Yes");
} // func declaration - обрабатываются перед выполнением блока кода. Они видны во всём блоке.

// Date object ----------------------------------------

let now = new Date(2022, 2, 5, 10, 10, 5); // Sat Mar 05 2022 10:10:05 GMT+0300
console.log(now);

let Jan01_1970 = new Date(0);
console.log(Jan01_1970);

let now2 = Date.now(); // количество миллисекунд с 1 января 1970 года
console.log(now2);

console.log(now.getFullYear());

// Date methods, props --------------------------------------------

// getFullYear()
// Получить год (4 цифры)
// getMonth()
// Получить месяц, от 0 до 11.
// getDate()
// Получить день месяца, от 1 до 31, что несколько противоречит названию метода.
// getHours(), getMinutes(), getSeconds(), getMilliseconds()
// Получить, соответственно, часы, минуты, секунды или миллисекунды.

// Метод Date.parse(str) считывает дату из строки.
// Формат строки должен быть следующим: YYYY-MM-DDTHH:mm:ss.sssZ
// let date = new Date( Date.parse('2013-01-27T13:51:50.417-07:00') ); // "T" используется в качестве разделителя, 'Z' обозначает часовой пояс в формате +-hh:mm.
// console.log(date);

// Objects Built-in methods -------------------------------------------------

/* Встренные методы объекта - используются напрямую в конструкторе Object,
 и используют в качестве параметра экземпляр объекта (статические методы).*/

const job = {
  position: "Повар",
  action: "готовит еду",
  isAvailable: true, // доступен
  showDetails() {
    const accepting = this.isAvailable
      ? "принимаю заявки"
      : "не принимаю заявки";
    //console.log(`${this.position}: на данный момент ${accepting}.`);
  },
};

job.showDetails();

const barista = Object.create(job);
barista.position = "Бариста";
barista.isAvailable = false;
barista.showDetails();

const kyesOfObj = Object.keys(job); // создаем массив ключей обекта
//console.log(kyesOfObj); //  ['position', 'action', 'isAvailable', 'showDetails']

const valuesOfObj = Object.values(job); // создаем массив значений ключей объекта
//console.log(valuesOfObj); // ['Повар', 'готовит еду', true, ƒ]

const arrOfObj = Object.entries(job); // создает вложенный массив пар ключ-значение для объекта.
console.log(arrOfObj);

arrOfObj.forEach((elem) => {
  // теперь можем работать с результатом через цикл
  let key = elem[0];
  let value = elem[1];

  console.log(`${key}: ${value}`);
});


const man = {
  firstName: "Philip",
  lastName: "Fry",
};


const objMerge = Object.assign(job, man); // слияние свойств и методов двух объектов.
console.log(objMerge); // {position: 'Повар', action: 'готовит еду', isAvailable: true, firstName: 'Philip', showDetails: ƒ, …}

//const newMan = Object.freeze(man); // метод не дает переопределить значение свойства
// Object.isFrozen() позволяет определить, заморожен ли объект,true/false
man.firstName = "Dima";
man.lastName = "Sidorov";
//console.log(newMan); // {firstName: 'Philip', lastName: 'Fry'}

const newPropertyForMan = Object.seal(man);
man.firstName = "Dima"; // измениться это, если нет freez
man.profesion = "cook"; // но не добавиться это
//console.log(newPropertyForMan);

// Arrays Built-in methods-------------------------------------------------------------------------------
const arr1 = ["red", "green", "blue"];

const arr2 = new Array(3);
console.log(arr2);
arr2[0] = 1;
arr2[1] = 2;
arr2[2] = 3;
console.log(arr2);

const arr3 = new Array(10).fill("elem", 0, 10);
console.log(arr3);

let arr4 = [];
for (i = 0; i <= 10; i++) {
  arr4.push(i++);
}

console.log(arr4); //  [0, 2, 4, 6, 8, 10]

// Know how to copy array----------------------------

const arr5 = arr4.splice(0, arr4.length);
console.log(arr5); // [0, 2, 4, 6, 8, 10]
let elemOfarr5 = arr5.shift(); // удаляем 0 и выводим его

 console.log(elemOfarr5); // 0
 elemOfarr5 = arr5.shift();
 console.log(arr5); // [2, 4, 6, 8, 10]

// Know how to modify array---------------------------

let addTen = arr5.map((item) => item + 10);
console.log(addTen); // [12, 14, 16, 18, 20]

// Arrays Iterating, Sorting, Filtering-------------------------------------------------------------------

// Know how to sort Array----------------------------
let arr7 = [13, 2, 5, 45, 1005];
const compareArr = (a, b) => a - b;

let sortArr = arr7.sort(compareArr);
console.log(sortArr);

// Know several method how to iterate Array elements---------------------------------

// for (let i of arr5 ) {
//   console.log(i); // выведет значения свойств, т.е. элементы массива
// }

// for (let i=0; i < arr5.length; i++) {
//   let result = arr5[i] + ' уже строка';
//   console.log(result);
// }

// Event Phases---------------------------------------------------------------

// Всплытие и погружение. Focus не всплывает.
// Самый глубокий элемент, который вызывает событие доступен через event.target.
// event.stopPropagation() прерывает всплытие.
// event.stopImmediatePropagation() не только прекращает всплытие, но и останавливает обработку событий на текущем элементею
// elem.addEventListener(..., {carture: true}) - отлавливает событие при погружении.
// removeEventListener - убирает обработчик.

for (let elem of document.querySelectorAll("*")) {
  elem.addEventListener(
    "click",
    (e) => alert(`Погружение: ${elem.tagName}`),
    true
  );
  elem.addEventListener("click", (e) => alert(`Всплытие: ${elem.tagName}`));
}

// Event Listeners---------------------------------------------------------------

// Синтаксис: target.addEventListener(type, listener[, options]);

// const buttonElement = document.getElementById('btn');

// // Добавим обработчик для события "click", предоставив callback.
// // Теперь по клику на элемент будет всплывать подсказка.

// buttonElement.addEventListener('click', function (event) {
//   alert('Событие вызвано функцией!');
// });

// // Теперь привяжем обработчик через объект, содержащий функцию

// buttonElement.addEventListener('click', {
//   handleEvent: function (event) {
//     alert('Событие вызвал handleEvent!');
//   }
// });

// DOM Events--------------------------------------------------------------------

// События мыши:
// click – происходит, когда кликнули на элемент левой кнопкой мыши (на устройствах с сенсорными экранами оно происходит при касании).
// contextmenu – происходит, когда кликнули на элемент правой кнопкой мыши.
// mouseover / mouseout – когда мышь наводится на / покидает элемент.
// mousedown / mouseup – когда нажали / отжали кнопку мыши на элементе.
// mousemove – при движении мыши.

// События на элементах управления:
// submit – пользователь отправил форму <form>.
// focus – пользователь фокусируется на элементе, например нажимает на <input>.

// Клавиатурные события:
// keydown и keyup – когда пользователь нажимает / отпускает клавишу.

// События документа:
// DOMContentLoaded – когда HTML загружен и обработан, DOM документа полностью построен и доступен.

// CSS events:
// transitionend – когда CSS-анимация завершена.

// Timers----------------------------------------------------------------------------------------------

// Методы setInterval(func, delay, ...args) и setTimeout(func, delay, ...args) позволяют выполнять func регулярно или только один раз после задержки delay, заданной в мс.
// Для отмены выполнения необходимо вызвать clearInterval/clearTimeout со значением, которое возвращают методы setInterval/setTimeout.
// Вложенный вызов setTimeout является более гибкой альтернативой setInterval. Также он позволяет более точно задать интервал между выполнениями.
// Планирование с нулевой задержкой setTimeout(func,0) или, что то же самое, setTimeout(func) используется для вызовов, которые должны быть исполнены как можно скорее, после завершения исполнения текущего кода.
// Браузер ограничивает 4-мя мс минимальную задержку между пятью и более вложенными вызовами setTimeout, а также для setInterval, начиная с 5-го вызова.
// Обратим внимание, что все методы планирования не гарантируют точную задержку.

// Например, таймер в браузере может замедляться по многим причинам:

// Перегружен процессор.
// Вкладка браузера в фоновом режиме.
// Работа ноутбука от аккумулятора.
// Всё это может увеличивать минимальный интервал срабатывания таймера (и минимальную задержку) до 300 или даже 1000 мс в зависимости от браузера и настроек производительности ОС.
