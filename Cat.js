function Cat(name, weight) {
	this.name = name;
	this.weight = weight;
	this.stomach = [];
}

Cat.prototype.eat = function(food) {
	this.stomach.push(food);
	this.weight += food.weight;
	return this;
}

module.exports = Cat;