var Reflux = require("reflux");
var SnapActioner = require("./../../actioners/snap/snapActioner");
var Snap = require("Snap");
var $ = require("jquery");
var ImagesStore = Reflux.createStore({
    listenables: [SnapActioner],
    init() {
        debugger;
        $(_ => {
            this.Snapper = new Snap({
                element: document.getElementById("content"),
                dragger: null,
                addBodyClasses: true,
                touchToDrag: false,
                tapToClose: true
            });
        });
    },
    onOpen(direction) {
        this.Snapper.open(direction || "right")
    },
    onClose(direction){
        this.Snapper.close(direction || "right")
    },
    onSetOn(opts) {
        this.Snapper.on(opts.event, opts.callback);
    }
});
module.exports = ImagesStore;/**
 * Created by Big Computer on 31/01/2015.
 */
