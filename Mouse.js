function Mouse(name, weight) {
	this.name = name;
	this.weight = weight;
}

Mouse.prototype.getName = function() {
	console.log(this.name);
}

module.exports = Mouse;

