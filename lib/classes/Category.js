class Category {
  constructor(catObj) {
    this.id = catObj.id;
    this.name = catObj.name;
    this.cat_order = catObj.cat_order;
    this.autoassign = (catObj.autoassign === 1);
    this.type = catObj.type;
    this.priority = catObj.priority;
  }
}

module.exports = Category;
