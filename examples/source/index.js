import './style.css'

import { h, render } from 'preact'
import App from './App'

// import App from "./components/app";
// import App from './TSApp'

import { initStore } from "./state";

initStore({
	count: 9
})

render(<App/>, document.getElementById('root'))
