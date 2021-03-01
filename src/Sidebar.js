import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './Sidebar.css';

function Sidebar() {
	const user = useSelector(selectUser);
	const recentItem = topic => (
		<div className='sidebar__recentItem'>
			<span className='sidebar__hash'>#</span>
			<p>{topic}</p>
		</div>
	);

	return (
		<div className='sidebar'>
			<div className='sidebar__top'>
				<img
					src='https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
					alt=''
				/>
				<Avatar src={user.photoURL} className='sidebar__avatar'>
					{user.displayName[0]}
				</Avatar>
				<h2>{user.displayName}</h2>
				<h4>{user.email}</h4>
			</div>

			<div className='sidebar__stats'>
				<div className='sidebar__stat'>
					<p>Who viewed you</p>
					<p className='sidebar__statNumber'>2,500</p>
				</div>
				<div className='sidebar__stat'>
					<p>Who followed you</p>
					<p className='sidebar__statNumber'>3,456</p>
				</div>
			</div>

			<div className='sidebar__bottom'>
				<p>Recent</p>
				{recentItem('ReactJS')}
				{recentItem('Development')}
				{recentItem('Full Stack')}
				{recentItem('Vue')}
				{recentItem('Svelte')}
				{recentItem('NodeJS')}
			</div>
		</div>
	);
}

export default Sidebar;
