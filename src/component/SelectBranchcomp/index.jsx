/** @format */

import React, { useState } from 'react'
import SelectBranchButton from './button'

export default function SelectBranch({ selectedBranch, setSelectedBranch }) {
	return (
		<>
			<h2 className='m-8 text-lg'>Select Branch</h2>
			<div className='flex flex-row  flex-wrap justify-center items-center'>
				<SelectBranchButton
					branch='ECE'
					setSelectedBranch={setSelectedBranch}
					sBranch={selectedBranch}
				/>
				<SelectBranchButton
					branch='EEE'
					setSelectedBranch={setSelectedBranch}
					sBranch={selectedBranch}
				/>
				<SelectBranchButton
					branch='MECH'
					setSelectedBranch={setSelectedBranch}
					sBranch={selectedBranch}
				/>
				<SelectBranchButton
					branch='CIVIL'
					setSelectedBranch={setSelectedBranch}
					sBranch={selectedBranch}
				/>
				<SelectBranchButton
					branch='IT'
					setSelectedBranch={setSelectedBranch}
					sBranch={selectedBranch}
				/>
			</div>
		</>
	)
}
