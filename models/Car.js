export default class Car {
  constructor(data) {
    this.make = data.make
    this.model = data.model
    this.price = data.price
    this.year = data.year
    this.imgURL = data.imgURL
    this.description = data.description || "No description available"
  }

  get Template() {
    return `<div class="col-4 border">
    <h1>${this.make}</h1>
    <h3>${this.model}</h3>
    <h3>${this.price}</h3>
    <p>${this.year}</p>
    <img src="${this.imgURL}" alt="No image available">
    <p>${this.description}</p>`
  }
}