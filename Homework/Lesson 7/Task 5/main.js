//#vV9a6584I5 – Створити функцію конструктор, яка дозволяє створювати об’єкти car,
// з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
// — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
// — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
// — changeYear (newValue) – змінює рік випуску на значення newValue
// — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car

function Car(model, manufacturer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.drive = function () {
        console.log(`Їдемо зі шкидкістю ${this.maxSpeed}км. на годину`);
    }
    this.info = function () {
        for (const key in this) {
            console.log(`${key} - ${this[key]}`);
        }
    }
    this.increaseMaxSpeed = function (speedToAdd) {
        if (speedToAdd > 0) {
            this.maxSpeed = this.maxSpeed + speedToAdd;
        } else {
            console.log('Нова швидкість не задовольняє умові!');
        }

    }
    this.changeYear = function (newValue) {
        if (this.year !== newValue && newValue > 1815) {
            this.year = newValue;
        } else {
            console.log('Рік випуску не задовольняє умовам!');
        }
    }
    this.addDriver = function (driver) {
        if (driver) this.driver = driver;
        else console.log('Не вказаний обʼєкт у якості параметра!');
    }
}

let car = new Car('Civic Type R', 'Honda', 2022, 272, 2.0);
car.drive();
car.info();
car.increaseMaxSpeed(100);
car.changeYear(2023);
car.addDriver({name: 'Roman', age: 26, experience: '7 years'});
console.log(car);
