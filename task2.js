// **Задание 2.**
//
// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта
// свойство с данным именем. Функция должна возвращать true или false.

function has_property(obj, property) {
    for (let key in obj) {
        if (key === property) {
            return true
        }
    }
    return false;
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

const check_name = has_property(test_object, 'name')
console.log(`test_object has property name=${check_name}`)

const check_gender = has_property(test_object, 'gender')
console.log(`test_object has property gender=${check_gender}`)