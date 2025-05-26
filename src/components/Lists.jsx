import React from 'react'

export const Lists = () => {
		const MenuItem = ["React","Docs","Tutorial","Blog","Comunity"];
		const ItemList = MenuItem.map((e)=>
			<li key={e}>{e}</li>
		);
		return (
				<div>

					  <menu className=' bg-gray-950 p-3'>
									<ul className=' text-white w-[80%] m-auto flex gap-3'>{ItemList}</ul>
							</menu>
				</div>
		)
}
