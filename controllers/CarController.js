import CarService from "../services/CarService.js";

let _carService = new CarService();

function _draw(){
  let template = ''
  let cars = _carService.Cars
  cars.forEach((car, index) => {
    template += car.Template
    template += `<button class="btn btn-danger mb-2" onclick="app.controllers.carController.deleteCar(${index})">Delete</button></div>`
  })
  document.querySelector("#cars").innerHTML = template;
}

export default class CarController {
  constructor() {
    
    _draw();
  }

  deleteCar(index){
    _carService.deleteCar(index);
    _draw();
  }

  addCar(event){
    event.preventDefault();
    let form = event.target;
    let newCar = {
      make: form.make.value,
      model: form.model.value,
      price: form.price.value,
      imgURL: form.imgURL.value,
      year: form.year.value,
      description: form.description.value
    }
    _carService.addCar(newCar);
    _draw();
  };

}