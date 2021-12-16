// MERN = Mongo + Express + React + Node

// Development = Node.js server + React server

// MEN

// E - Express

// import postRoutes from './routes/users.js';
// const postRoutes = require('./routes/users');

// express
const express = require('express');
const app = express();

// cors
const cors = require('cors');

// mongoose
const mongoose = require('mongoose');

// model
const User = require('./models/user.model');
const Feed = require('./models/feed.model');
const Blog = require('./models/blog.model');

// const multer = require('multer');

/*
const storage = multer.diskStorage({
	destination: (req, file, callback) => {

	},
	filename: (req, file, callback) => {
		callback(null, file.originalNAme)
	}
});
*/

// json web token
const jwt = require('jsonwebtoken');

// b crypt.js
const bcrypt = require('bcryptjs');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://melihbahri:_Gamer404@cluster0.mq3gk.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.set('useUnifiedTopology', false);

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

// app.use('/users-data', postRoutes);



app.post('/api/register', async (req, res) => {
	console.log(req.body)
	try {
		const newPassword = await bcrypt.hash(req.body.password, 10)
		await User.create({
			name: req.body.name,
			email: req.body.email,
			password: newPassword,
		})
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}
})

 app.post('/api/login', async (req, res) => {
	const user = await User.findOne({
		email: req.body.email,
	})

	if (!user) {
		return { status: 'error', error: 'Invalid login' }
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				name: user.name,
				email: user.email,
			},
			'secret123'
		)

		return res.json({ status: 'ok', user: token })
	} else {
		return res.json({ status: 'error', user: false })
	}
})

app.get('/api/quote', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'secret123')
		const email = decoded.email
		const user = await User.findOne({ email: email })

		return res.json({ status: 'ok', quote: user.quote })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})

app.post('/api/quote', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'secret123')
		const email = decoded.email
		await User.updateOne(
			{ email: email },
			{ $set: { quote: req.body.quote } }
		)

		return res.json({ status: 'ok' })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})

app.post('/api/feed-data', async (req, res) => {
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

app.post('/api/blog-data', async (req, res) => {
	console.log(req.body)
	try {
		await Blog.create({
			blogTitle: req.body.blogTitle,
			blogSubtitle: req.body.blogSubtitle,
			blogArticle: req.body.blogArticle,
			blogImage: req.body.blogImage,
			blogDate: req.body.blogDate,
			blogAuthor: req.body.blogAuthor,
			blogAuthorProfile: req.body.blogAuthorProfile,
		})
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Server error' })
	}
})

/*
app.get('/users-data', async (req, res) => {
	try {
		return res;
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
}
*/







app.get('/api/name', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'secret123')
		const email = decoded.email
		const user = await User.findOne({ email: email })

		return res.json({ status: 'ok', name: user.name })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})

app.post('/api/name', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'secret123')
		const email = decoded.email
		await User.updateOne(
			{ email: email },
			{ $set: { name: req.body.name } }
		)

		return res.json({ status: 'ok' })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})

app.get('/api/email', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'secret123')
		const email = decoded.email
		const user = await User.findOne({ email: email })

		return res.json({ status: 'ok', email: user.email })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})

app.post('/api/email', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'secret123')
		const email = decoded.email
		await User.updateOne(
			{ email: email },
			{ $set: { email: req.body.email } }
		)

		return res.json({ status: 'ok' })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})

app.get('/api/password', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'secret123')
		const email = decoded.email
		const user = await User.findOne({ email: email })

		return res.json({ status: 'ok', password: user.password })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})

app.post('/api/password', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'secret123')
		const email = decoded.email
		await User.updateOne(
			{ email: email },
			{ $set: { password: req.body.password } }
		)

		return res.json({ status: 'ok' })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})

app.get('/api/phone', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'secret123')
		const email = decoded.email
		const user = await User.findOne({ email: email })

		return res.json({ status: 'ok', phone: user.phone })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})

app.post('/api/phone', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'secret123')
		const email = decoded.email
		await User.updateOne(
			{ email: email },
			{ $set: { phone: req.body.phone } }
		)

		return res.json({ status: 'ok' })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})


app.get('/api/user', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'secret123')
		const email = decoded.email
		const user = await User.findOne({ email: email })

		return res.json({ status: 'ok', 
		    name: user.name, 
			email: user.email, 
			password: user.password, 
			phone: user.phone, 
			title: user.title, 
			currentPosition: user.currentPosition,
		    about: user.about,
		    location: user.location })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})

app.post('/api/user', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'secret123')
		const email = decoded.email
		await User.updateOne(
			{ email: email },
			{ $set: 
				{ 
					name: req.body.name, 
					email: req.body.email, 
					password: req.body.password, 
					phone: req.body.phone,
				    title: req.body.title,
				    currentPosition: req.body.currentPosition,
				    about: req.body.about,
				    location: req.body.location 
			}   }
		)

		return res.json({ status: 'ok' })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})

const usersRouter = require('./routes/users');
app.use('/users-data', usersRouter);

const feedsRouter = require('./routes/feeds');
app.use('/feed-data', feedsRouter);

const blogsRouter = require('./routes/blogs');
app.use('/blog-data', blogsRouter);

app.listen(1337, () => {
	console.log('Server started on 1337')
})
