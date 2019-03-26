class Database {
  constructor() {
    this.lists = [
      { id: 1, name: "movies" },
      { id: 2, name: "groceries" },
      { id: 3, name: "music" },
    ]

    this.tasks = [
      { id: 1, listId: 1, name: "godfather"},
      { id: 2, listId: 1, name: "pulp fiction"},
      { id: 3, listId: 1, name: "toy story"},
      { id: 4, listId: 1, name: "casino"},
      { id: 5, listId: 1, name: "the hard way"},
      { id: 6, listId: 2, name: "apples"},
      { id: 7, listId: 2, name: "paprika"},
      { id: 8, listId: 2, name: "lemon"},
      { id: 9, listId: 2, name: "peppers"},
      { id: 10, listId: 2, name: "bread"},
      { id: 11, listId: 2, name: "soup"},
      { id: 12, listId: 3, name: "the police"},
      { id: 13, listId: 3, name: "the beatles"},
      { id: 14, listId: 3, name: "mike oldfield"},
      { id: 15, listId: 3, name: "mark knopfler"},
    ]
  }

  getLists() {
    return this.lists;
  }

  getTasks(listId) {
    // listId type is string, this.tasks.listId type is number, compare with double equals to ignore type
    return this.tasks.filter(x => x.listId == listId);
  }

  getTask(taskId) {
    // taskId type is string, this.tasks.taskId type is number, compare with double equals to ignore type
    return this.tasks.find(x => x.id == taskId);
  }
}

module.exports = {
  Database
};
