import React from 'react';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Nav = () => {
	return (
		<header className="sticky-header">
			<div className="header-container">
				<nav className="header-nav">
					<Link to={"/"} className="header-link">Home</Link>
					<Link to={"/work"} className="header-link">Work</Link>
					<Link to={"/aboutme"} className="header-link">About Me</Link>
					<Link to={"/contactme"} className="header-link">Contact</Link>
				</nav>
				<div className="header-social">
					<a href="https://github.com/shahrozdaniel" target="_blank" rel="noreferrer" title="GitHub">
						<GitHubIcon />
					</a>
					{/* <a href="https://www.instagram.com/dammit_daniel1" target="_blank" rel="noreferrer" title="Instagram">
						<InstagramIcon />
					</a> */}
					<a href="https://www.linkedin.com/in/shahroz-daniel-b8a651216" target="_blank" rel="noreferrer" title="LinkedIn">
						<LinkedInIcon />
					</a>
				</div>
			</div>
		</header>
	);
}

export default Nav;