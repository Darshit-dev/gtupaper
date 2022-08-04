/** @format */

import React from 'react'
import { useNavigate } from 'react-router-dom'
import SelectSem from './../SelectSemComp/index'
import SelectBranch from '../SelectBranchcomp/index'

function ActionSelect({ selectedSem, selectedBranch }) {
	const navigate = useNavigate()
	return (
		<div className='my-8'>
			<button
				className='bg-indigo-500 px-10 rounded-md py-2 hover:bg-indigo-600 hover:text-white text-white'
				onClick={() => {
					navigate(`/home`, {
						state: {
							value: { sem: selectedSem, branch: selectedBranch },
						},
					})
				}}
			>
				NEXT
			</button>
		</div>
	)
}

export default ActionSelect
