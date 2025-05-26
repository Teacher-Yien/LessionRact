
import React from 'react'

export const Card = (props) => {
		return (
				<div>
							<div className=' w-[300px] h-[400] bg-blue-500 rounded  p-2 text-white mt-2'>
								<img className=' h-[150px] w-[100%] rounded' src={props.url} alt="" />
								<h1 className=' mt-2'>My Name: {props.name}</h1>
								<p className=' text-[18px] mt-2'>Gender: {props.sex}</p>
							</div>
				</div>
		)
}
