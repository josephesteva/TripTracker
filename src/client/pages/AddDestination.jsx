import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddDestination() {
	const [name, setName] = useState('')
	const [location, setLocation] = useState('')
	const [description, setDescription] = useState('')

	const navigate = useNavigate()

	async function handleAddDestination (e) {
		e.preventDefault();
		try {
			const destination = await axios.post('/api/destinations/', {
				name,
				location,
				description
			});
			console.log(destination);
			navigate('/')
		} catch (error) {
			console.log(error);
		}
	}

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold pb-5">Destination Information</h1>
      <div>
        <form className="flex flex-col gap-3" onSubmit={handleAddDestination}  >
          <div>
            <p>Name: </p>
            <input type="text" placeholder="Destination Name" className="border border-black rounded-md w-1/2" value={name} onChange={e=>setName(e.target.value)}/>
          </div>
					<div>
            <p>Location: </p>
            <input type="text" placeholder="Destination Location" className="border border-black rounded-md w-1/2" value={location} onChange={e=>setLocation(e.target.value)}/>
          </div>
					<div >
            <p>Description: </p>
            <textarea type="text" placeholder="Destination Description" className="border border-black rounded-md w-1/2 h-32" value={description} onChange={e=>setDescription(e.target.value)} />
          </div>
					<button type='submit' className="border border-black rounded-md mr-auto px-5 py-1">Add Destination</button>
        </form>
      </div>
    </div>
  );
}
