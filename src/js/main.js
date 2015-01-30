var React = require("react");
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var MasterContainer = require("./components/master/masterContainer");
var FrontPageContainer = require("./components/frontPage/fontPageContainer.js");


var routes = (
	<Route name="Mockigur" path="/" handler={MasterContainer}>
		<DefaultRoute handler={FrontPageContainer}/>
		
	</Route>
);

Router.run(routes, Handler => {
    React.render(<Handler /> , document.getElementById("mockigur"))
})