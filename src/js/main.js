var React = require("react");
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

React.initializeTouchEvents(true);

var MasterContainer = require("./components/master/masterContainer");
var FrontPageContainer = require("./components/frontPage/fontPageContainer.js");
var SnapContainer = require("./components/snap/snapContainer");


var routes = (
	<Route name="Mockigur" path="/" handler={MasterContainer}>
		<DefaultRoute handler={FrontPageContainer}/>
        <Route name="Image" path="image/:id" handler={SnapContainer}></Route>
		
	</Route>
);

Router.run(routes, Handler => {
    React.render(<Handler /> , document.getElementById("mockigur"))
})