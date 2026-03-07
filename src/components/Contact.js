import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SendIcon from '@mui/icons-material/Send';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ResumePDF from '../projectImages/shahroz_resume_07_03_26.pdf';

const Contact = () => {
	const [mousePosition, setMousePosition] = useState({ x: -500, y: -500 });
	const [formData, setFormData] = useState({ name: '', email: '', message: '' });
	const [submitted, setSubmitted] = useState(false);

	useEffect(() => {
		const handleMouseMove = (e) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};
		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Open mailto with prefilled data
		const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
		const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
		window.location.href = `mailto:shahrozd3@gmail.com?subject=${subject}&body=${body}`;
		setSubmitted(true);
	};

	const socials = [
		{
			label: 'GitHub',
			href: 'https://github.com/shahrozdaniel',
			icon: <GitHubIcon fontSize="small" />,
		},
		{
			label: 'LinkedIn',
			href: 'https://www.linkedin.com/in/shahroz-daniel-b8a651216',
			icon: <LinkedInIcon fontSize="small" />,
		},
		{
			label: 'Instagram',
			href: 'https://www.instagram.com/dammit_daniel1',
			icon: <InstagramIcon fontSize="small" />,
		},
		{
			label: 'WhatsApp',
			href: 'tel:+917830070735',
			icon: <WhatsAppIcon fontSize="small" />,
		},
	];

	return (
		<div className="contact-page-wrapper">
			{/* Mouse-tracking gradient orb */}
			<div
				className="mouse-orb"
				style={{
					left: `${mousePosition.x}px`,
					top: `${mousePosition.y}px`,
				}}
			/>

			{/* Grid overlay */}
			<div className="home-grid-overlay" />

			{/* ── HERO ─────────────────────────────────────── */}
			<section className="contact-hero-section">
				<div className="hero-inner">
					<div className="hero-status-badge animate-fade-in">
						<span className="status-dot" />
						<span>Available for opportunities</span>
					</div>

					<div className="hero-headings">
						<h1 className="hero-name animate-slide-up" style={{ animationDelay: '0.1s' }}>
							Let's Talk
						</h1>
						<div className="hero-subtitle animate-slide-up" style={{ animationDelay: '0.2s' }}>
							<span>Get in Touch</span>
							<span className="subtitle-dot" />
							<span>Start a Conversation</span>
						</div>
					</div>

					<p className="hero-desc animate-slide-up" style={{ animationDelay: '0.3s' }}>
						Whether you have a project in mind, a question, or just want to say hello —
						my inbox is always open.
					</p>

					<div className="contact-hero-ctas animate-slide-up" style={{ animationDelay: '0.4s' }}>
						<a href="mailto:shahrozd3@gmail.com" className="btn-primary">
							<MailOutlineIcon fontSize="small" />
							<span>Send an Email</span>
						</a>
						<a
							href="https://www.linkedin.com/in/shahroz-daniel-b8a651216"
							target="_blank"
							rel="noreferrer"
							className="btn-secondary"
						>
							<LinkedInIcon fontSize="small" />
							<span>Connect on LinkedIn</span>
						</a>
						<a
							href={ResumePDF}
							download="Shahroz_Daniel_Resume.pdf"
							className="btn-secondary"
						>
							<FileDownloadIcon fontSize="small" />
							<span>Download Resume</span>
						</a>
					</div>
				</div>
			</section>

			{/* ── CONTACT FORM + INFO ───────────────────────── */}
			<section className="contact-body-section">
				<div className="section-inner contact-body-inner">

					{/* Left — Form */}
					<div className="contact-form-col">
						<h2 className="section-title" style={{ marginBottom: '12px' }}>Send a Message</h2>
						<p className="section-subtitle" style={{ marginBottom: '40px' }}>
							Fill out the form and I'll get back to you as soon as possible.
						</p>

						{submitted ? (
							<div className="contact-success">
								<span className="contact-success-icon">✓</span>
								<p>Your email client has been opened. Looking forward to hearing from you!</p>
							</div>
						) : (
							<form className="contact-form" onSubmit={handleSubmit}>
								<div className="contact-form-group">
									<label className="contact-label" htmlFor="contact-name">Name</label>
									<input
										id="contact-name"
										className="contact-input"
										type="text"
										name="name"
										placeholder="Your full name"
										value={formData.name}
										onChange={handleChange}
										required
									/>
								</div>

								<div className="contact-form-group">
									<label className="contact-label" htmlFor="contact-email">Email</label>
									<input
										id="contact-email"
										className="contact-input"
										type="email"
										name="email"
										placeholder="your@email.com"
										value={formData.email}
										onChange={handleChange}
										required
									/>
								</div>

								<div className="contact-form-group">
									<label className="contact-label" htmlFor="contact-message">Message</label>
									<textarea
										id="contact-message"
										className="contact-textarea"
										name="message"
										rows={6}
										placeholder="Tell me about your project or just say hi..."
										value={formData.message}
										onChange={handleChange}
										required
									/>
								</div>

								<button type="submit" className="btn-cta-primary contact-submit-btn">
									<SendIcon fontSize="small" />
									<span>Send Message</span>
								</button>
							</form>
						)}
					</div>

					{/* Right — Info */}
					<div className="contact-info-col">
						<div className="contact-info-card">
							<h3 className="contact-info-heading">Direct Contact</h3>
							<p className="contact-info-sub">Prefer a direct line? Here's how to reach me.</p>

							<div className="contact-info-items">
								<div className="contact-info-item">
									<span className="contact-info-label">Email</span>
									<a href="mailto:shahrozd3@gmail.com" className="contact-info-value contact-info-link">
										shahrozd3@gmail.com
									</a>
								</div>
								<div className="contact-info-item">
									<span className="contact-info-label">Location</span>
									<span className="contact-info-value">Bareilly, India</span>
								</div>
								<div className="contact-info-item">
									<span className="contact-info-label">Response Time</span>
									<span className="contact-info-value">Within 24 hours</span>
								</div>
								<div className="contact-info-item">
									<span className="contact-info-label">Resume</span>
									<a href={ResumePDF} download="Shahroz_Daniel_Resume.pdf" className="contact-info-value contact-info-link">
										Download PDF
									</a>
								</div>
							</div>

							<hr className="contact-info-divider" />

							<h4 className="contact-social-label">Find me on</h4>
							<div className="contact-social-row">
								{socials.map((s) => (
									<a
										key={s.label}
										href={s.href}
										target="_blank"
										rel="noreferrer"
										className="contact-social-pill"
										title={s.label}
									>
										{s.icon}
										<span>{s.label}</span>
									</a>
								))}
							</div>
						</div>

						{/* Availability card */}
						<div className="contact-availability-card">
							<div className="contact-avail-row">
								<span className="status-dot" style={{ width: 10, height: 10 }} />
								<strong>Open to Work</strong>
							</div>
							<p className="contact-avail-text">
								Currently available for freelance projects and full-time roles.
								Let's build something meaningful together.
							</p>
						</div>
					</div>

				</div>
			</section>

			{/* ── CTA / FOOTER ─────────────────────────────── */}
			<section className="contact-cta-section">
				<div className="section-inner contact-cta-inner">
					<h2 className="contact-cta-title">Ready to Start?</h2>
					<p className="contact-cta-desc">
						Great work begins with great conversations.
						Drop me a line and let's make something amazing.
					</p>

					<div className="contact-cta-buttons">
						<a href="mailto:shahrozd3@gmail.com" className="btn-cta-primary">
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

					{/* Inline footer */}
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

export default Contact;