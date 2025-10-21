//#5kla3yMpgp – (Те саме, тільки через клас)
class Car {
    constructor(model, manufacturer, year, maxSpeed, engineVolume){
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    drive(){
        console.log(`Їдемо зі швидкістю ${this.maxSpeed}км на годину!`);
    }
    info(){
        for (const key in this) {
            console.log(`${key} - ${this[key]}`);
        }
    }
    increaseMaxSpeed(speedToAdd){
        if (speedToAdd > 0) this.maxSpeed = this.maxSpeed + speedToAdd;
        else console.log('Швидкість не задовольняє умові!');
    }
    changeYear(newValue){
        if (newValue !== this.year && newValue > 1815) this.year = newValue;
        else console.log('Рік не задовольняє умовам!');
    }
    addDriver(driver){
        if (driver) this.driver = driver;
    }
}

let car = new Car('Model S Plaid', 'Tesla', 2023, 322, 0);
car.drive();
car.info();
car.increaseMaxSpeed(100);
car.changeYear(2024);
car.addDriver({name: 'Roman', age: 26, experience: '7 years'});
console.log(car);
