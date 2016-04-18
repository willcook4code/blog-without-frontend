import React from 'react';
import moment from 'moment';

const Preview = React.createClass({
	render: function() {
		console.log(moment().format);
		return (
			<div>
				<h2>{this.props.title}</h2>
				<h3>{this.props.author.firstName}</h3>
				<h3>{moment(this.props.postDate).fromNow()}</h3>
				<p>{this.props.body.substr(0,200)}</p>
			</div>
			)
	}
});

export default Preview;