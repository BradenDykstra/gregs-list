import Car from "../models/car.js";

let _state = {
  cars: [new Car({
    make: "Chevy",
    model: "Tracker",
    year: 1989,
    price: 0
  })]
}

export default class CarService {
  addCar(newCar) {
    _state.cars.push(new Car(newCar));
  }

  deleteCar(index) {
    _state.cars.splice(index, 1);
  }

  get Cars() {
    return _state.cars.map(car => new Car(car));
  }
}