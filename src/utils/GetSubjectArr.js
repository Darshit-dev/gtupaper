/** @format */

export default function GetSubjectArr(branch) {
	let subArr = []
	switch (branch) {
		case 'IT':
			subArr = [{ name: 'BEE' }, { name: 'PPS' }, { name: 'CSE' }]
			break
		case 'MECH':
			subArr = [{ name: 'ZZZ' }, { name: 'DDD' }, { name: 'GGG' }]
			break
		default:
			subArr = [{ name: 'GGG' }, { name: 'VVV' }, { name: 'BBB' }]
			break
	}
	return subArr
}
