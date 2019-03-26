class ListsViewModel {
  constructor(doc, navigator, data) {
    this.navigator = navigator;

    this.ul = doc.getElementById("lists");
    this.ul.onclick = e => this.onItemClicked(e.target);

    populateList(this.ul, data.getLists());
  }

  onItemClicked(element) {
    this.navigator.navigateToList(element.innerHTML);
  }
}

module.exports = {
  ListsViewModel
};
