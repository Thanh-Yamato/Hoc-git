function Mouse(name, weight) {
	this.name = name;
	this.weight = weight;
}

Mouse.prototype.getName = function() {
	console.log(this.name);
}

Mouse.prototype.sleep = function() {
	console.log('Sleeping.....');
};

module.exports = Mouse;

