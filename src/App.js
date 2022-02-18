import { useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { AuthContext } from "./contexts/AuthContext";
import { Dashboard } from "./components/dashboard/Dashboard";
import { LogIn } from "./components/LogIn";

function App() {
	const { isLoggedIn } = useContext(AuthContext);
	const navigate = useNavigate();
	useEffect(() => {
		if (isLoggedIn) {
			navigate("/dashboard");
		} else {
			navigate("/LogIn");
		}
	}, [isLoggedIn]);
	return (
		<div className="App box">
			<Routes>
				{isLoggedIn ? (
					<Route path="/dashboard/*" element={<Dashboard />}></Route>
				) : (
					<Route path="/LogIn" element={<LogIn />}></Route>
				)}
				{/* <Route
					path="*"
					element={
						<Navigate to={isLoggedIn ? "/dashboard" : "/LogIn"} />
					}
				></Route> */}
			</Routes>
		</div>
	);
}

export default App;
