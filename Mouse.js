function Mouse(name, weight) {
	this.name = name;
	this.weight = weight;
}

Mouse.prototype.getName = function() {
	console.log(this.name);
}

Mouse.prototype.eat = function() {
	console.log('Eating.....');
};

module.exports = Mouse;

