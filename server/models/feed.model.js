const mongoose = require('mongoose');

const Feed = new mongoose.Schema(
	{
		feed: { type: String, required: true },
	},
	{ collection: 'feed-data' }
);

const model = mongoose.model('FeedData', Feed);

module.exports = model;