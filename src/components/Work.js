import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid, Typography } from '@mui/material';
import Aycent from "../projectImages/aycent.png";
import OnlineCliq from "../projectImages/onlineCliq.png";
import TogetherClothing from "../projectImages/togetherClothing.png";

const Work = () => {
	return (
		<>
			<Grid container>
				<Grid item md={12} >
					<Typography fontWeight={600} fontSize={"3em"}>
						Projects
					</Typography>
				</Grid>

				<Grid item md={12} mt={8}>
					<Typography fontWeight={600} fontSize={"2em"} mb={2}>
						Aycent - Business Management Software
					</Typography>
					<Box p={"0 5%"}>
						<p style={{ color: "grey", }}><b style={{ color: "black" }}>Flexible Unified Platform for Marketing, Sales & Engagement to streamlines workflow.</b> Aycent comes with a bunch of Modules such as <b style={{ color: "black" }}>Chat Module, Ticketing System, Customer Relationship Management, Automated Calling System with Call Recording, Missed Call Reporting, Call Forwarding etc. </b> Check out Aycent: <a href='https://www.aycent.co/' target={"_blank"}><b style={{ color: "black" }}>https://www.aycent.co/</b></a>
						</p>
						<img src={Aycent} className='projectImage' />
					</Box>
				</Grid>

				<Grid item md={12} mt={8}>
					<Typography fontWeight={600} fontSize={"2em"} mb={2}>
						OnlineCliq - E-commerce Platform
					</Typography>
					<Box p={"0 5%"}>
						<p style={{ color: "grey", }}>E-Commerce platform for a wide variety of electronic equipments. <b style={{ color: "black" }}>Complete e-store functionality from Cart to Dispatch with payment gateway integration and invoice generation.</b> Check out OnlineCliq: <a href='https://www.onlinecliq.com/' target={"_blank"}><b style={{ color: "black" }}>https://www.onlinecliq.com/</b></a>
						</p>
						<img src={OnlineCliq} className='projectImage' />
					</Box>
				</Grid>

				<Grid item md={12} mt={8}>
					<Typography fontWeight={600} fontSize={"2em"} mb={2}>
						TogetherClothing - E-commerce Platform
					</Typography>
					<Box p={"0 5%"}>
						<p style={{ color: "grey", }}><b style={{ color: "black" }}>E-Commerce front for an offline clothing store.</b> <b style={{ color: "black" }}>Complete e-store functionality from Cart to Dispatch and invoice generation.</b> Check out TogetherClothing: <a href='https://togetherclothing.in/' target={"_blank"}><b style={{ color: "black" }}>https://togetherclothing.in/</b></a>
						</p>
						<img src={TogetherClothing} className='projectImage' />
					</Box>
				</Grid>
			</Grid>
			<div className="bfd"></div>
		</>
	)
}

export default Work