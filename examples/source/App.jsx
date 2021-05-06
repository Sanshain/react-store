import { h, Fragment } from 'preact'
import { useState } from 'preact/hooks'

import { styled, css, setup } from 'goober';

import { useStore, initStore } from "./state";
import Button from "./button";




setup(h);

const Title = styled("h1")`
  text-align: center;
  color: red;
`;

const BtnClassName = css`
  background-color: lightgray;
`;



const App = props => {

	const [message] = useState('State manager working example:')

	const [count, setCount] = useStore('count')

	return <>
		<header />
		<main class={BtnClassName}>
			<h1 class='title'>{message}</h1>
			<p>works w/o props transfers</p>
			<button onClick={(e) => setCount(count + 1)}>
				Plus ({count})
			</button>
		</main>
		<Button />				
	</>
}

export default App
