
import React from 'react'
import { useState } from 'react'

export const LifeState = () => {
	const [life, setLife] = useState(0);

	const handleChange = (e) => {
			const value = parseInt(e.target.value, 10);
			setLife(isNaN(value) ? 0 : value); // fallback to 0 if not a number
	};
		return (
				<div className=' p-5'>
					  <center>
							<input 
							type="text" 
							placeholder='Enter rounded' 
							className='m border border-red-400 p-4 rounded-full'
							onChange={handleChange}
							value={life}
							 />
							</center>
					
							<div style={{borderRadius:life}} className='box bg-blue-400 w-[300px] h-[300px] m-auto mt-2'>	</div>
				</div>
		)
}
