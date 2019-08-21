export default class Job {
  constructor(data) {
    this.companyName = data.companyName
    this.pay = data.pay
    this.description = data.description
    this.imgURL = data.imgURL || "http://images.clipartpanda.com/job-clipart-cliparti1_job-clip-art_03.jpg"
  }

  get Template() {
    return `<div class="col-4 border bg-white text-dark">
    <h1>Company Name: ${this.companyName}</h1>
    <h3>Pay: ${this.pay}</h3>
    <h3>Description: ${this.description}</h3>
    <img src="${this.imgURL}">`
  }
}