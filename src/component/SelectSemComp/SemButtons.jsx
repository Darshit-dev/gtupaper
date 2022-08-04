/** @format */

import React from 'react'

function SemButtons(props) {
	console.log(props)
	return (
		<div className='flex mx-2'>
			<button
				onClick={() => {
					console.log(props.sem)
					props.setSelectedSem(props.sem)
				}}
				className={`py-2 px-5 w-full max-w-md mx-auto  rounded-md shadow-md  hover:shadow-xl  focus:outline-none focus:shadow-outline  ${
					props.sSem === props.sem
						? 'bg-indigo-500 text-white border-0'
						: 'bg-white hover:bg-gray-50 hover:text-gray-900 border'
				}`}
			>
				{props.sem}
			</button>
		</div>
	)
}

export default SemButtons
