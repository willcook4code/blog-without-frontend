import React from 'react';
import moment from 'moment';

const Preview = React.createClass({
	render: function() {
		return (
			<div>
				<h2>{this.props.title}</h2>
				<h3>By: {this.props.author.firstName}</h3>
				<p>{moment(this.props.postDate).fromNow()}</p>
				<p>{this.props.body.substr(0,200)}</p>
			</div>
			)
	}
});

export default Preview;