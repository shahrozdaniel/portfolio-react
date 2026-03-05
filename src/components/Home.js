import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Home = ({ user }) => {

	const quotes = [
		"Note to self: Drink more water.",
		"Wild baboons are running naked.",
		"Think I'm gonna add a hobby soon.",
	];

	const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
	const [mousePosition, setMousePosition] = useState({ x: -500, y: -500 });
	const heroRef = useRef(null);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
		}, 5000);
		return () => clearInterval(interval);
	}, [quotes.length]);

	useEffect(() => {
		const handleMouseMove = (e) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};
		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);

	const featuredWork = [
		{
			title: "E-Commerce Platform",
			description: "Full-stack solution with React & Node.js",
			tags: ["React", "Node.js", "MongoDB"],
			link: "/#/work"
		},
		{
			title: "Analytics Dashboard",
			description: "Real-time data visualization",
			tags: ["Vue.js", "D3.js", "Firebase"],
			link: "/#/work"
		},
		{
			title: "Mobile Banking App",
			description: "Secure fintech solution",
			tags: ["React Native", "TypeScript"],
			link: "/#/work"
		}
	];

	const clients = [
		"SwapDigit",
		"Webtis Software Solutions",
		"Aycom Business Solutions Pvt. Ltd.",
		"Prolitus Technologies Pvt. Ltd.",
		"Bellpepper Ptd. Ltd.",
	];

	const skills = [
		// Core Stack
		"Laravel", "Filament", "Core PHP", "Lumen", "CodeIgniter",
		// Frontend
		"React.js", "Next.js", "JavaScript", "Tailwind CSS", "Bootstrap", "jQuery",
		// Databases & State
		"MySQL", "MongoDB", "Redis",
		// DevOps
		"Docker", "Git", "CI/CD Pipelines", "AWS (S3, CloudFront, IAM)",
		// Integrations & Ops
		"REST API Development", "META APIs", "Pusher", "Payment Gateway Integration",
		// Automation & Others
		"n8n", "Automation", "WordPress"
	];

	return (
		<div className="home-wrapper">
			{/* Mouse-tracking gradient orb */}
			<div
				className="mouse-orb"
				style={{
					left: `${mousePosition.x}px`,
					top: `${mousePosition.y}px`,
				}}
			/>

			{/* Subtle grid pattern overlay */}
			<div className="home-grid-overlay" />

			{/* ── HERO ────────────────────────────────────────────── */}
			<section className="hero-section" ref={heroRef}>
				<div className="hero-inner">

					{/* Status badge */}
					<div className="hero-status-badge animate-fade-in">
						<span className="status-dot" />
						<span>Open to work</span>
					</div>

					{/* Main heading */}
					<div className="hero-headings">
						<h1 className="hero-name animate-slide-up" style={{ animationDelay: '0.1s' }}>
							{user}
						</h1>
						<div className="hero-subtitle animate-slide-up" style={{ animationDelay: '0.2s' }}>
							<span>Web Developer</span>
							<span className="subtitle-dot" />
							<span>Digital Craftsman</span>
						</div>
					</div>

					{/* Value proposition */}
					<p className="hero-desc animate-slide-up" style={{ animationDelay: '0.3s' }}>
						Crafting exceptional digital experiences through clean code and thoughtful design.
						Specialized in modern web technologies and user-centric solutions.
					</p>

					{/* CTA Buttons */}
					<div className="hero-ctas animate-slide-up" style={{ animationDelay: '0.4s' }}>
						<Link to="/work" className="btn-primary">
							<span>View My Work</span>
							<ArrowForwardIcon fontSize="small" className="btn-arrow" />
						</Link>
						<Link to="/contactme" className="btn-secondary">
							<MailOutlineIcon fontSize="small" />
							<span>Get in Touch</span>
						</Link>
					</div>

					{/* Stats */}
					<div className="stats-row animate-slide-up" style={{ animationDelay: '0.5s' }}>
						<div className="stat-item">
							<div className="stat-number">4+</div>
							<div className="stat-label">Years Experience</div>
						</div>
						<div className="stat-item">
							<div className="stat-number">8+</div>
							<div className="stat-label">Projects Delivered</div>
						</div>
						<div className="stat-item">
							<div className="stat-number">6+</div>
							<div className="stat-label">Happy Clients</div>
						</div>
					</div>
				</div>
			</section>

			{/* ── FEATURED WORK ───────────────────────────────────── */}
			<section className="featured-work-section">
				<div className="section-inner">
					<div className="section-header">
						<h2 className="section-title">Featured Work</h2>
						<p className="section-subtitle">Selected projects that showcase my expertise</p>
					</div>

					<div className="work-grid">
						{featuredWork.map((project, index) => (
							<a
								key={index}
								href={project.link}
								className="work-card"
							>
								<div className="work-card-image">
									<div className="work-card-image-overlay" />
								</div>
								<h3 className="work-card-title">{project.title}</h3>
								<p className="work-card-desc">{project.description}</p>
								<div className="work-card-tags">
									{project.tags.map((tag, i) => (
										<span key={i} className="tag-pill">{tag}</span>
									))}
								</div>
								<div className="work-card-link">
									<span>View Project</span>
									<OpenInNewIcon sx={{ fontSize: 14 }} />
								</div>
							</a>
						))}
					</div>

					<div className="view-all-row">
						<Link to="/work" className="view-all-link">
							<span>View All Projects</span>
							<ArrowForwardIcon fontSize="small" />
						</Link>
					</div>
				</div>
			</section>

			{/* ── ABOUT ───────────────────────────────────────────── */}
			<section className="about-home-section">
				<div className="section-inner">
					<h2 className="section-title">About Me</h2>
					<div className="about-grid">
						<div className="about-paragraphs">
							<p>
								Hello there. I'm a web developer based in India with around four years of
								experience building scalable web applications and backend systems.
							</p>
							<p>
								I specialize in PHP and Laravel, developing APIs, modular architectures,
								and data-driven applications with a focus on clean, maintainable code.
							</p>
							<p>
								I have experience integrating payment gateways, third-party APIs, and
								building production systems for international clients.
							</p>
						</div>

						<div className="skills-block">
							<h4 className="skills-label">Technical Skills</h4>
							<div className="skills-grid">
								{skills.map((skill, i) => (
									<span key={i} className="skill-pill">{skill}</span>
								))}
							</div>
						</div>
					</div>

					<hr />

					{/* 
						<div className="about-photo-col">
							<div className="about-photo-placeholder">
								<div className="about-photo-tint" />
								<div className="initials-overlay">SD</div>
							</div>
							<div className="about-glow" />
						</div> 
						*/}
				</div>
			</section>

			{/* ── CLIENTS ─────────────────────────────────────────── */}
			<section className="clients-section">
				<div className="section-inner marquee-container">
					<h4 className="clients-label">Trusted By</h4>
					<div className="clients-marquee">
						<div className="clients-track">
							{[...clients, ...clients].map((client, i) => (
								<div key={i} className="client-name">{client}</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* ── CONTACT CTA ─────────────────────────────────────── */}
			<section className="contact-cta-section">
				<div className="section-inner contact-cta-inner">
					<h2 className="contact-cta-title">Let's Create Something Great</h2>
					<p className="contact-cta-desc">
						Have a project in mind? I'd love to hear about it.
						Let's discuss how we can work together.
					</p>

					{/* Quote */}
					<p className="contact-cta-quote">"{quotes[currentQuoteIndex]}"</p>

					<div className="contact-cta-buttons">
						<a
							href="mailto:hello@shahrozdaniel.com"
							className="btn-cta-primary"
						>
							<MailOutlineIcon fontSize="small" />
							<span>Send Email</span>
						</a>
						<a
							href="https://www.linkedin.com/in/shahroz-daniel-b8a651216"
							target="_blank"
							rel="noreferrer"
							className="btn-cta-ghost"
						>
							<LinkedInIcon fontSize="small" />
							<span>Connect on LinkedIn</span>
						</a>
					</div>

					{/* Inline footer — matches ref */}
					<div className="cta-footer">
						<p>© 2023 Shahroz Daniel. All rights reserved.</p>
						<div className="cta-footer-links">
							<Link to="/work" className="cta-footer-link">Work</Link>
							<Link to="/aboutme" className="cta-footer-link">About</Link>
							<Link to="/contactme" className="cta-footer-link">Contact</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;