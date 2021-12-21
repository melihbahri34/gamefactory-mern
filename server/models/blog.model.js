const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    blogTitle: {
        type: String,
        required: true,
        trim: true
    }, 
    blogSubtitle: {
        type: String,
        required: true
    },
    blogArticle: {
        type: String,
        required: true
    },
    blogImage: {
        type: String
    },
    blogDate: {
        type: String
    },
	blogAuthor: { type: String, required: true },
	blogAuthorProfile: { type: String, required: true },
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;

/*
const mongoose = require('mongoose');

const Blog = new mongoose.Schema(
	{
		blogTitle: { type: String, required: true },
		blogSubtitle: { type: String, required: true },
		blogArticle: { type: String, required: true },
		blogImage: { type: String, required: true },
		blogDate: { type: String, required: true },
		blogAuthor: { type: String, required: true },
		blogAuthorProfile: { type: String, required: true },
	},
	{ collection: 'blog-data' }
);

const model = mongoose.model('BlogData', Blog);

module.exports = model;
*/