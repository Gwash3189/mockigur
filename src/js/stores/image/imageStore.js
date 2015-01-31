var Reflux = require("reflux");
var ImageActioner = require("./../../actioners/image/imageActioner")
var ImagesStore = Reflux.createStore({
    listenables: [ImageActioner],
    init() {
        this.image = {};
    },
    onSetImage(image) {
        this.image = image;
        this.trigger(image);
    }
});
module.exports = ImagesStore;