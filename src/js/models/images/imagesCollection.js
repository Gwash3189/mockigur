var Backbone = require("Backbone");
var Image = require("./image");

module.exports = Backbone.Collection.extend({
	model: Image
})