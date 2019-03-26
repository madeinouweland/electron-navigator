class TasksViewModel {
  constructor(doc, navigator, data, listId) {
    this.navigator = navigator;

    this.ul = doc.getElementById("tasks");
    this.ul.onclick = e => this.onItemClicked(e.target);

    populateList(this.ul, data.getTasks(listId));
  }

  onItemClicked(element) {
    this.navigator.navigateToTask(element.innerHTML);
  }
}

module.exports = {
  TasksViewModel
};
