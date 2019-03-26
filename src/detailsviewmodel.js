class DetailsViewModel {
  constructor(container, navigator, database, taskId) {
    this.navigator = navigator;
    container.innerHTML = database.getTask(taskId).name;
  }
}

module.exports = {
  DetailsViewModel
};
