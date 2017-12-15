import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import {bindActionCreators} from 'redux'
import * as chatActions from '../../actions/chatActions'
import UserCard from '../common/UserCard'
import '../../App.css';

@connect(
	state => (
		{list: state.chatUsers.list || []}),
	dispatch => (
		{chatActions: bindActionCreators(chatActions, dispatch)})
)
export default class Genuis extends Component {
	constructor() {
		super()
	}
	componentDidMount() {
		this.props.chatActions.fetchUsers('leader')
	}
	render() {
		const {list} = this.props
		return (
			<UserCard list={list} />
		);
	}
}