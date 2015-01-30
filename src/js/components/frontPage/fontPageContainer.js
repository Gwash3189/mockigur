var React = require("react");
var Reflux = require("reflux");
var ImagesStore = require("./../../stores/images/imagesStore");
var ImagesActioner= require("./../../actioners/images/imagesActioner");
var ImagesStore= require("./../../stores/images/imagesStore");
var FrontPageImageList = require("./fontPageImageList.js");

var FrontPageComponent = React.createClass({
	getInitialState() {
		debugger;
		return {
			images: []
		}
	},
	componentDidMount() {
		debugger;
		this.listenTo(ImagesStore, this.updateImages, this.updateImages);
	},
	updateImage(images){
		debugger;
		this.setState({
			images: images
		})
	},
	mixins: [Reflux.ListenerMixin],
	render() {
		return (
			<div className="row">
				<div className="col-xs-offset-1 col-xs-11" >
					<div className="row"> 
						<div className="images-container"> 
							<FrontPageImageList list={this.state.images} />
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = FrontPageComponent;