import axios from 'axios'
import * as types from '../constants/ActionTypes'
import {Toast} from 'antd-mobile'

//错误提示
function errorMessage(message) {
	return {
		type: types.ERROR_MASSAGE,
		payload: message
	}
}
function info(error) {
	Toast.info(error, 1);
}
//获取用户信息
export const fetchUser = _ => dispatch => {
	dispatch({
		type: types.LOGIN_REQUEST
	})
	return axios({
		method: 'GET',
		url: '/data',
	}).then(res => {
		dispatch({
			type: types.LOGIN_SUCCESS,
			payload: res.data
		})
	}).catch(error => {
		dispatch({
			type: types.LOGIN_REQUEST_FAILURE,
			payload: error
		})
	})
}
//提交注册信息
export const postRegister = user => dispatch => {
	const {
		name,
		password,
		passwordAgain,
		type
	} = user
	const checkInfo = '用户名密码必须输入'
	const checkPassword = '两次密码输入不一致'
	//校验注册信息是否为空
	if (!name || !password || !passwordAgain || !type) {
		dispatch(errorMessage(checkInfo))
		info(checkInfo)
		return
	}
	if (password !== passwordAgain ) {
		dispatch(errorMessage(checkPassword))
		info(checkPassword)
		return
	}
	dispatch({
		type: types.REGISTER_REQUEST
	})
	return axios({
		method: 'POST',
		url: '/user/register',
		data: {
			name: name,
			password: password,
			passwordAgain: passwordAgain,
			type: type
		}
	}).then(res => {
		console.log('postRegister ==========> ', res)
		dispatch({
			type: types.LOGIN_SUCCESS,
			payload: res.data
		})
	}).catch(error => {
		dispatch(errorMessage(error))
	})
}
//暂存注册信息
export const registerChange = (key, value) => dispatch => {
	dispatch({
		type: types.REGISTER_CHANGE,
		payload: {
			key: key,
			value: value
		}
	})
}