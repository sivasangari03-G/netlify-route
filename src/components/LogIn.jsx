import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

export const LogIn = () => {
  const {onLogIn } = useContext(AuthContext);
  return (
		<div>
			LogIn
			<button onClick={onLogIn}>LOGIN</button>
		</div>
  );
}
