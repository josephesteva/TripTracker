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

// POST
router.post('/', async (req, res, next) => {
	const {name, location, description} = req.body
	try {		
		const destination = await prisma.destination.create({
			data: {
				name,
				location,
				description
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
				location,
				description
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