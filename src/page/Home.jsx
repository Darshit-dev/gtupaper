/** @format */

import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import CardView from '../component/ForHome/CardView'
import SearchBar from '../component/ForHome/SearchBar'
import TopBar from '../component/ForHome/TopBar'
import { useEffect } from 'react'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { db } from '../FireBase'
import { useState } from 'react'
function Home() {
	const location = useLocation()
	const [papers, setpapers] = useState([])
	const selectedBranch = location.state.value.branch
	const [selectedSem, setSelectedSem] = useState({
		name: location.state.value.sem,
	})
	const [selectedSubject, setSelectedSubject] = useState({})

	useEffect(() => {
		async function getData() {
			if (selectedBranch.name === 'All') {
				const q = query(collection(db, 'papers'))
			} else {
				const q = query(
					collection(db, 'papers'),
					where('branch', '==', selectedBranch.name)
				)
			}

			const querySnapshot = await getDocs(q)
			let arr = []
			querySnapshot.forEach((doc) => {
				arr.push(doc.data())
			})
			console.log(arr)
			setpapers(arr)
		}
		getData()
		console.log(selectedBranch, '🍎')
	}, [selectedBranch])

	return (
		<div className='h-screen flex flex-col w-screen bg-gray-100'>
			<TopBar />
			<SearchBar
				selectedBranch={selectedBranch}
				subSelected={[selectedSubject, setSelectedSubject]}
				sState={[selectedSem, setSelectedSem]}
			/>
			<CardView pdata={papers} />
		</div>
	)
}

export default Home
