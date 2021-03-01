import React, { forwardRef } from 'react';
import { Avatar } from '@material-ui/core';
import ThumbsUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

import './Post.css';
import InputOption from './InputOption';

const Post = forwardRef(({ name, description, message, photoURL }, ref) => {
	return (
		<div ref={ref} className='post'>
			<div className='post__header'>
				<Avatar src={photoURL}>{name[0]}</Avatar>
				<div className='post__info'>
					<h2>{name}</h2>
					<p>{description}</p>
				</div>
			</div>

			<div className='post__body'>
				<p>{message}</p>
			</div>

			<div className='post__buttons'>
				<InputOption Icon={ThumbsUpOutlinedIcon} title='Like' color='grey' />
				<InputOption Icon={ChatOutlinedIcon} title='Comment' color='grey' />
				<InputOption Icon={ShareOutlinedIcon} title='Share' color='grey' />
				<InputOption Icon={SendOutlinedIcon} title='Send' color='grey' />
			</div>
		</div>
	);
});

export default Post;
