import React, { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const onLogIn = () => {
		console.log("user logged in");
		setIsLoggedIn(true);
	};
	const onLogOut = () => {
		console.log("user logged out");
		setIsLoggedIn(false);
	};
	return (
		<AuthContext.Provider value={{ isLoggedIn, onLogIn, onLogOut }}>
			{children}
		</AuthContext.Provider>
	);
};
