var Reflux = require("reflux");
var Image = require("./../../models/images/image");
var ImageCollection = require("./../../models/images/imagesCollection");
var CommentsCollection = require("./../../models/comments/commentsCollection");
var TagsCollection = require("./../../models/tags/tagsCollection");

var ImagesStore = Reflux.createStore({
	init() {
		debugger;
		// this is where the store would get the initial data
		// images etc. Could be done async with promises
		// would need to trigger the new list once the promise returned
		// this trigger would update the listening components. 
		this.Images = new ImageCollection([
			new Image({
				url: "",
				title: "Hello World",
				desc: "Hello  Mockigur",
				comments: new CommentsCollection(),
				tags: new TagsCollection(),
				source: ""
			})
		])
	},
	getInitialState: function() {
		debugger;
		//if the above was async, this could return an empty collection back to start with
		return this.Images;
	}
});
module.exports = ImagesStore;