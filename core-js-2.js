// ## Question examples:

// ### JavaScript:

// - #### Advanced Expressions

// !  - Hoisting

// * Мы можем вызвать ф-ию до ее объявления.

makeSumm(4, 5); // => 9

function makeSumm(x, y) {
  console.log(x + y);
}

// * Переменные не могут быть использованы без инициализации.
// let num;
// console.log(num + 7); // => NaN
// num = 1;

// * (Если испульзуем VAR) JavaScript "поднимает" только объявление, но не инициализацию.

// num = 1;
// console.log(num + 7); // => error
// let num; // объявления через let не всплывают.

let koko;
console.log(koko); // undefined
koko = "hello";

// !   - Temporal dead zone

function doSomthing() {
  console.log(vaar); // undefined
  // console.log(leet); // ReferenceError
  // * переменная находится во "временной мёртвой зоне" с начала блока и до места её объявления

  var vaar = "vaar";
  let leet = "leet";

  console.log(vaar); // "vaar"
  console.log(leet); // "leet"
}

doSomthing();

// ! - #### Objects Built-in methods.

//   - Know static Object methods
// !  - Property flags & descriptors (student is able to set property via Object. defineProperty)
// * Флаги и дескрипторы свойств:
// * Флаги - это специальные атрибуты свойств (помимо value): writable (можно изменить), enumerable (можно перечислять в цикле), configurable (можно удалить или изменить).

// * let descriptor = Object.getOwnPropertyDescriptor(obj, "propertyName"); - узнаем значения флагов свойства.

const mama = {
  name: "Vlada",
  child: "Agniya",
  age: 30,
};

// console.log(Object.getOwnPropertyDescriptor(mama, 'child'));

// Object.defineProperty(obj, propertyName, desctiptor); - метод для изменения флагов.

let child = {};
Object.defineProperty(child, "name", { value: "Agniya" });
Object.defineProperty(child, "age", { value: 4 });
Object.defineProperty(child, "female", { value: "woman" });
Object.defineProperty(child, "female", { writable: false });
child.female = "man"; // не измениться, т.к. writable: false
console.log(child.female); // => woman

const user = {};

Object.defineProperties(user, {
  // метод позволяет определять множество свойсвт сразу
  name: { value: "John", writable: false },
  surname: { value: "Smith", writable: false },
  // ...
});

// !   - Know how to create iterable objects, Symbol.iterator usage `(optional)`
// * Итерируемые - перебираемые объекты.
// * Использование for ..of цикла

//* Схема работы for ..of цикла:
//* =>  цикл вызывает метод Symbol.iterator
//* => метод возвращает итератор (объект с методом next)
//* => цикл работает только с результатом вызова obj с next() => {done: Boolean, value: any}, где done=true => цикл завершен.

// let range = {
//   from: 1,
//   to: 5,

//   [Symbol.iterator]() {
//     this.current = this.from;
//     return this;
//   },

//   next() {
//     if (this.current <= this.to) {
//       return { done: false, value: this.current++ }; // итерируем значение
//     } else {
//       return { done: true }; // цикл завершен
//     }
//   }
// };

// for (let num of range) {
//   console.log(num); // 1, затем 2, 3, 4, 5
// }

// let range = {
//   from: 3,
//   to: 5,

//   [Symbol.iterator](){
//     this.current = this.from;
//     return this; // это объект со свойсвом некст
//   },

//   next() {
//     if (this.current <= this.to) {
//       return {
//         done: false,
//         value: this.current++
//       };
//     } else {
//       return {done: true}; // цикл завершен
//     }
//   },
// };

// for (let num of range) {
//   console.log(num * 2); // 6,8,10
// }

// ! - #### Object as Hash.

// !  - Be able to loop through Object keys

const doll = {
  name: "Ann",
  hight: 30,
  year: 2020,
};

for (let key in doll) {
  console.log(key);
}

//! - #### Arrays Built-in methods

//*   - Know how to copy array part

//   - Know how to flatten nested array

// - #### Arrays Iterating, Sorting, Filtering

//   - Be able to custom sorting for Array
//   - Be able to filter Array elements

// - #### Functional Scope

//   - Know global scope and functional scope
//   - Know variables visibility areas
//   - Understand nested scopes and able work with them

// - #### Functions Parameters / Arguments

//   - Know how to define Function parameters
//   - Know difference between parameters passing by value and by reference
//   - Know how to handle dynamic amount of Function parameters

// - #### ECMAScript Intermediate

//   - Function default parameters
//   - ECMA script modules
//   - Know how to use spread operator for Function arguments
//   - Be able to compare `arguments` and `rest parameters`
//   - Spread operator for Array
//   - Understand and able to use spread operator for Array concatenation
//     Destructuring assignment
//   - Be able to discover destructuring assignment concept
//   - Understand variables and Function arguments destructuring assignment
//   - String templates
//   - Know how `for..of` loop works `(optional)`

// - #### Advanced Functions

