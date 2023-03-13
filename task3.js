// Задание 3.
//
// Написать функцию, которая создает пустой объект, но без прототипа.

function get_empty_object() {
    return Object.create(null)
}

const empty = get_empty_object()
console.log('empty object =', empty);
console.log(empty.__proto__)
console.log(Object.getPrototypeOf(empty))

//  Для менторов
//
// https://webhamster.ru/mytetrashare/index/mtb339/1562153834qe4buzv7je
//
//     В JS пустой объект можно создать вот так:
//
//     1. const obj = {};
//
//     2. const obj = Object.create(Object.prototype);
//
// Но у такого объекта прототипом является Object, поэтому у него уже есть какие-то свойства и методы.
//     Чтобы создать абсолютно пустой объект без прототипа, то нужно создавать его так:
//
//     const emptyObj = Object.create(null)
//
// Такой способ создания объекта имеет свои преимущества, например, можно быть уверенным,
//     что в таком объекте будут только те свойства, которые мы туда положим. Можно смело итерироваться по такому объекту.