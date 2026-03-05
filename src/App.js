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
	const [userName] = useState("Shahroz Daniel");

	return (
		<HashRouter>
			<ScrollToTop />
			<Particles id="tsparticles" />
			<Nav />
			<Routes>
				{/* Home is full-width — no main-body wrapper */}
				<Route path='/' element={<Home user={userName} />} />

				{/* Inner pages keep the constrained layout */}
				<Route path='/work' element={<Work />} />
				<Route path='/aboutme' element={<AboutUs />} />
				<Route path='/contactme' element={<Contact />} />
			</Routes>
		</HashRouter>
	);
}

export default App;
