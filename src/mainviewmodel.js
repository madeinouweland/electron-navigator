const { ListsViewModel } = require('./listsviewmodel.js');
const { TasksViewModel } = require('./tasksviewmodel.js');
const { DetailsViewModel } = require('./detailsviewmodel.js');

class MainViewModel {
  constructor(doc, nav, data) {
    this.titlecontainer = doc.getElementById("title");
    const listslistview = doc.getElementById("lists");
    this.taskslistview = doc.getElementById("tasks");
    this.detailcontainer = doc.getElementById("details");
    this.nav = nav;
    this.data = data;
    this.listsViewModel = new ListsViewModel(listslistview, nav, data);
    this.onNavigated = this.onNavigated.bind(this);
    this.onSelectedListChanged = this.onSelectedListChanged.bind(this);
    this.onSelectedTaskChanged = this.onSelectedTaskChanged.bind(this);
    nav.on("selectedlistchanged", this.onSelectedListChanged);
    nav.on("selectedtaskchanged", this.onSelectedTaskChanged);
    nav.on("navigated", this.onNavigated);

    // select first list
    this.nav.navigateToList(1);
  }

  onSelectedListChanged(id) {
    this.tasksViewModel = new TasksViewModel(this.taskslistview, this.nav, this.data, id);

    // list has changed, deselect task
    this.nav.navigateToTask(null);
  }

  onSelectedTaskChanged(id) {
    if (id === null) {
      this.detailcontainer.style.visibility = 'hidden';
      this.detailsViewModel = null;
    } else {
      this.detailsViewModel = new DetailsViewModel(this.detailcontainer, this.nav, this.data, id);
      this.detailcontainer.style.visibility = 'visible';
    }
  }

  onNavigated() {
    this.titlecontainer.innerHTML = this.nav.displayInfo;
  }

  dispose() {
    nav.off("selectedlistchanged", this.onSelectedListChanged);
    nav.off("selectedtaskchanged", this.onSelectedTaskChanged);
  }
}

module.exports = {
  MainViewModel
};
