import House from "../models/House.js"

let _state = {
  houses: [new House({
    floors: 2,
    bedrooms: 20000,
    bathrooms: -34,
    price: 4
  })]
}

export default class HouseService {
  constructor() {

  }

  deleteHouse(index) {
    _state.houses.splice(index, 1);
  }

  addHouse(newHouse) {
    _state.houses.push(new House(newHouse));
  }

  get Houses() {
    return _state.houses.map(house => new House(house));
  }
}