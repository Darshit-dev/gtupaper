/** @format */

import React, { useState } from 'react'
import { ALLSEMS } from '../../Constants'
import SemButtons from './SemButtons'

function SelectSem({ setSelectedSem, selectedSem }) {
	return (
		<div className=' flex flex-col items-center justify-center'>
			<h2 className='m-8 text-lg'>Select semester</h2>
			<div className=' flex flex-row  flex-wrap justify-center items-center'>
				{ALLSEMS.map((item, index) => (
					<SemButtons
						sem={item.name}
						setSelectedSem={setSelectedSem}
						sSem={selectedSem}
					/>
				))}
			</div>
		</div>
	)
}

export default SelectSem
