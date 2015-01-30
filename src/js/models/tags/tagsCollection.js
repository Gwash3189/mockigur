var Backbone = require("Backbone");
var Tag = require("./tag");

module.exports = Backbone.Collection.extend({
	model: Tag
})