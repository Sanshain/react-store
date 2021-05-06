import { h, Fragment } from 'preact'
import { useState } from 'preact/hooks'

import { useStore } from "./store/state";


const Button = props => {

	const [text] = useState('minus')
	
	const [count, setCount] = useStore('count', 0)

	// const { dispatch, count } = useStoreon('count')


	return <>
		<hr/>
		<div>
			<button onClick={e => setCount(count - 1)}>{text} ({count})</button>
		</div>
	</>
}

export default Button