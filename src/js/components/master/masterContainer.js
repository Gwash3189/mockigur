var React = require("react");
var {RouteHandler} = require("react-router");
var Navbar = require("./../navbar/navbarComponent");

var masterContainer = React.createClass({
	render() {
		// use wrapping div as you can only return one element in react.
		// seperating navbar out into other compoenent for readability / seperation of concerns
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