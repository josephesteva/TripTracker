import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function SingleDestination() {
	const {id} = useParams()
	
	const [destination, setDestination] = useState({})

	async function fetchDestination () {
		try {
			const {data} = await axios.get(`/api/destinations/${id}`)
			console.log(data);
			setDestination(data)
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		fetchDestination()
	}, [])

	return (
		<div className='p-5'>
			<h1 className='text-2xl font-bold pb-3'>{destination.name}</h1>
			<div className='border border-blue-500 rounded md flex flex-col w-3/4 gap-3'>
				<p>Country: {destination.location}</p>
				<p>Description: {destination.description}</p>
			</div>
		</div>
	)
}
