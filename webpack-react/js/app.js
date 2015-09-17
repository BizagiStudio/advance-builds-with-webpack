var React = require('react');

var Timer = React.createClass({

	getInitialState() {
		return {secondsElapsed: 0};
	},

	tick: function() {
		this.setState({secondsElapsed: this.state.secondsElapsed + 1});
	},

	componentDidMount: function() {
		this.interval = setInterval(this.tick, 1000);
	},

	componentWillUnmount: function() {
		clearInterval(this.interval);
	},

	render: function() {
		return (
			<div className="rendered">
				<h3>It is the final cowntdown</h3>
				<p>Seconds Elapsed: {this.state.secondsElapsed}</p>
			</div>
		);
	}

});

React.render(<Timer />, document.getElementById('container'))