import * as types from '../constants/ActionTypes'
import {pathTo} from '../utils'

const initialState = {
	pathTo: '',
	isAuth: '',
	massage: '',
	info: {
		user: '',
		password:'',
		passwordAgain: '',
		type: 'genuis'
	}
}

export default function (state = initialState, action) {
	const {
		type,
		payload
	} = action
	switch (type) {
		case types.REGISTER_REQUEST:
			return {
				...state,
				info: {
					...state.info
				}
			}
		case types.REGISTER_SUCCESS:
			return {
				...state,
				pathTo: pathTo(payload),
				isAuth: true,
				info: {
					...state.info,
					...payload,
				}
			}
		case types.REGISTER_FAILURE:
			return {
				...state,
				info: {
					...state.info
				},
				isAuth: false,
				massage: payload
			}
		case types.ERROR_MASSAGE:
			return {
				...state,
				info: {
					...state.info
				},
				isAuth: false,
				massage: payload
			}
		case types.REGISTER_CHANGE:
			const {
				key,
				value
			} = payload
			return {
				...state,
				info: {
					...state.info,
					[key]: value
				}
			}
		case types.LOGOUT:
			return {
				...state,
				isAuth: false,
				massage: payload
			}
		default:
			return state
	}
}