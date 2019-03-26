class DetailsViewModel {
  constructor(doc, navigator, data, taskId) {
    this.navigator = navigator;

    this.div = doc.getElementById("taskdetails");
    this.div.innerHTML = taskId;
  }
}

module.exports = {
  DetailsViewModel
};
