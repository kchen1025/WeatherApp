var React = require('react');
var ReactDOM = require('react-dom');
var transparentBg = require('../styles').transparentBg;

var Home = React.createClass({

	getInitialState: function(){
		return(
			location: ''
		)
	},


	render: function(){
		return(
			<div className = "jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
				<h1>Enter a City and State</h1>
				<div className = "col-sm-12">
					<form>
						<div className = "form-group">
							<input 
							className = "form-control"
							placeholder = "Github username"
							type = "text"/>
						</div>
						<div className = "form-group col-sm-4 col-sm-offset-4">
							<button
								className = "btn btn-block btn-success"
								type = "submit">
								continue
							</button>

						</div>
					</form>
				</div>
			</div>
		)
	}
});


module.exports = Home;