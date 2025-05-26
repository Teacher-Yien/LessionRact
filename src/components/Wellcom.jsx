import React from 'react'
import { Card } from './Card'

export const Wellcom = () => {
		return (
				<div className=' p-5 grid grid-cols-5 gap-4'>
						<Card url="Nami.jpg" name="JSX" sex="Female"/>
						<Card url="luffy.jpg" name="koko" sex="Male"/>
				</div>
		)
}
