// Задание 4.
// Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
//
// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность.

// создает бытовой прибор с указанным типом
function Appliance() {
    this.type = "Abstract"
    this.on = 0
}

// установить мощность
Appliance.prototype.setPower = function (power) {
    this.power = power;
}
// включает прибор
Appliance.prototype.onPower = function () {
    this.on = 1;
}
// выключает прибор
Appliance.prototype.off = function () {
    this.on = 0;
}
// возвращает потребляемую мощность в зависимости от  того, включен прибор или нет
Appliance.prototype.consumption = function () {
    return (this.power * this.on);
}

function Iron(steam) {
    this.type = "Iron";
    this.steam = steam; // парогенератор
}

Iron.prototype = new Appliance()

function Oven(grill) {
    this.type = "Oven";
    this.heating = false; // включен режим разогрева
    this.invertor = grill;  // наличие гриля
}

Oven.prototype = new Appliance()
Oven.prototype.heatOn = function (mode) {
    this.heating = mode;
}
Oven.prototype.consumption = function () {
    let cons = this.power * this.on;
    if (this.heating) {
        cons = cons * 0.5; // в режиме разогрева 50% мощности
    }
    return (cons);
}

function Kettle(volume) {
    this.type = "Kettle";
    this.capacity = volume; // объем в мл
}

Kettle.prototype = new Appliance()

// вычисляет общую потребляюмую мощность в данный момент
function totalConsumption(appliances) {
    let total = 0;
    appliances.forEach(function (app) {
        total += app.consumption();
        console.log(app);
    })
    return (total);
}

// утюг
let iron = new Iron(false);
iron.setPower(2300);
// печь
let oven = new Oven(true);
oven.setPower(3000);
// чайник
let kettle = new Kettle(700);
kettle.setPower(1500);

// список приборов
let appliances = [];
appliances.push(iron);
appliances.push(oven);
appliances.push(kettle);

let current_consumption = totalConsumption(appliances);
console.log(`current consumption = ${current_consumption} W`)

iron.onPower();
kettle.onPower();
current_consumption = totalConsumption(appliances);
console.log(`current consumption = ${current_consumption} W`)

iron.off();
oven.onPower();
oven.heatOn(true);
current_consumption = totalConsumption(appliances);
console.log(`current consumption = ${current_consumption} W`)