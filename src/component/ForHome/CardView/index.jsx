/** @format */

import React from 'react'
import Card from './Card'
function CardView({ pdata }) {
	return (
		<div className='self-center w-full sm:gap-8 sm:mt-8 grid max-w-6xl grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-4 mt-4 gap-4'>
			{pdata.map((item, index) => {
				console.log(item, '👍', index)
				return <Card item={item}></Card>
			})}
		</div>
	)
}

export default CardView
