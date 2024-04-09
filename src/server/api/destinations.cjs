const router = require('express').Router();
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient();

// /api/users

//GET
router.get('/', async (req, res) => {
	try {
		const destinations = await prisma.destination.findMany()
		res.status(200).send(destinations)
	} catch (error) {
		console.log(error);
	}
})

module.exports = router;