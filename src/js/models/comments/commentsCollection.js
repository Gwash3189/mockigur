var Backbone = require("Backbone");
var Comment = require("./comment");

module.exports = Backbone.Collection.extend({
	model: Comment,
	comparator: "topCommentPosition"
})