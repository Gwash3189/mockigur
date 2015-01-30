var Backbone = require("Backbone");
var Math = require("Math");
module.exports = Backbone.Model.extend({
	defaults: {
		user: "anon",
		postedDate: new Date(),
		topCommentPosition: Math.floor(Math.random() * 1000)
	},
	initialize(attr) {
		this.user = attr.user;
		this.points = attr.points;
		this.postedDate = attr.postedDate;
		this.topCommentPosition = attr.topCommentPosition;

	}
});