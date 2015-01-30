var React = require("react");
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var MasterContainer = require("./components/master/masterContainer.jsx");


var routes = (
	<Route name="Mockigur" path="/" handler={MasterContainer}>
	</Route>
);

Router.run(routes, Handler => {
    React.render(<Handler /> , document.getElementById("mockigur"))
})