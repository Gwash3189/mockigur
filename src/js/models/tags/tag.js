var Backbone = require("Backbone");
module.exports = Backbone.Model.extend({
	initialize(attr) {
		this.name = attr.name;
	}
});