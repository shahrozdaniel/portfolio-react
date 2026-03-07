import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadIcon from '@mui/icons-material/Download';
import Resume from '../projectImages/shahroz_resume_07_03_26.pdf';

const AboutUs = () => {
	const [mousePosition, setMousePosition] = useState({ x: -500, y: -500 });

	useEffect(() => {
		const handleMouseMove = (e) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};
		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);

	const skills = [
		{ category: 'Core Stack', items: ['Laravel', 'Filament', 'Core PHP', 'Lumen', 'CodeIgniter'] },
		{ category: 'Frontend', items: ['React.js', 'Next.js', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'jQuery'] },
		{ category: 'Databases & State', items: ['MySQL', 'MongoDB', 'Redis'] },
		{ category: 'DevOps', items: ['Docker', 'Git', 'CI/CD Pipelines', 'AWS (S3, CloudFront, IAM)'] },
		{ category: 'Integrations & Ops', items: ['REST API Development', 'META APIs', 'Pusher', 'Payment Gateway Integration'] },
		{ category: 'Automation & Others', items: ['n8n', 'Automation', 'WordPress'] },
	];

	const workHistory = [
		{
			role: 'PHP-Laravel Developer',
			company: 'Bellpepper Ptd. Ltd.',
			location: 'Singapore',
			period: 'Mar 2025 – Feb 2026',
			type: 'Full-Time',
			description:
				'Marketing agency specialising in web development, Digital Name Cards, SEM, SEO, and SMM.',
			highlights: [
				'Oversaw end-to-end infrastructure including servers, databases, deployments, and CI/CD pipelines.',
				'Built a full-scale CRM with deep integrations across META, TikTok, Telegram, YouTube, and LinkedIn, featuring advanced automation workflows via n8n.',
				'Built full backend architectures for enterprise-grade platforms including an employment agency system and commercial visitor-management software.',
				'Led a cross-functional team of mobile, frontend, and backend developers, driving technical direction and successful project delivery.',
			],
		},
		{
			role: 'Software Developer — Laravel, PHP',
			company: 'Aycom Business Solutions Pvt. Ltd.',
			location: 'Delhi, India',
			period: 'Nov 2023 – Feb 2025',
			type: 'Full-Time',
			description:
				'Aycom provides telecommunications and marketing services to businesses worldwide.',
			highlights: [
				'Integrated payment gateways (Stripe, Razorpay, GPay), developing custom webhooks for each provider.',
				'Designed and developed a multi-tenant SaaS architecture using Laravel 8.',
			],
		},
		{
			role: 'Jr. Software Developer — Laravel, PHP',
			company: 'Aycom Business Solutions Pvt. Ltd.',
			location: 'Delhi, India',
			period: 'Jan 2022 – Jun 2023',
			type: 'Full-Time',
			description:
				'Grew into a full-stack role building production CRMs and internal tooling.',
			highlights: [
				'Developed a CRM in Laravel 8 integrating Typeform and Jotform for automated lead generation.',
				'Built an Appointment Management system with FullCalendar, real-time notifications, alerts, and snooze functionality.',
				'Built an SMS module supporting inbox, bulk-send, and scheduled campaigns (Vonage/Nexmo, Dinstar, HTTP SMS).',
			],
		},
		{
			role: 'Fullstack Developer',
			company: 'Prolitus Technologies Pvt. Ltd.',
			location: 'Noida, India',
			period: 'Jul 2023 – Nov 2023',
			type: 'Full-Time',
			description:
				'IT services firm delivering custom web and mobile applications.',
			highlights: [
				'Developed the Coodle daycare management system using Next.js.',
				'Maintained and enhanced WordPress-based client projects per specifications.',
			],
		},
		{
			role: 'Backend Developer',
			company: 'Webtis Software Solutions',
			location: 'Bareilly, India',
			period: 'Sep 2021 – Dec 2021',
			type: 'Internship',
			description:
				'Full-service digital agency offering web development, SEO, SMO, PPC, and digital marketing.',
			highlights: [
				'Developed MLM projects from scratch using Core PHP.',
				'Implemented data normalization to avoid duplicacy and maintain a consistent database structure throughout.',
			],
		},
	];

	const projects = [
		{
			name: 'Coodle — Daycare Management System',
			tech: 'Next.js',
			desc: 'A full-featured daycare management platform built with an intuitive UI/UX in mind.',
			link: 'https://daycare-frontend.vercel.app/',
		},
		{
			name: 'Dynamic React Flow — WhatsApp & Email Automation',
			tech: 'Next.js / React Flow',
			desc: 'Dynamically create automation flows for WhatsApp and Email campaigns.',
			link: 'https://react-flow-henna.vercel.app/',
		},
		{
			name: 'Discord Music Bot',
			tech: 'Vanilla JavaScript',
			desc: 'Community Discord music bot with queue feature, rich embeds, and an easy-to-use interface.',
			link: 'https://github.com/shahrozdaniel/CoolAid.git',
		},
	];

	const achievements = [
		'State-level Bronze Medalist in Kickboxing Tournament — Varanasi, UP (Sep 2024)',
		'Awarded Best Cadet in NCC for exceptional drill, fitness, and weapon operation (Aug 2015)',
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

			{/* Grid overlay */}
			<div className="home-grid-overlay" />

			{/* ── HERO / INTRO ────────────────────────────────────── */}
			<section className="about-hero-section">
				<div className="about-hero-inner">
					{/* Status badge */}
					<div className="hero-status-badge animate-fade-in">
						<span className="status-dot" />
						<span>Open to work</span>
					</div>

					<h1 className="about-hero-name animate-slide-up" style={{ animationDelay: '0.1s' }}>
						About Me
					</h1>

					<div className="about-hero-meta animate-slide-up" style={{ animationDelay: '0.2s' }}>
						<span>Shahroz Daniel</span>
						<span className="subtitle-dot" />
						<span>Full-Stack Developer</span>
						<span className="subtitle-dot" />
						<span>India</span>
					</div>

					<p className="about-hero-desc animate-slide-up" style={{ animationDelay: '0.3s' }}>
						Self-motivated and results-driven Full-Stack Web Developer with{' '}
						<strong>4+ years of experience</strong> building high-quality, user-focused web
						applications. Skilled in both front-end and back-end development, with a strong
						track record of delivering solutions that meet real business needs and exceed
						client expectations.
					</p>

					<div className="hero-ctas animate-slide-up" style={{ animationDelay: '0.4s' }}>
						<a href={Resume} download className="btn-primary">
							<DownloadIcon fontSize="small" />
							<span>Download Resume</span>
						</a>
						<Link to="/contactme" className="btn-secondary">
							<MailOutlineIcon fontSize="small" />
							<span>Get in Touch</span>
						</Link>
					</div>

					{/* Stats row */}
					<div className="stats-row animate-slide-up" style={{ animationDelay: '0.5s' }}>
						<div className="stat-item">
							<div className="stat-number">4+</div>
							<div className="stat-label">Years Experience</div>
						</div>
						<div className="stat-item">
							<div className="stat-number">5</div>
							<div className="stat-label">Companies Worked With</div>
						</div>
						<div className="stat-item">
							<div className="stat-number">3</div>
							<div className="stat-label">Countries Served</div>
						</div>
					</div>
				</div>
			</section>

			{/* ── SKILLS ────────────────────────────────────────────── */}
			<section className="about-skills-section">
				<div className="section-inner">
					<div className="section-header">
						<h2 className="section-title">Technical Skills</h2>
						<p className="section-subtitle">Technologies I work with day-to-day</p>
					</div>

					<div className="about-skills-grid">
						{skills.map((group, i) => (
							<div key={i} className="skill-category-block">
								<span className="skill-category-label">{group.category}</span>
								<div className="skills-grid" style={{ marginTop: '14px' }}>
									{group.items.map((skill, j) => (
										<span key={j} className="skill-pill">{skill}</span>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── WORK HISTORY ──────────────────────────────────────── */}
			<section className="about-work-section">
				<div className="section-inner">
					<div className="section-header">
						<h2 className="section-title">Work History</h2>
						<p className="section-subtitle">Where I've built things that matter</p>
					</div>

					<div className="timeline">
						{workHistory.map((job, i) => (
							<div key={i} className="timeline-item">
								<div className="timeline-marker" />
								<div className="timeline-content">
									<div className="timeline-header">
										<div className="timeline-title-group">
											<h3 className="timeline-role">{job.role}</h3>
											<p className="timeline-company">
												{job.company}
												<span className="timeline-location"> · {job.location}</span>
											</p>
										</div>
										<div className="timeline-right">
											<span className="timeline-period">{job.period}</span>
											<span className={`timeline-type-badge ${job.type === 'Internship' ? 'badge-internship' : 'badge-fulltime'}`}>
												{job.type}
											</span>
										</div>
									</div>
									<p className="timeline-desc">{job.description}</p>
									<ul className="timeline-highlights">
										{job.highlights.map((h, j) => (
											<li key={j}>{h}</li>
										))}
									</ul>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── PROJECTS ──────────────────────────────────────────── */}
			<section className="about-projects-section">
				<div className="section-inner">
					<div className="section-header">
						<h2 className="section-title">Notable Projects</h2>
						<p className="section-subtitle">Selected work from my personal and professional portfolio</p>
					</div>

					<div className="about-projects-grid">
						{projects.map((proj, i) => (
							<a
								key={i}
								href={proj.link}
								target="_blank"
								rel="noreferrer"
								className="about-project-card"
							>
								<div className="apc-top">
									<span className="apc-tech">{proj.tech}</span>
								</div>
								<h3 className="apc-title">{proj.name}</h3>
								<p className="apc-desc">{proj.desc}</p>
								<div className="apc-link">
									<span>View Project</span>
									<ArrowForwardIcon sx={{ fontSize: 14 }} />
								</div>
							</a>
						))}
					</div>
				</div>
			</section>

			{/* ── ACHIEVEMENTS + PERSONAL ───────────────────────────── */}
			<section className="about-personal-section">
				<div className="section-inner">
					<div className="about-personal-grid">
						{/* Left: Achievements */}
						<div>
							<h2 className="section-title">Achievements</h2>
							<ul className="about-achievements-list">
								{achievements.map((a, i) => (
									<li key={i}>{a}</li>
								))}
							</ul>
						</div>

						{/* Right: Languages & Interests */}
						<div>
							<h2 className="section-title">Beyond the Code</h2>
							<div className="about-beyond-block">
								<div className="about-beyond-item">
									<span className="skill-category-label">Languages</span>
									<div className="skills-grid" style={{ marginTop: '12px' }}>
										<span className="skill-pill">English (Native)</span>
										<span className="skill-pill">Hindi (Native)</span>
									</div>
								</div>
								<div className="about-beyond-item" style={{ marginTop: '28px' }}>
									<span className="skill-category-label">Interests</span>
									<div className="skills-grid" style={{ marginTop: '12px' }}>
										<span className="skill-pill">Gaming</span>
										<span className="skill-pill">Tech Enthusiast</span>
										<span className="skill-pill">Travelling</span>
										<span className="skill-pill">Kickboxing</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ── CONTACT CTA ───────────────────────────────────────── */}
			<section className="contact-cta-section">
				<div className="section-inner contact-cta-inner">
					<h2 className="contact-cta-title">Let's Build Something Together</h2>
					<p className="contact-cta-desc">
						Have a project in mind? I'd love to hear about it. Let's discuss how we can work together.
					</p>

					<div className="contact-cta-buttons">
						<a href="mailto:Shahrozd3@gmail.com" className="btn-cta-primary">
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
						<a
							href="https://github.com/shahrozdaniel"
							target="_blank"
							rel="noreferrer"
							className="btn-cta-ghost"
						>
							<GitHubIcon fontSize="small" />
							<span>GitHub</span>
						</a>
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

export default AboutUs;