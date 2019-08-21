import Job from "../models/Job.js"

let _state = {
  jobs: [new Job({
    companyName: "idk",
    pay: "yeah",
    description: "swooce"
  })]
}

export default class JobService {
  deleteJob(index) {
    _state.jobs.splice(index, 1);
  }

  addJob(newJob) {
    _state.jobs.push(new Job(newJob));
  }

  constructor() {

  }

  get Jobs() {
    return _state.jobs.map(job => new Job(job))
  }
}