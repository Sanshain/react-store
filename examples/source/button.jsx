//@ts-check

import { h, Fragment } from 'preact'
import { useState } from 'preact/hooks'

import { useStateStore } from "../../source/state";


const Button = props => {

	const [text] = useState('minus')

	const useStore = useStateStore(useState);
	
	const [count, setCount] = useStore('count')

	// const { dispatch, count } = useStoreon('count')

	return <>
		<hr/>
		<div>
			<button onClick={e => setCount(count - 1)}>{text} ({count})</button>
		</div>
	</>
}

export default Button