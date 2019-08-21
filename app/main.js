import CarController from "../controllers/carController.js";


class App {
  constructor() {
    this.controllers = {
      carController: new CarController()
    }
  }
}

window["app"] = new App();