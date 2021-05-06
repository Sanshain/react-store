
// //@ts-check

import { useState } from 'preact/hooks'


let states = {};

export function setState(key, value){

	for (const hook of states[key].hooks) {
		
		// console.log(hook);
		hook(value)
	}
}

export function useStore(key, init_value){

	const [value, setValue] = useState(init_value !== undefined ? init_value : (states[key] || {}).initState)
	if (key in states){
		
		!~states[key].hooks.indexOf(setValue) && states[key].hooks.push(setValue);
	}
	else states[key] =  {
		hooks: [setValue],
		initState: init_value
	}
	
	return [value, setState.bind(null, key)]
}

export function initStore(init_dict){

	for (const key in init_dict) {
		states[key] = {
			hooks: [],
			initState: init_dict[key]			
		}
	}
}

