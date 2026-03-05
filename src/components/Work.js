import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Work = () => {
	const [mousePosition, setMousePosition] = useState({ x: -500, y: -500 });
	const [activeFilter, setActiveFilter] = useState('All');
	const [openIndex, setOpenIndex] = useState(null);

	useEffect(() => {
		const handleMouseMove = (e) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};
		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);

	const filters = ['All', 'SaaS Platform', 'CRM', 'E-Commerce', 'Web', 'Marketing'];

	const projects = [
		// ── Private / Internal platforms ──────────────────────
		{
			name: 'Aycent CRM Platform',
			category: 'CRM',
			type: 'private',
			tech: ['Laravel 8', 'Core PHP', 'React.js', 'MySQL', 'Pusher', 'REST APIs'],
			desc: 'A unified business-management platform covering Chat, Ticketing, CRM, Automated Calling with recording, missed-call reporting, and call forwarding — serving telecom & marketing clients globally.',
			highlights: [
				'Multi-tenant SaaS architecture (Laravel 8)',
				'Deep integrations: META, TikTok, Telegram, YouTube, LinkedIn',
				'Advanced automation workflows built with n8n',
				'Payment gateway webhooks (Stripe, Razorpay, GPay)',
			],
			publicUrl: 'https://in.aycent.com/',
			publicLabel: 'in.aycent.com',
		},
		{
			name: 'Coodle Daycare Platform',
			category: 'SaaS Platform',
			type: 'private',
			tech: ['Next.js', 'Laravel', 'MySQL'],
			desc: 'Full-featured daycare and child-care management platform with intuitive UX — managing attendance, billing, parent communication, and staff scheduling.',
			highlights: [
				'Built at Prolitus Technologies',
				'Complete daycare workflow from enrolment to billing',
				'Parent-facing portal with real-time updates',
			],
			publicUrl: 'https://cooddle.com/',
			publicLabel: 'cooddle.com',
		},
		{
			name: 'Ashviro Platform',
			category: 'SaaS Platform',
			type: 'private',
			tech: ['Laravel', 'React.js', 'MySQL', 'Docker'],
			desc: 'Enterprise-grade internal business system with sophisticated backend architecture built for international clients through Bellpepper Ptd. Ltd.',
			highlights: [
				'End-to-end infrastructure oversight (servers, DB, CI/CD)',
				'Led cross-functional team across mobile, frontend, backend',
			],
			publicUrl: 'https://www.ashviro.com/',
			publicLabel: 'ashviro.com',
		},
		{
			name: 'VMS — Visitor Management System',
			category: 'SaaS Platform',
			type: 'private',
			tech: ['Laravel', 'MySQL', 'REST API'],
			desc: 'Commercial visitor-management software built for enterprise clients, handling visitor registration, authentication, host notifications, and reporting.',
			highlights: [
				'Built full backend architecture from scratch',
				'Real-time host notifications and visit logs',
			],
			publicUrl: null,
			publicLabel: null,
		},

		// ── Public / Publicly accessible ─────────────────────
		{
			name: 'Recruitment Platform — BellpepperAI',
			category: 'SaaS Platform',
			type: 'public',
			tech: ['Laravel', 'React.js', 'MySQL'],
			desc: 'AI-assisted recruitment and employment agency platform currently under active development. Full backend architecture designed and delivered by me.',
			highlights: [
				'Built for a Singapore-based employment agency',
				'Candidate tracking, job posting, and workflow automation',
			],
			publicUrl: 'https://bellpepperai.com/',
			publicLabel: 'bellpepperai.com',
		},
		{
			name: 'DBSL',
			category: 'Web',
			type: 'public',
			tech: ['WordPress', 'PHP'],
			desc: 'Professional corporate website for a UK-based client with custom design and tailored content management.',
			highlights: [
				'Custom WordPress theme development',
				'SEO-optimised content structure',
			],
			publicUrl: 'https://dbsl-online.co.uk/',
			publicLabel: 'dbsl-online.co.uk',
		},
		{
			name: 'Prolitus Technologies',
			category: 'Web',
			type: 'public',
			tech: ['WordPress', 'PHP', 'jQuery'],
			desc: 'Corporate site for an IT services firm delivering custom web and mobile applications. Maintained and enhanced per client specifications.',
			highlights: [
				'Ongoing maintenance and feature enhancements',
				'Performance and SEO improvements',
			],
			publicUrl: 'https://www.prolitus.com/',
			publicLabel: 'prolitus.com',
		},
		{
			name: 'Horsmen',
			category: 'Marketing',
			type: 'public',
			tech: ['Laravel', 'PHP', 'MySQL'],
			desc: 'E-commerce and brand site built with a focus on clean design and seamless shopping experience.',
			highlights: [
				'Full cart-to-dispatch e-store functionality',
				'Payment gateway integration',
			],
			publicUrl: 'https://horsmen.com/',
			publicLabel: 'horsmen.com',
		},
	];

	const filtered =
		activeFilter === 'All'
			? projects
			: projects.filter((p) => p.category === activeFilter);

	const toggleOpen = (i) => setOpenIndex(openIndex === i ? null : i);

	return (
		<div className="home-wrapper">
			{/* Mouse-tracking gradient orb */}
			<div
				className="mouse-orb"
				style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
			/>

			{/* Grid overlay */}
			<div className="home-grid-overlay" />

			{/* ── HERO ── */}
			<section className="about-hero-section">
				<div className="about-hero-inner">
					{/* Badge */}
					<div className="hero-status-badge animate-fade-in">
						<span className="status-dot" />
						<span>Portfolio of Work</span>
					</div>

					<h1
						className="about-hero-name animate-slide-up"
						style={{ animationDelay: '0.1s' }}
					>
						My Work
					</h1>

					<div
						className="about-hero-meta animate-slide-up"
						style={{ animationDelay: '0.2s' }}
					>
						<span>Platforms</span>
						<span className="subtitle-dot" />
						<span>Products</span>
						<span className="subtitle-dot" />
						<span>Websites</span>
					</div>

					<p
						className="about-hero-desc animate-slide-up"
						style={{ animationDelay: '0.3s' }}
					>
						From enterprise SaaS platforms to public-facing products, here's a
						selection of projects I've designed, built, and shipped across{' '}
						<strong>4+ years</strong> of professional development.
					</p>

					{/* Stats */}
					<div
						className="stats-row animate-slide-up"
						style={{ animationDelay: '0.4s' }}
					>
						<div className="stat-item">
							<div className="stat-number">9+</div>
							<div className="stat-label">Projects Delivered</div>
						</div>
						<div className="stat-item">
							<div className="stat-number">5</div>
							<div className="stat-label">Companies</div>
						</div>
						<div className="stat-item">
							<div className="stat-number">3</div>
							<div className="stat-label">Countries Served</div>
						</div>
					</div>
				</div>
			</section>

			{/* ── PROJECTS SECTION (notice + tabs + accordion) ── */}
			<section className="about-projects-section work-unified-section">
				<div className="section-inner">

					{/* Notice banner */}
					<div className="work-notice-box animate-slide-up" style={{ animationDelay: '0.5s' }}>
						<InfoOutlinedIcon style={{ fontSize: 18, flexShrink: 0, marginTop: 2 }} />
						<p>
							Most of my major work has been developed on{' '}
							<strong>private software platforms</strong> — Aycent, Ashviro, Coodle
							Daycare, and VMS — which are internal business systems requiring
							authorised login access. Public-facing URLs are provided where
							available; platform internals are not publicly accessible.
						</p>
					</div>

					{/* Filter tabs */}
					<div className="work-filter-row" style={{ marginTop: 28 }}>
						{filters.map((f) => (
							<button
								key={f}
								className={`work-filter-pill${activeFilter === f ? ' active' : ''}`}
								onClick={() => { setActiveFilter(f); setOpenIndex(null); }}
							>
								{f}
							</button>
						))}
					</div>

					{/* Accordion project list */}
					<div className="work-accordion" style={{ marginTop: 24 }}>
						{filtered.map((proj, i) => {
							const isOpen = openIndex === i;
							return (
								<div
									key={i}
									className={`wpa-item${isOpen ? ' wpa-open' : ''}${proj.type === 'public' ? ' wpa-public' : ''}`}
								>
									{/* ── Header row (always visible, click to toggle) ── */}
									<button
										className="wpa-header"
										onClick={() => toggleOpen(i)}
										aria-expanded={isOpen}
									>
										{/* Left: name + badges */}
										<div className="wpa-header-left">
											<span className="wpa-name">{proj.name}</span>
											<span className="apc-tech wpa-cat">{proj.category}</span>
											{proj.type === 'private' ? (
												<span className="wpc-badge wpc-badge--private">
													<LockOutlinedIcon style={{ fontSize: 11 }} />
													Private Platform
												</span>
											) : (
												<span className="wpc-badge wpc-badge--public">
													<OpenInNewIcon style={{ fontSize: 11 }} />
													Public
												</span>
											)}
										</div>

										{/* Right: tech pills (hidden on mobile) + chevron */}
										<div className="wpa-header-right">
											<div className="wpa-tech-preview">
												{proj.tech.slice(0, 3).map((t, j) => (
													<span key={j} className="skill-pill">{t}</span>
												))}
												{proj.tech.length > 3 && (
													<span className="skill-pill">+{proj.tech.length - 3}</span>
												)}
											</div>
											<ExpandMoreIcon
												className={`wpa-chevron${isOpen ? ' wpa-chevron-open' : ''}`}
												style={{ fontSize: 20 }}
											/>
										</div>
									</button>

									{/* ── Collapsible body ── */}
									<div className={`wpa-body${isOpen ? ' wpa-body-open' : ''}`}>
										<div className="wpa-body-inner">
											{/* Description */}
											<p className="apc-desc wpa-desc">{proj.desc}</p>

											{/* Highlights */}
											<ul className="wpc-highlights wpa-highlights">
												{proj.highlights.map((h, j) => (
													<li key={j}>{h}</li>
												))}
											</ul>

											{/* Full tech row */}
											<div className="wpc-tech-row wpa-all-tech">
												{proj.tech.map((t, j) => (
													<span key={j} className="skill-pill">{t}</span>
												))}
											</div>

											{/* External link */}
											<div className="wpc-footer" style={{ marginTop: 14 }}>
												{proj.publicUrl ? (
													<a
														href={proj.publicUrl}
														target="_blank"
														rel="noreferrer"
														className="apc-link"
													>
														<span>{proj.publicLabel}</span>
														<OpenInNewIcon sx={{ fontSize: 13 }} />
													</a>
												) : (
													<span className="wpc-no-link">
														<LockOutlinedIcon style={{ fontSize: 13 }} />
														Not publicly accessible
													</span>
												)}
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* ── CONTACT CTA ── */}
			<section className="contact-cta-section">
				<div className="section-inner contact-cta-inner">
					<h2 className="contact-cta-title">Let's Build Something Together</h2>
					<p className="contact-cta-desc">
						Have a project in mind? I'd love to hear about it.
						Let's discuss how we can work together.
					</p>

					<div className="contact-cta-buttons">
						<a href="mailto:Shahrozd3@gmail.com" className="btn-cta-primary">
							<MailOutlineIcon fontSize="small" />
							<span>Send Email</span>
						</a>
						<Link to="/aboutme" className="btn-cta-ghost">
							<ArrowForwardIcon fontSize="small" />
							<span>About Me</span>
						</Link>
					</div>

					{/* Inline footer */}
					<div className="cta-footer">
						<p>© 2025 Shahroz Daniel. All rights reserved.</p>
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

export default Work;