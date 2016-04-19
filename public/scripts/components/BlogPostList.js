import React from 'react';
import Preview from './Preview.js';
import PostCollection from './../collections/PostCollection.js';

const BlogPostList = React.createClass({
	getInitialState: function() {
		let post = new PostCollection();
		return ({
			post: post
		});
	},
	componentDidMount: function() {
		this.state.post.on('update', () => {
			this.setState({post: this.state.post});
		});
		this.state.post.fetch();
	},
	render: function() {
		let eachPreview = this.state.post.map((val, i, array) => {
			return (
				<Preview 
				key={i}
				title={val.get('title')}
				author = {val.get('author')}
				postDate= {val.get('createdAt')}
				body = {val.get('body')}
				/>
			)
		});
		return (
			<div>
			{eachPreview}
			</div>
			)
	}
});

export default BlogPostList