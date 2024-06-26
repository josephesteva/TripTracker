const router = require('express').Router();
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient();

// /api/destinations

//GET
router.get('/', async (req, res) => {
	try {
		const destinations = await prisma.destination.findMany()
		res.status(200).send(destinations)
	} catch (error) {
		console.log(error);
	}
})

router.get('/:id', async (req, res, next) => {
	const id = +req.params.id
	try {
		const destination = await prisma.destination.findUnique({
			where: {
				id
			}
		})
		res.status(200).send(destination)
	} catch (error) {
		console.log(error);
	}
})

// POST
router.post('/', async (req, res, next) => {
	const {name, country, description, imageUrl, location} = req.body
	try {		
		const destination = await prisma.destination.create({
			data: {
				name,
				country,
				description, 
				imageUrl,
				location
			}
		})
		res.status(201).send(destination)
	} catch (error) {
		console.log(error);
	}
})

// UPDATE 
router.patch('/:id', async (req, res, next) => {
	const id = +req.params.id;
	const {name, location, description} = req.body;
	try {
		const destination = await prisma.destination.update({
			where: {
				id
			},
			data: {
				name,
				country,
				description,
				imageUrl,
				location
			}
		})
		res.status(200).send(destination)
	} catch (error) {
		console.log(error);
	}
})

// DELETE 
router.delete('/:id', async (req, res, next) => {
	const id = +req.params.id;
	try {
		const destination = await prisma.destination.delete({
			where: {
				id
			}
		})
		res.status(200).send(destination)
	} catch (error) {
		console.log(error);
	}
})

module.exports = router;