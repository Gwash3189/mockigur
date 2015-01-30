var Backbone = require("Backbone");
var Math = require("Math");
module.exports = Backbone.Model.extend({
	defaults: {
		user: "Adam Beck", // no need to model a user for this demo. However, any image that is 'posted' is be me!
		postedDate: new Date(),
		points: Math.floor(Math.random() * 1000)
	},
	initialize(attr) {
		this.url = attr.url;
		this.title = attr.title;
		this.desc = attr.title;
		this.postedDate = attr.postedDate;
		this.points = attr.points;
		this.tags = attr.tags;
		this.source = attr.source;
		this.user = attr.user;
		this.comments = attr.comments;
		this.tag = attr.tags;
	}
});