var React = require("react");
var Reflux = require("reflux");
var ImagesActioner = require("./../../actioners/images/imagesActioner");
var SnapConatiner = require("./../../components/snap/snapContainer");
var ImagesStore = require("./../../stores/images/imagesStore");
var FrontPageImageList = require("./fontPageImageList.js");

var FrontPageComponent = React.createClass({
    mixins: [Reflux.ListenerMixin],
    getInitialState() {
        return {
            images: []
        }
    },
    componentDidMount() {
        this.listenTo(ImagesStore, this.updateImage, this.updateImage);
    },
    updateImage(images) {
        this.setState({
            images: images
        })
    },
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-1 col-xs-10">
                        <div className="row well">
                            <div className="images-container">
                                <FrontPageImageList list={this.state.images} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
});

module.exports = FrontPageComponent;