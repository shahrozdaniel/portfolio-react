import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin } from 'lucide-react';

const Nav = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 50);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav className={`site-nav ${scrolled ? 'site-nav--scrolled' : ''}`}>
			<div className="site-nav__inner">
				<Link to="/" className="site-nav__logo">SD</Link>
				<div className="site-nav__links">
					<Link to="/work" className="site-nav__link">Work</Link>
					<Link to="/aboutme" className="site-nav__link">About Me</Link>
					<Link to="/contactme" className="site-nav__link">Contact</Link>
					<div className="site-nav__social">
						<a
							href="https://github.com/shahrozdaniel"
							target="_blank"
							rel="noopener noreferrer"
							className="site-nav__icon"
							title="GitHub"
						>
							<Github size={24} />
						</a>
						<a
							href="https://www.linkedin.com/in/shahroz-daniel-b8a651216"
							target="_blank"
							rel="noopener noreferrer"
							className="site-nav__icon"
							title="LinkedIn"
						>
							<Linkedin size={24} />
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Nav;