let express = require('express');
let router = express.Router();
let path = require('path');
let bookshelfApi = require('bookshelf-api')({
	path: path.join(__dirname, '../models')
});
let loggedIn = require('../lib/middleware/logged-in');

router.post(
	'/post',
	loggedIn,
	function(req, res, next) {
		if(!req.body.title) {
			res.error.add('post.MISSING_TITLE', 'title');
		}
		if(!req.body.body) {
			res.error.add('post.MISSING_BODY', 'body');
		}
		if(!res.error.send('/api/v1/post')) {
			req.body.userId = req.user.id;
			if(req.body.tags) {
				req.body.tags = JSON.stringify(req.body.tags);
			}
			next();
		}
	},
	bookshelfApi
);

router.get(
	'/post',
	function(req, res, next) {
		if(!req.query.withRelated) {
			req.query.withRelated = [];
		}
		req.query.withRelated.push('author');
		console.log(req.query);
		next();
	},
	bookshelfApi
);

router.use(bookshelfApi);

module.exports = router;
