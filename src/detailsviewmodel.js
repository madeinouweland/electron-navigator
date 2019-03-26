class DetailsViewModel {
  constructor(container, navigator, data, taskId) {
    this.navigator = navigator;
    container.innerHTML = taskId;
  }
}

module.exports = {
  DetailsViewModel
};
