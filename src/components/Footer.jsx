import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

export default Footer  =>  (
	<Box className="bg-slate-900">

	<Container>
		<Row>
        <div className=" gap-60 lg:gap-96 grid grid-cols-2">
        <Column className="md:text-left">
			<Heading><span class='text-3xl text-cyan-900 font-extrabold mr-1 pt-2'>
        <ion-icon name="cube-outline"></ion-icon>
        </span>BlockExplorer</Heading>
			<p className="text-gray-300 lg:text-center">Best Platform for gaining knowledge about defi and Blockchain</p>
            <div className="grid md:grid-cols-3 gap:5 md:gap-16 pt-14 text-gray-300">
                <a href="">PRIVACY POLICY</a>
                <a href="">TERMS</a>
                <a href="">SUPPORT</a>
            </div>
		</Column>
		<Column className="md:text-right">
			<Heading>Follow us on </Heading>
            <p className="text-gray-300 ">2022 All Rights Reserved</p>
            <div className="grid  grid-cols-1 md:grid-cols-4 lg:gap-10 pt-14">
            <FooterLink href="#"><TwitterIcon /></FooterLink>
			<FooterLink href="#"><InstagramIcon /></FooterLink>
			<FooterLink href="#"><LinkedInIcon /></FooterLink>
			<FooterLink href="#"><FacebookIcon /></FooterLink>
            </div>
			
		</Column>
        </div>
		</Row>
	</Container>
	</Box>
);


