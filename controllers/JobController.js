import JobService from "../services/JobService.js";

let _jobService = new JobService

function _draw() {
  let template = '';
  let jobs = _jobService.Jobs;
  jobs.forEach((job, index) => {
    template += job.Template;
    template += `<button class="btn btn-danger mb-2" onclick="app.controllers.jobController.deleteJob(${index})">Delete</button></div>`
  })
  document.querySelector("#jobs").innerHTML = template;
}

export default class JobController {
  constructor() {
    _draw();
  }

  addJob(event) {
    event.preventDefault();
    let form = event.target;
    let newJob = {
      something: form.something.value,
      that: form.that.value,
      swooce: form.swooce.value
    }
    _jobService.addJob(newJob);
    _draw();
  }

  deleteJob(index) {
    _jobService.deleteJob(index);
    _draw();
  }
}