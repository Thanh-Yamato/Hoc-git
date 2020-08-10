function Mouse(name, weight) {
	this.name = name;
	this.weight = weight;
}

Mouse.prototype.getName = function() {
	console.log(this.name);
}

Mouse.prototype.play = function() {
	console.log('Playing.....');
};

module.exports = Mouse;

