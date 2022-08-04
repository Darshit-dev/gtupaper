/** @format */

import React, { useState } from 'react'
import SelectSem from '../component/SelectSemComp'
import ActionSelect from './../component/ActionButton/index'
import SelectBranch from '../component/SelectBranchcomp'

function Select() {
	const [selectedBranch, setSelectedBranch] = useState('')
	const [selectedSem, setSelectedSem] = useState('')
	return (
		<div className='h-screen items-center flex flex-col justify-center'>
			<h3 className='font-bold font text-5xl md:text-7xl '>GTU PAPER</h3>
			<SelectSem setSelectedSem={setSelectedSem} selectedSem={selectedSem} />
			<SelectBranch
				setSelectedBranch={setSelectedBranch}
				selectedBranch={selectedBranch}
			/>
			<ActionSelect selectedBranch={selectedBranch} selectedSem={selectedSem} />
		</div>
	)
}

export default Select
