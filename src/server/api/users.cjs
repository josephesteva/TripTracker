const router = require('express').Router();
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient();

// /api/users

//GET
router.get('/', async (req, res) => {
	try {
		const users = await prisma.user.findMany()
		res.status(200).send(users)
	} catch (error) {
		console.log(error);
	}
})

module.exports = router;