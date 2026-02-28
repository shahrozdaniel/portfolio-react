import React, { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './css/style.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import Work from './components/Work';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Particles from './components/Particles';
import ScrollToTop from './components/ScrollToTop';

function App() {

	// const userName = "Shahroz Daniel";
	const [userName, setUsername] = useState("Shahroz Daniel");
	// const handleUser = (e) => {
	// 	setUsername(e.target.value)
	// }

	return (
		<HashRouter>
			<ScrollToTop />
			<Particles id="tsparticles" />
			<div className="">
				{/* <input type="text" onChange={handleUser} /> */}
				<Nav />
				<div className="main-body">
					<Routes>
						<Route exact path='/' element={<Home user={userName} />} />
						<Route exact path='/work' element={<Work />} />
						<Route exact path='/aboutme' element={<AboutUs />} />
						<Route exact path='/contactme' element={<Contact />} />
					</Routes>
					<Footer />
				</div>
			</div>
		</HashRouter >
	);
}

export default App;
