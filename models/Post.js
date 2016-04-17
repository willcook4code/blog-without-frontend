require('./User');
module.exports = bookshelf.model('Post', {
	tableName: 'posts',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	author: function() {
		return this.belongsTo('User', 'userId');
	}
});