var React = require("react");
var {RouteHandler} = require("react-router");
var Navbar = require("./../navbar/navbarComponent");
var SnapContainer = require("./../snap/snapContainer");


var masterContainer = React.createClass({
    render() {

        // use wrapping div as you can only return one element in react.
        // seperating navbar out into other compoenent for readability / seperation of concerns
        return (
            <div>
                <div className="snap-content" id="content">
                    <Navbar />
                    <div className="container-fluid">
                        <RouteHandler />
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="snap-drawers">
                            <div className="snap-drawer custom-right-drawer snap-drawer-right">
                                <SnapContainer />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = masterContainer;