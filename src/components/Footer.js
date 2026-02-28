import React from 'react'

const Footer = () => {

	return (
		<div className='mt-5 mb-5'>
			<footer className="footer-main">
				<div className="row">
					<div className="col-sm-5 copyright" style={{ padding: "0 2%" }}>
						<h1><b>Shahroz Daniel</b></h1>
						<p className="footer-p">All copyright © Shahroz Daniel, 2023.</p>
					</div>
					<div className="col-sm-7">
						<div className="row">
							<div className="col-sm-4">
								<h6><b>Clients</b></h6>
								<p className="footer-p" style={{ paddingTop: "28px" }}>
									Amit Sharma <br />
									Jalpa Sharma <br />
									Ayan Imran <br />
									Minhal Khan <br />
									Nihal Khan <br />
									Faizan Qureshi
								</p>
							</div>
							<div className="col-sm-7">
								<h6><b>About</b></h6>
								<p className="footer-p" style={{ paddingTop: "28px" }}>Why hello there. I am a 24 year old web developer, based in Bareilly, India. <b style={{ color: "black" }}>I love everything beautiful, whether it’s in people, music, art or websites I look at or make.</b> I strive to become better and better at what I do and can’t think of doing anything else with my time. <b style={{ color: "black" }}> If you’d like to work on a project with me or just say hello, you can reach out to me on my email, instagram or whatsapp.</b> Do enjoy your stay.</p>
							</div>
							{/* <div className="col-sm-3">
								<div className="rotate">
									<a href="#" className="btt" id="btt">back to top</a>
									<a href="#" className="btt-arrow" id="arro"><b>&#129042;</b></a>
								</div>
							</div> */}
						</div>
					</div>
				</div>
			</footer>
			{/* <div style={{ height: "50px" }}></div> */}
			<div className="hidden-footer justify-content-center">
				<div className="col-sm-12 social-container2">
					<ul className="ul">
						<span className="follow2"><b>Follow</b></span>
						<li className="li">
							<a href="https://github.com/shahrozdaniel" target={"_blank"}>Github</a>
						</li>
						<li className="li">
							<a href="https://www.instagram.com/dammit_daniel1" target={"_blank"}>Instagram</a>
						</li>
						<li className="li">
							<a href="https://www.linkedin.com/in/shahroz-daniel-b8a651216" target={"_blank"}>LinkedIn</a>
						</li>
					</ul>
				</div>
			</div>
			<div className='col-sm-6'></div>
		</div>
	)
}

export default Footer