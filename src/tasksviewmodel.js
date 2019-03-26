class TasksViewModel {
  constructor(listview, navigator, database, listId) {
    this.navigator = navigator;
    listview.onclick = e => this.onItemClicked(e.target);
    populateList(listview, database.getTasks(listId));
  }

  onItemClicked(element) {
    this.navigator.navigateToTask(element.dataset.id);
  }
}

module.exports = {
  TasksViewModel
};
