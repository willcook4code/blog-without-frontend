import Backbone from 'backbone';


export default Backbone.Model.extend({
	defaults: {
		id: '',
		title: '',
		body: '',
		author: '',
		createdAt: ''
	},
	urlRoot: 'http://localhost:3000/api/v1/post',
	idAttribute: 'id'
});