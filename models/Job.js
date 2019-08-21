export default class Job {
  constructor(data) {
    this.something = data.something
    this.that = data.that
    this.swooce = data.swooce
    this.imgURL = data.imgURL || "http://images.clipartpanda.com/job-clipart-cliparti1_job-clip-art_03.jpg"
  }

  get Template() {
    return `<div class="col-4 border bg-white text-dark">
    <h1>Something: ${this.something}</h1>
    <h3>That: ${this.that}</h3>
    <h3>Swooce: ${this.swooce}</h3>
    <img src="${this.imgURL}">`
  }
}