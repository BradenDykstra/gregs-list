import Car from "../models/car.js";

let _state = {
  cars: [new Car({ make: "Chevy", model: "Tracker", year: 1989, price: 0, imgURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHsAegMBIgACEQEDEQH/xAAaAAADAQEBAQAAAAAAAAAAAAAAAQQDAgUH/8QAIBABAAEDBQEBAQAAAAAAAAAAAAMBAhMREiExQWFxUf/EABoBAQADAQEBAAAAAAAAAAAAAAADBAUBAgb/xAAeEQEAAgEFAQEAAAAAAAAAAAAAAQISAwQRFDEyIf/aAAwDAQACEQMRAD8A+RW2ct7YtSjt5WR2KdrPpNDRi0J6Qnh+LrY+Dx/Eea9G1hBhGH49DH8GP4ZnVh5+EYXoY/hY6fwzOrCDD8GFfjoeIzOpDz8PwYXoYxj+GZ1Yefhc3QvRx/HF9hF3m21jh5l8ejPatmtT7UsSoaulxLWGnNV0VOkMPdV0XiO6/tI/FFtOHWhW9GglqxH4NKDSgA7wNKFoYDgtKHoAHA0oNKABwWjO+nDVneQ8Xj8RzUSqp0yxXxka/wBOoe6/q2LxFD3VbF45dLtFNvRlb0avLVgAB0AAAAAAAADO9ozvIeb+I50ymdMsV8Y+v9Ooe6rYvEMPdf1dF45dLtFNvRlb0avLVgAB0AAAAAAAADO9ozvIeb+I50ymdMsV8Y+v9HD3X9XReIoe6/q2Lxy6XaKbejK3o1eWrAMg6AAAZAwIAAGd7RneQ838RzplM6ZYr4x9f6dQ91/VsXiKHuq2Lxy6XaKbejK3o1eWrAADoAAAOpAAAADO9ozvIeb+I50ymdMsV8Y2v9Ooe6rovHnxV5qtjucuk2to4V29Gytv4dbkEw1IvHDsONw3HDucOw43DccGcOw43DccGcOw43DccGcO2d43uL7uHYh4veOE06ZvPcm3J6wyNeYmziy7SqmyRLbSjulNKpLVVdLVmqy2Y8yM6o8YW43FleYZkngMYOxZXmGZIWtTGDsWWZhlRa1/o1r/AExg7FluYZketf6ZjB2LK6TciSemnCS7itSrUisPNtxaYOWTVjuO/pnoliFO+pPL/9k=" })]
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