//   - `this` scope
//   - Reference Type & losing `this`
//   - Understand difference between function and method
//   - Understand how `this` works, realize `this` possible issues
//   - Manage `this` scope
//   - Be able to replace `this` scope
// !   - Be able to use `call` and `apply` Function built-in methods

function hello() {
  console.log("hello", this);
}
hello();

const person = {
  name: "Vlada",
  age: 30,
  sayHello: hello,
  sayHelloWindow: hello.bind(window), // связали контекст вызова ф-ии хеллоу с виндоу
  logInfo: function (job) {
    console.group(`${this.name} info:`);
    console.log(`Name is ${this.name}!`);
    console.log(`Age is ${this.age}!`);
    console.log(`Job is ${job}!`);
    console.groupEnd();
  },
};

const lena = {
  name: "Lena",
  age: 23,
};

 person.logInfo.bind(lena)(); // Name is Lena! - привязали объект лена к методу логИнфо и вызвали его с помощью "()"

// person.logInfo.bind(lena, 'dev')(); // мы можем передавать дополнительные параметры через аргументы в баинд
// person.logInfo.call(lena, 'dev'); // метод CALL сам вызывает себя, в отличии от bind.
// person.logInfo.apply(lena, ["dev"]); // метод apply тоже вызывает себя сам, но вторым параметром принемает массив значений.

// - #### Functional Patterns

//   - Immediately invoked functional expression `(IIFE)` `(optional)`
//   - Know IIFE pattern `(optional)`
//   - Callback (Function as argument)
//   - Know callback pattern
//   - Understand callback limitations (callback hell) `(optional)`
//   - Binding, binding one function twice
// !   - Know how to bind `this` scope to function
//   - Carrying and partial functions

// - #### Network requests

//   - `Fetch` (with usage)
//   - `XMLHTTPRequest` (concept) `(optional)`
//   - `WebSocket` (concept) `(optional)`

// - #### Web components

//   - Web components, shadow DOM (concept) `(optional)`

// - #### Date & time

//   - Timezones `(optional)`
//   - Internationalization js (Intl) `(optional)`

// - #### Closures Advanced

//   - Context (lexical environment)
//   - Understand function creation context (lexical environment)
//   - Be able to explain difference between scope and context
//   - Inner/outer lexical environment
//   - Understand lexical environment traversing mechanism
//   - Understand connection between function and lexical environment

// - #### Object Oriented Programming

//   - `new` keyword
//   - Understand how `new` keyword works
//   - Function constructor
//   - Know function constructor concept
//   - Able to create constructor functions
//   - Public, private, static members
//   - Know how to create public members
//   - Know how to create private members
//   - Know how to create static members
//   - Understand OOP emulation patterns and conventions

// - #### Prototypal Inheritance Basics

//   - `__proto__` property
//   - Understand `__proto__` object property
//   - Able to use [Object.create] and define `__proto__` explicitly
//   - Able to set / get object prototype `(optional)`
//   - `prototype` property
//   - Know function `prototype` property
//   - Understand dependency between function constructor `prototype` and instance `__proto__`
//   - Able to create 'class' methods using function `prototype` property

// - #### ECMAScript Classes

//   - Class declaration
//   - Know `class` declaration syntax
//   - Understand difference between `class` and `constructor function`
//   - Getter/setter
//   - What does `super()` do and where we have to use it?

// - #### ECMAScript Data Types & Expressions

//   - Object `keys/values`
//   - Object calculated props
//   - `Set/Map` data types
//   - `WeakSet/WeakMap` data types

// - #### JavaScript Errors

//   - `try..catch` statement
//   - Know how to handle errors
//   - Custom errors `(optional)`

// - #### ECMAScript Advanced

//   - Garbage collector (concept) `(optional)`
//   - Promises
//   - Promise states
//   - Promise Chaining
//   - Promise static methods
//   - Be able to compare promise and callback patterns `(optional)`
//   - Be able to handle errors in promises
//   - event loop
//   - async/await

// ### JavaScript in Browser:

// - #### Global object window

//   - Location
//   - Know browser location structure
//   - History API (Global object window)
//   - Know browser History APIconcept
//   - Be able to navigate within browser history
//   - Be able to use history state `(optional)`
//   - Navigator `(optional)`
//   - Know how to parse user agent `(optional)`
//   - Know how to discover client platform, browser
//   - Cookies

// - #### Page Lifecycle

//   - Parsing
//   - Reflow
//   - Repaint

// - #### Events Basics

//   - Be able to explain difference between capturing and bubbling
//   - Know Event concept
//   - Custom events `(optional)`

// - #### Events Propagation / Preventing

//   - Know Event propagation cycle
//   - Know how to stop Event propagation
//   - Know how to prevent Event default browser behavior
//   - Delegating
//   - Understand Event delegating concept
//   - Understand Event delegating benefits and drawbacks

// - #### Timers

//   - `clearTimeout`
//   - `requestAnimationFrame` `(optional)`
//   - Be able to explain difference between `setTimeout` and `requestAnimationFrame` `(optional)`

