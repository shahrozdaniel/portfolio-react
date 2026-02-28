import React, { useState, useEffect } from 'react'

const Home = ({ user }) => {

	const quotes = [
		"Note to self: Drink more water.",
		"Sometimes the best way to start a day is to start it with a cup of coffee.",
		"Wild baboons are running naked.",
		"Think I'm gonna add a hobby soon.",
	];

	const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
		}, 60000);

		return () => clearInterval(interval);
	}, [quotes.length]);

	return (
		<div className='mt-5 home-content'>
			<h5 className="hi">Hi there, I'm</h5>
			<h1 className="name">{user}</h1>
			<h3 className="port">Welcome, do enjoy your stay.</h3>

			<div className="quote-section">
				<hr className="separator" />
				<p className="catch">"{quotes[currentQuoteIndex]}"</p>
			</div>

			<div className="bfd"></div>
		</div>
	)
}

export default Home