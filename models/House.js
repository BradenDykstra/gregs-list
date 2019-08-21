export default class House {
  constructor(data) {
    this.floors = data.floors
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.price = data.price
    this.imgURL = data.imgURL || "data:image/jpeg;base64,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"
    this.description = data.description || "No description available"
  }

  get Template() {
    return `<div class="col-4 border bg-white text-dark">
    <h1>Floors: ${this.floors}</h1>
    <h3>Bedrooms: ${this.bedrooms}</h3>
    <h3>Bathrooms: ${this.bathrooms}</h3>
    <h3>Price: $${this.price}</h3>
    <img src="${this.imgURL}" alt="No image available">
    <p>${this.description}</p>`
  }
}