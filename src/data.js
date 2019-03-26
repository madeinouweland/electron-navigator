class Data {
  constructor() {
    this.lists = {
      "movies" : ["godfather", "pulp fiction", "toy story", "casino", "the hard way"],
      "groceries" : ["apples", "paprika", "lemon", "pepprs", "bread", "soup"],
      "music" : ["the police", "the beatles", "mike oldfield", "mark knopfler"],
    }
  }

  getLists() {
    return Object.keys(this.lists);
  }

  getTasks(listId) {
    return this.lists[listId];
  }
}

module.exports = {
  Data
};
