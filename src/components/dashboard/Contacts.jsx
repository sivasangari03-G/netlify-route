import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export const Contacts = () => {
	const [basePath, setBasePath] = useState("");
	const location = useLocation();
	console.log(location);

	useEffect(() => {
		let parts = location.pathname.split("/");
		let base = "/" + parts[1] + "/" + parts[2];
		setBasePath(base)
	},[location])
	return (
		<div className="box">
			contacts
			<div style={{ display: "flex" }}>
				<Link to={`${basePath}/1`}>contact 1</Link>
				&nbsp;
				<Link to={`${basePath}/2`}>contact 2</Link>
				&nbsp; &nbsp; &nbsp;
				<Link to={`${basePath}/new`}>created contact</Link>
			</div>
			<Outlet />
		</div>
	);
};
