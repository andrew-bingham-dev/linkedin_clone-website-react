import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import './Login.css';

function Login() {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [profilePic, setProfilePic] = useState('');
	const dispatch = useDispatch();

	const loginToApp = e => {
		e.preventDefault();
		auth
			.signInWithEmailAndPassword(email, password)
			.then(userAuth => {
				dispatch(
					login({
						email: userAuth.user.email,
						uid: userAuth.user.uid,
						displayName: userAuth.user.displayName,
						profilePic: userAuth.user.photoURL,
					})
				);
			})
			.catch(error => alert(error));
	};

	const register = () => {
		if (!name) {
			return alert('Please enter a full name');
		}

		auth
			.createUserWithEmailAndPassword(email, password)
			.then(userAuth => {
				userAuth.user
					.updateProfile({
						displayName: name,
						photoURL: profilePic,
					})
					.then(() => {
						dispatch(
							login({
								email: userAuth.user.email,
								uid: userAuth.user.uid,
								displayName: name,
								photoURL: profilePic,
							})
						);
					});
			})
			.catch(error => alert(error));
	};

	return (
		<div className='login'>
			<img src='https://www.cbronline.com/wp-content/uploads/2016/06/linkedin.jpg' alt='' />

			<form>
				<input
					value={name}
					onChange={e => setName(e.target.value)}
					placeholder='Full name (required if registering)'
					type='text'
				/>
				<input
					value={profilePic}
					onChange={e => setProfilePic(e.target.value)}
					placeholder='Profile picutre URL'
					type='text'
				/>
				<input
					value={email}
					onChange={e => setEmail(e.target.value)}
					placeholder='Email'
					type='email'
				/>
				<input
					value={password}
					onChange={e => setPassword(e.target.value)}
					placeholder='Password'
					type='password'
				/>
				<button type='submit' onClick={loginToApp}>
					Sign In
				</button>
			</form>
			<p>
				Not a member?{' '}
				<span onClick={register} className='login__register'>
					Register Now
				</span>
			</p>
		</div>
	);
}

export default Login;
