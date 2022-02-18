import { Outlet, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Contacts } from "./Contacts";
import { Contact } from "./Contact";
import { NewContact } from "./NewContact";
import { Navbar } from "./Navbar";

function Dashboard() {
	return (
		<div className="App box">
			<Navbar />
			<Routes>
				<Route path="home" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="contacts" element={<Contacts />}>
					<Route index element={<NewContact />} />
					<Route path=":userId" element={<Contact />} />
					<Route path="new" element={<NewContact />} />
				</Route>
			</Routes>
		</div>
	);
}

export { Dashboard };
