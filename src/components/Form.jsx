
import React from 'react';
import { useState } from 'react';

export const Form = () => {
		const [name,setName] = useState('Nita');
		const [color,setColor] = useState({value:"red"});
		const handlerChange = (e)=>{
			setName(e.target.value);
		}
		const handlerChangeColor = (e)=>{
			setColor({value:e.target.value});
		}
		return (
				<div className=' p-8'>
					  <form action=""  className=' w-[300px] m-auto p-3 rounded bg-green-700 text-gray-600'>
								 <label htmlFor="name">Name:{name}</label>
									<input 
										type="text"
										id='name'
										onChange={handlerChange}
										/>
										<label htmlFor="color" className=' mt-3'>Select Color: {color.value} </label>
										<select id="color" className=' mt-2 w-[100%]' value={color.value}  onChange={handlerChangeColor} >
													<option value="Red">Red</option>
													<option value="Blue">Blue</option>
													<option value="Yellow">Yellow</option>
										</select>
										<textarea name="" id="" className=' mt-5'></textarea>
										<button type='submit'></button>
							</form>
				</div>
		)
}
