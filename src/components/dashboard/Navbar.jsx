import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext';

export const Navbar = () => {
	const { onLogOut } = useContext(AuthContext);
  return (
		<div className="navbar box">
			<Link to="/dashboard/home">Home</Link>
			<Link to="/dashboard/about">About</Link>
			<Link to="/dashboard/contacts">Contacts</Link>
			<button onClick={onLogOut}>LOGOUT</button>
		</div>
  );
}
