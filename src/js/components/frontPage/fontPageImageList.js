var React = require("react");
var FrontPageImageItem = require("./frontPageImageItem");

var FrontPageImageList = React.createClass({
	renderImageItem(imageModel) {
		return <FrontPageImageItem key={imageModel.cid} image={imageModel} />
	},
	render() {
		return (
			<div>
				{this.props.list.map(this.renderImageItem)}
			</div>
		);
	}
});

module.exports = FrontPageImageList;