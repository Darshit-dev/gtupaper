/** @format */

import React from 'react'

function SelectBranchButton({ branch, setSelectedBranch, sBranch }) {
	return (
		<div className='mx-2 mb-2'>
			<button
				onClick={() => {
					console.log(branch)
					setSelectedBranch(branch)
				}}
				className={`py-2 border px-5 w-full max-w-md mx-auto  rounded-3xl shadow-md  hover:shadow-xl  focus:outline-none focus:shadow-outline ${
					sBranch === branch
						? 'bg-indigo-500 text-white border-0'
						: 'bg-white hover:bg-gray-50 hover:text-gray-900'
				}`}
			>
				<div>{branch}</div>
			</button>
		</div>
	)
}

export default SelectBranchButton
