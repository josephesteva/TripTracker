
const router = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const { PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

// POST
// registers a new user
router.post('/register', async (req, res, next) => {
	const {username, password} = req.body;
	const SALT_ROUNDS = 5;
	const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)
	try {
		const user = await prisma.user.create({
			data: {
				username,
				password: hashedPassword
			}
		})
		const token = jwt.sign({id: user.id, username: user.username}, process.env.JWT_SECRET, { expiresIn: '1d' })
		res.status(201).send({token})	
	} catch (error) {
		console.log(error);
	}
})

// logs in an existing user
router.post('/login', async (req, res, next) => {
	const {username, password} = req.body
	try {
		const user = await prisma.user.findUnique({
			where: {
				username
			}
		})

		if(!user) {
			res.status(401).send({message: 'Invalid username'})
			return
		}

		const isValid = await bcrypt.compare(password, user.password)

		if (!isValid) {
			res.status(401).send({message: 'Invalid password'})
			return
		}

		const token = jwt.sign({id: user.id, username: user.username}, process.env.JWT_SECRET, { expiresIn: '1d' })

		res.status(200).send({token})
	} catch (error) {
		console.log(error);
	}
})

// GET 
// checks token validity from local storage
router.get('/check', async (req, res, next) => {
	const bearer = req.headers.authorization
	const [, token] = bearer.split(" ");

	try {
		const user = jwt.verify(token, process.env.JWT_SECRET)
		const newToken = jwt.sign({id: user.id, username: user.username}, process.env.JWT_SECRET, { expiresIn: '1d' })
		res.status(200).send({user, newToken})
	} catch (error) {
		res.status(200).send({message: 'Not logged in'})
		console.log(error);
	}
})

module.exports = router;
