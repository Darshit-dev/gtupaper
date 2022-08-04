/** @format */

import React from 'react'

function Card({ item }) {
	return (
		<div className='w-full rounded-md flex flex-col   h-52 bg-white drop-shadow-md  hover:drop-shadow-xl'>
			<div className='flex flex-col justify-center items-center flex-1'>
				<span className='flex-1 flex  items-center'>{item.subject}</span>
				<span className='flex-1 flex items-center'>{item.subcode}</span>
			</div>
			<div className='flex  justify-center'>
				<a
					href={item.link}
					className='mx-5 h-8 rounded-2xl flex-1 bg-indigo-500 mb-3 text-white drop-shadow-md'
				>
					View
				</a>
			</div>
		</div>
	)
}

export default Card
