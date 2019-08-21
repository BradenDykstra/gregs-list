import HouseService from "../services/HouseService.js"

let _houseService = new HouseService();

function _draw() {
  let template = '';
  let houses = _houseService.Houses;
  houses.forEach((house, index) => {
    template += house.Template;
    template += `<button class="btn btn-danger mb-2" onclick="app.controllers.houseController.deleteHouse(${index})">Delete <i class="fas fa-home"></i></button></div>`
  });
  document.querySelector("#houses").innerHTML = template;
}

export default class HouseController {
  constructor() {
    _draw();
  }

  addHouse(event) {
    event.preventDefault();
    let form = event.target;
    let newHouse = {
      floors: form.floors.value,
      bedrooms: form.bedrooms.value,
      bathrooms: form.bathrooms.value,
      price: form.price.value,
      imgURL: form.imgURL.value,
      description: form.description.value
    }
    _houseService.addHouse(newHouse);
    _draw();
  }

  deleteHouse(index) {
    _houseService.deleteHouse(index);
    _draw();
  }
}