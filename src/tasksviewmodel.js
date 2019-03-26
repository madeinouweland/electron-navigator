class TasksViewModel {
  constructor(listview, navigator, data, listId) {
    this.navigator = navigator;
    listview.onclick = e => this.onItemClicked(e.target);
    populateList(listview, data.getTasks(listId));
  }

  onItemClicked(element) {
    this.navigator.navigateToTask(element.innerHTML);
  }
}

module.exports = {
  TasksViewModel
};
