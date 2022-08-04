/** @format */

import { Routes, Route, Link } from 'react-router-dom'
import Home from './page/Home'
import Select from './page/Select'
import { useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react'

const App = () => {
	const navigate = useNavigate()

	useEffect(() => {
		navigate('/select')
	}, [])

	return (
		<div className='w-screen h-screen'>
			<Routes>
				<Route path='home' element={<Home />} />
				<Route path='select' element={<Select />} />
			</Routes>
		</div>
	)
}

export default App
