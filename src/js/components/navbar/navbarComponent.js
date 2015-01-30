var React = require("react");
// ES6 deconstruction
var {Link} = require("react-router");

module.exports = React.createClass({
	render(){
		return (
			<nav className="navbar navbar-default">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
			        <span className="sr-only">Toggle navigation</span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			      </button>
                    <Link to="Mockigur" className="navbar-brand">Mockigur</Link>
			    </div>
			    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			      <ul className="nav navbar-nav">
			      </ul>
			    </div>
			  </div>
			</nav>
		);
	}
});