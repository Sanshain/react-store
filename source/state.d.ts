//@ts-check

// @ts-ignore
// import { useState } from 'react/hooks'

import type { StateUpdater } from 'preact/hooks'

declare let globaState: <S>(initialState: S | (() => S)) => [S, StateUpdater<S>];

declare let states: object;

/**
 * @param {string | number} key
 * @param {any} value
 */
export function setState(key: string, value: unknown): void;

// export const useStateStore = (us) => (key, initValue) => useStore(key, initValue, us)


/**
 * @param {any} _useState
 */
export function useStateStore(
	_useState: (<S>(initialState: S | (() => S)) => [S, StateUpdater<S>])
) : [unknown, StateUpdater<unknown>]


/**
 * @param {string} key
 * @param {any} init_value
 * @param {Function} uState
 */
export function useStore<T>(
	key: string, 
	init_value?: T | (() => T), 
	uState? : (<S>(initialState: S | (() => S)) => [S, StateUpdater<S>])
	) : [T, StateUpdater<T>]


/**
 * @param {{ [x: string]: any; count?: number; }} init_dict
 */
export function initStore(init_dict: object, _useState? : Function): void;