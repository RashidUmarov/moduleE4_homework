
// Задание 5.
//
// Переписать консольное приложение из предыдущего юнита на классы.

class CAppliance {
    constructor() {
        this.type = "Abstract";
        this.on = 0;
    }

    // установить мощность
    setPower(power) {
        this.power = power;
    }

// включает прибор
    onPower() {
        this.on = 1;
    }

    off() {
        this.on = 0;
    }

    consumption() {
        return (this.power * this.on)
    }
}

class CIron extends CAppliance {
    constructor(steam) {
        super();
        this.type = "Iron";
        this.steam = steam; // парогенератор
    }
}

class СKettle extends CAppliance {
    constructor(volume) {
        super();
        this.type = "Kettle";
        this.capacity = volume; // объем в мл
    }
}

class COven extends CAppliance {
    constructor(grill) {
        super();
        this.type = "Oven";
        this.heating = false; // включен режим разогрева
        this.invertor = grill;  // наличие гриля
    }

    heatOn(mode) {
        this.heating = mode;
    }

    consumption() {
        let cons = super.consumption();
        if (this.heating) {
            cons = cons * 0.5; // в режиме разогрева 50% мощности
        }
        return (cons);
    }
}


function totalClassConsumption(appliances_array) {
    let total = 0;
    appliances_array.forEach(function (app) {
        total += app.consumption();
        console.log(app);
    })
    return (total);
}


// утюг
let c_iron = new CIron(false);
c_iron.setPower(2300);
// печь
let c_oven = new COven(true);
c_oven.setPower(3000);
// чайник
let c_kettle = new СKettle(700);
c_kettle.setPower(1500);
// список приборов
let c_appliances = [];
c_appliances.push(c_iron);
c_appliances.push(c_oven);
c_appliances.push(c_kettle);

let c_current_consumption = totalClassConsumption(c_appliances);
console.log(`current consumption = ${c_current_consumption} W\n`)

c_iron.onPower();
c_kettle.onPower();
c_current_consumption = totalClassConsumption(c_appliances);
console.log(`current consumption = ${c_current_consumption} W\n`)

c_iron.off();
c_oven.onPower();
c_oven.heatOn(true);
c_current_consumption = totalClassConsumption(c_appliances);
console.log(`current consumption = ${c_current_consumption} W\n`)
