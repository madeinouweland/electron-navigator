const { ListsViewModel } = require('./listsviewmodel.js');
const { TasksViewModel } = require('./tasksviewmodel.js');
const { DetailsViewModel } = require('./detailsviewmodel.js');

class MainViewModel {
  constructor(doc, nav, data) {
    this.doc = doc;
    this.nav = nav;
    this.data = data;
    this.listsViewModel = new ListsViewModel(doc, nav, data);
    this.onSelectedListChanged = this.onSelectedListChanged.bind(this);
    this.onSelectedTaskChanged = this.onSelectedTaskChanged.bind(this);
    nav.on("selectedlistchanged", this.onSelectedListChanged);
    nav.on("selectedtaskchanged", this.onSelectedTaskChanged);
  }

  onSelectedListChanged(id) {
    this.doc.getElementById("title").innerHTML = this.nav.displayInfo;
    this.tasksViewModel = new TasksViewModel(this.doc, this.nav, this.data, id);
    this.nav.navigateToTask(this.data.getTasks(id)[0]);
  }

  onSelectedTaskChanged(id) {
    this.doc.getElementById("title").innerHTML = this.nav.displayInfo;
    this.detailsViewModel = new DetailsViewModel(this.doc, this.nav, this.data, id);
  }

  dispose() {
    nav.off("selectedlistchanged", this.onSelectedListChanged);
    nav.off("selectedtaskchanged", this.onSelectedTaskChanged);
  }
}

module.exports = {
  MainViewModel
};