// - #### Web Storage API & cookies

//   - Cookies (concept)
//   - Difference between localStorage, sessionStorage, session and cookies

// ### Typescript:

// - #### Ability to write concise TypeScript code using its constructs
//   - understanding TS(ES6) module system
//   - describing variables with primitive data types.
//   - using interfaces with optional properties, read-only properties, etc...
//   - creating custom types.
//   - types/interface differences `(optional)`
//   - function types.
//   - utitily types `(optional)`
//   - typeguards `(optional)`
//   - generic types (concept)

// ### Design patterns:

// - #### Intermediate knowledge of patterns and best practices:

//   - design patterns used on his project, and able to compare these patterns `(optional)`
//!   - KISS, DRY, YAGNI

//* KISS – keep it short simple – делайте вещи проще.Порой наиболее правильное решение – это наиболее простая реализация задачи, в которой нет ничего лишнего.
//* DRY – Don’t repeat yourself – принцип призывает Вас не повторяться при написании кода. Все что Вы пишите в проекте, должно быть определено только один раз.
//* YAGNI — You ain’t gonna need it – вам это не понадобится.Все что не предусмотрено техническим заданием проекта, не должно быть в нем.

//!   - The meaning behind SOLID principles.

//* 5 основных принципов объектно-ориентированного программирования и проектирования:

//* S - Принцип единственной ответственности (single responsibility principle)
//* Для каждого класса должно быть определено единственное назначение. Все ресурсы, необходимые для его осуществления, должны быть инкапсулированы в этот класс и подчинены только этой задаче.

//* O - Принцип открытости/закрытости (open-closed principle)
//* «программные сущности … должны быть открыты для расширения, но закрыты для модификации».

//* L - Принцип подстановки Лисков (Liskov substitution principle)
//* «объекты в программе должны быть заменяемыми на экземпляры их подтипов без изменения правильности выполнения программы».

//* I - Принцип разделения интерфейса (interface segregation principle)
//* «много интерфейсов, специально предназначенных для клиентов, лучше, чем один интерфейс общего назначения»

//* D - Принцип инверсии зависимостей (dependency inversion principle)
//* «Зависимость на Абстракциях. Нет зависимости на что-то конкретное»

// ### Web Communication Protocols: `(optional)`

// - #### HTTP vs HTTPS vs HTTP/2
// - #### RESTful API
// - #### HTTP methods
// - #### HTTP status codes groups

// ### Common web-security knowledge `(optional)`

// - #### Basic understanding of most common security terms (CORS, XSS) `(optional)`

//!   - XSS

//* Cross-Site Scripting — «межсайтовый скриптинг» — тип атаки на веб-системы, заключающийся во внедрении в выдаваемую веб-системой страницу вредоносного кода. 

//!   - CORS

//* Механизм CORS поддерживает кросс-доменные запросы и передачу данных между браузером и web-серверами 
//* по защищённому соединению. Современные браузеры используют CORS в API-контейнерах,
//*  таких как XMLHttpRequest или Fetch, чтобы снизить риски, присущие запросам с других источников.

//!   - OWASP Top 10

//* Open Web Application Security Project (OWASP) – это некоммерческая организация,
//*  а также открытое интернет-сообщество, целью которого является защита организаций посредством
//*   разработки безопасного кода, тестирования на проникновение и сопровождения разрабатываемых приложений
//*    на всех этапах проекта.

//   - Auth (JWT, OAuth, Basic, etc.)

// ### Coding tasks:

// - `Function.prototype.bind` implement polyfill
// - `Object.create` implement polyfill
// - `Array.flat` implement polyfill
// - `Array.reduce` implement polyfill
// - `'hello world'.repeating(3)` -> 'hello world hello world hello world'. How to implement?
// - `myFunc('!', 4, -10, 34, 0)` -> '4!-10!34!0`. How to implement?
// - `five(plus(seven(minus(three()))))` -> 9. How to implement?
// - add(5)(9)(-4)(1) -> 11. How to implement?
// - `periodOutput(period)` method should output in the console once per every period how mach time has passed since the first function call.
//   Example:
//   `periodOutput(100) -> 100(after 100 ms), 200(after 100 ms), 300(after 100 ms), ...`
// - `extendedPeriodOutput(period)` method should output in the console once per period how mach time has passed since the first function call and then increase the period. Example: `// extendedPeriodOutput(100) -> 100(after 100 ms), 200(after 200 ms), 300(after 300 ms)`

// #### Passing the interview

// 1. You should contact the mentor personally. Contact details will be announced through Discord.
// 2. At the request of the mentor, the interview can take place online or face-to-face.
// 3. During the interview mentor:

// - asks questions;
// - gets answers;
// - adds/corrects/explains/gives the right answer, if necessary.

// **Note:** preferable interview duration is 40-90 minutes. Also, it would be great to create a calendar appointment or let a student know in advance how much time the interview will take.

// #### Take into account that mentor can be busy (vacation, business trip, workload and etc.), so contact him as soon as possible.
