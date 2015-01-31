var React = require("react");
var Reflux = require("reflux");
var {State, Navigation} = require("react-router");
var ImageStore = require("./../../stores/image/imageStore");
var SnapComponent = require("./snapComponent.js");
var SnapActioner = require("./../../actioners/snap/snapActioner");

var FrontPageComponent = React.createClass({
    mixins: [Reflux.ListenerMixin, State, Navigation],
    getInitialState() {
        return {
            image: {}
        }
    },
    componentDidMount() {
        this.listenTo(ImageStore, this.updateImage, this.updateImage);
        debugger;
        SnapActioner.setOn({event:"close", callback: _ => {
            this.tansitionTo("mockigur");
        }})
    },
    updateImage(image){
        if(image.cid === this.getParas().id){
            this.setState({
                image: image
            });
            SnapActioner.open("right");
        }
    },
    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <SnapComponent image={this.state.image} />
                </div>
            </div>
        );
    }
});

module.exports = FrontPageComponent;