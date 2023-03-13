// Задание 1.
//
// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль
// все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.
function show_own_properties(obj) {

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key}=${obj[key]}`)
        }
    }
}

const test_object = {
    name: 'test_object',
    lang: 'javascript',
    module: 'E4',
    unit: 4,
    getDescription: function () {
        console.log('test obect for function show_own_properties')
    }
}

show_own_properties(test_object)
