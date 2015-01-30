var React = require("react");
var {RouteHandler} = require("react-router");
var Navbar = require("./../navbar/navbarComponent.jsx");

var masterContainer = React.createClass({
	render: function() {
		// use wrapping div as you can only return one element in react.
		return (
			<div> 
				<Navbar />
				<div className="container-fluid"> 
					<RouteHandler />
				</div>
			</div>
		)
	}
});

module.exports = masterContainer;