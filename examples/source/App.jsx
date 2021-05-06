import { h, Fragment } from 'preact'
import { useState } from 'preact/hooks'

import { styled, css, setup } from 'goober';

import { useStore, initStore } from "./store/state";
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

	const [message] = useState('Preact App')

	const [count, setCount] = useStore('count')

	// const { dispatch, count } = useStoreon('count')


	return <>
		<header />
		<main class={BtnClassName}>
			<h1 class='title'>{message}</h1>
			<button onClick={(e) => setCount(count + 1)}>
				{count}
			</button>
		</main>
		<Button />		
		<Title>789</Title>
	</>
}

export default App
