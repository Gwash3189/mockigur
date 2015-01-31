var Reflux = require("reflux");
var Image = require("./../../models/images/image");
var ImageActioner = require("./../../actioners/images/imagesActioner");
var ImageCollection = require("./../../models/images/imagesCollection");
var CommentsCollection = require("./../../models/comments/commentsCollection");
var TagsCollection = require("./../../models/tags/tagsCollection");

var ImageStore = Reflux.createStore({
    listenables: [ImageActioner],
    init() {
        // this is where the store would get the initial data
        // images etc. Could be done async with promises
        // would need to trigger the new list once the promise returned
        // this trigger would update the listening components.
        this.Images = new ImageCollection([
            new Image({
                url: "http://placehold.it/180x180",
                title: "Hello World",
                description: "Hello  Mockigur",
                comments: new CommentsCollection(),
                tags: new TagsCollection(),
                source: "http://placehold.it/350x350"
            }), new Image({
                url: "http://placehold.it/180x180",
                title: "Hello World",
                description: "Hello  Mockigur",
                comments: new CommentsCollection(),
                tags: new TagsCollection(),
                source: "http://placehold.it/350x350"
            }), new Image({
                url: "http://placehold.it/180x180",
                title: "Hello World",
                description: "Hello  Mockigur",
                comments: new CommentsCollection(),
                tags: new TagsCollection(),
                source: "http://placehold.it/350x350"
            }), new Image({
                url: "http://placehold.it/180x180",
                title: "Hello World",
                description: "Hello  Mockigur",
                comments: new CommentsCollection(),
                tags: new TagsCollection(),
                source: "http://placehold.it/350x350"
            })
        ])
    },
    getInitialState() {
        //if the above was async, this could return an empty collection back to start with
        return this.Images;
    }
});
module.exports = ImageStore;