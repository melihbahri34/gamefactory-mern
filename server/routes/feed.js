const express = require('express');
const Router = express.Router();

let Feed = require('../models/feed.model');

// Router.get, Router.post
Router.post('/api/feed-data', async (req, res) => {
	console.log(req.body)
	try {
		await Feed.create({
			feed: req.body.feed,
		})
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Server error' })
	}
})

Router.route('/feed-data').get((req, res) => {
  Feed.find()
    .then(feeds => res.json(feeds))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = Router;