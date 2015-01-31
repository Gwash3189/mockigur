var React = require("react");
var {Navigation} = require("react-router");
var $ = require("jquery");
var ImageActioner = require("./../../actioners/image/imageActioner");

var FrontPageImageItem = React.createClass({
    mixins: [Navigation],
    getInitialState() {
        return {
            showDetails: false
        }
    },
    toggleDetails() {
        this.setState({
            showDetails: !this.state.showDetails
        });
    },
    hideDetails() {
        this.setState({
            showDetails: false
        });
    },
    toggleTouchDetails() {
        $(this.refs.image.getDOMNode()).toggleClass("front-page-image-touch");
        this.toggleDetails();
    },
    showImage() {
        debugger;
        ImageActioner.setImage(this.props.image);
        this.transitionTo('image', {id: this.props.image.cid});
    },
    render() {
        return (
            <div className="col-md-4 col-sm-6 col-xs-12 col-lg-3" onClick={this.showImage} onTouchStart={this.toggleTouchDetails} onTouchEnd={this.toggleTouchDetails} onMouseEnter={this.toggleDetails} onMouseLeave={this.toggleDetails}>
                <span className="front-page-image-title">{this.state.showDetails && this.props.image.title}</span>
                <img ref="image" className="front-page-image" src={this.props.image.url} alt={this.props.image.title} />
                <span className="front-page-image-description">{this.state.showDetails && this.props.image.description}</span>
            </div>
        );
    }
});

module.exports = FrontPageImageItem;