
import React from 'react'
import { useState } from 'react'

export const UseSate = () => {
	const [count, setCount] = useState(0);
	const handleClick = ()=>{
		setCount(count+1);
	}
		return (
				<div className=' p-8'>
					UseSate <span>{count}</span> <br />
					<button onClick={handleClick} className=' text-white px-5 py-2 rounded bg-blue-500'>Click Count</button>
					</div>
		)
}
