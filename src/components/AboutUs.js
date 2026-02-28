import React from 'react'
import { Link } from 'react-router-dom'
import Resume from "../projectImages/Shahroz's_Resume.pdf";

const AboutUs = () => {
	return (
		<>
			<div class='about-main-container'>
				<div class="col-sm-12 about-col-10">
					<header>
						<h2 class="heading-about"><b>About Me</b></h2>
					</header>

					<div style={{ height: "80px" }}></div>

					<div className='col-md-12 col-sm-12 row'>
						<div className='col-md-6 col-sm-6'>
							<p className='why-hello'>Hello there</p>
							<p class="bout-p">
								I am a <b style={{ color: "black" }}>24 year old web developer</b>, based in Bareilly, India. I love everything beautiful, a <b style={{ color: "black" }}>firm believer in minimalism</b> and I seek for it day by day, whether it’s in people, music, art or websites I look at or make.
							</p>
						</div>

						<div className='col-md-6 col-sm-6'>
							<p className='why-hello'>Technologies</p>
							<p class="bout-p">I specialize in <b style={{ color: "black" }}>Fullstack & UI/UX development.</b> Experienced in creating Web applications <b style={{ color: "black" }}>with HTML, CSS, JS, React JS, Core PHP, Laravel, Lumen, MySQL and REST API.</b></p>
						</div>

						<div className='col-md-6 col-sm-6'>
							<p className='why-hello'>Tracking</p>
							<p class="bout-p"><b style={{ color: "black" }}>Being in direct contact with the client and keeping track of all the stages from development to deployment. You know exactly which part of the project is already done and what I'm doing right now. No risk for the deadline.</b></p>
						</div>

						<div className='col-md-6 col-sm-6'>
							<p className='why-hello'>Commitment</p>
							<p class="bout-p">You can achieve almost anything in life…As long as you focus on achieving one thing at a time. It’s a time-tested strategy. Although I can work on multiple projects at time, <b style={{ color: "black" }}>I try to focus on one thing at a time to forge ahead a more optimized and user friendly Interface.</b></p>
						</div>
					</div>


					<div className="bfd"></div>

					<div class="why-hello">Download my CV</div>
					<p style={{ paddingTop: "4%", color: "grey" }}>Get a better insight of my skills and past work experience. <a target={'_blanl'} href={Resume} download><b>Download CV</b></a>.</p>
				</div>
			</div>
			<div className="bfd"></div>
		</>
	)
}

export default AboutUs