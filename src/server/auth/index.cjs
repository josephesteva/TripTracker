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
		res.status(201).send(user)	
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

		const isValid = await bcrypt.compare(password, user.password)

		if (!isValid) {
			res.status(401).send({message: 'Invalid password'})
			return
		}

		res.status(200).send(user)
	} catch (error) {
		console.log(error);
	}
})

module.exports = router;
