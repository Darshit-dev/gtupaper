/** @format */

/** @format */

import React from 'react'
import SelectBSub from './SelectB'
import SelectS from './SelectS'

function SearchBar({ subSelected, sState }) {
	return (
		<div className='w-full mt-5 flex items-center justify-center'>
			<div className=' pl-5 flex flex-row max-w-3xl bg-white w-full py-2  font-bold shadow-md rounded-3xl mx-5 '>
				<div className='flex justify-center items-center'>
					<svg
						className=' mr-4 h-8 w-8 text-red-500'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						stroke-width='2'
						stroke='currentColor'
						fill='none'
						stroke-linecap='round'
						stroke-linejoin='round'
					>
						<path stroke='none' d='M0 0h24v24H0z' />
						<circle cx='10' cy='10' r='7' />
						<line x1='21' y1='21' x2='15' y2='15' />
					</svg>
				</div>
				<div className='flex justify-center items-center'>
					<input
						className='outline-none flex-1'
						id='Search'
						type='text'
						placeholder='Search paper'
					></input>
				</div>

				<div className='flex-1'>
					<SelectBSub subState={subSelected} />
				</div>
				<div className='flex-1'>
					<SelectS semState={sState} />
				</div>
			</div>
		</div>
	)
}

export default SearchBar
