class ListsViewModel {
  constructor(listview, navigator, database) {
    this.navigator = navigator;
    listview.onclick = e => this.onItemClicked(e.target);
    populateList(listview, database.getLists());
  }

  onItemClicked(element) {
    this.navigator.navigateToList(element.dataset.id);
  }
}

module.exports = {
  ListsViewModel
};
