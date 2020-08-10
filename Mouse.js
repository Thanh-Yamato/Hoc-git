function Mouse(name, weight) {
	this.name = name;
	this.weight = weight;
}

Mouse.prototype.getName = function() {
	console.log(this.name);
}

Mouse.prototype.play = function() {
	console.log('Playing.....');
}

Mouse.prototype.sleep = function() {
	console.log('Sleeping.....');
}

module.exports = Mouse;

