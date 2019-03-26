const { EventEmitter } = require('./eventemitter.js');

class Navigator extends EventEmitter {
  constructor() {
    super();
    this.selectedListId = null;
    this.selectedTaskId = null;
  }

  navigateToList(id) {
    this.selectedListId = id;
    this.emit('selectedlistchanged', id);
    this.emit('navigated');
  }

  navigateToTask(id) {
    this.selectedTaskId = id;
    this.emit('selectedtaskchanged', id);
    this.emit('navigated');
  }

  get displayInfo() {
    return `list: ${this.selectedListId}, task: ${this.selectedTaskId}`;
  }
}

module.exports = {
  Navigator
};
