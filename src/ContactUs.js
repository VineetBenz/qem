import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const ContactUs = () => {
	return (
		<Container
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			<Section>
				<CorporateOffice
					initial={{ x: -50 }}
					animate={{ x: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
				>
					<Title>Corporate Office:</Title>
					<Address>
						701, 7th Floor, Ambience Mall,
						<br />
						NH-8, Gurgaon, Haryana PIN - 122001
						<br />
						CONTACT - 0124-4257899, 4147899, 4004599
						<br />
						EMAIL - info@qemindia.com
					</Address>
				</CorporateOffice>
				<SiteOffices
					initial={{ x: 50 }}
					animate={{ x: 0 }}
					transition={{ duration: 0.5, delay: 0.6 }}
				>
					<Title>Site Offices:</Title>
					<OfficesWrapper>
						{[
							{
								title: "Missionary Stone Mines & Crushing Plant",
								address:
									"Vill. Ramkumarpura, Via-Papurana, Tehsil - Khetri, Distt. - Jhunjhunu, Rajasthan",
								contact: "+ 91 - 9660357963",
							},
							{
								title: "Granite Mines & Manufacturing",
								address:
									"Vill. Surkhand, Tehsil - Kanore, Distt. - Udaipur, Rajasthan",
								contact: "+ 91 - 9660357963",
							},
							{
								title: "Missionary Stone Mines & Crushing Plant",
								address:
									"Vill. Chhapoli, Tehsil - Udaipurwati, Distt. - Neemkathana, Rajasthan",
								contact: "+ 91 - 9660357963",
							},
							{
								title: "Missionary Stone Mines & Crushing Plant",
								address:
									"Vill. Jharinda, Via-Toda, Neemkathana, Distt. - Sikar, Rajasthan",
								contact: "+ 91 - 9351719580",
							},
							{
								title: "Silica Sand Mines",
								address:
									"Vill. Sohanpura, Via-Patan, Distt. - Sikar, Rajasthan",
								contact: "+ 91 - 9660057127",
							},
							{
								title: " Package -6B, HRRL Tankage Project ",
								address:
									" Vill. Panchpadra, Distt. Barmer, Rajasthan-344032.  ",
								contact: "+ 91 - 7750968468 (Client Project)",
							},
						].map((office, index) => (
							<Office
								key={index}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{
									duration: 0.5,
									delay: 0.8 + index * 0.2,
								}}
							>
								<OfficeTitle>{office.title}</OfficeTitle>
								<Address>
									{office.address}
									<br />
									CONTACT {office.contact}
								</Address>
							</Office>
						))}
					</OfficesWrapper>
				</SiteOffices>
			</Section>
			<FormSection
				initial={{ y: 50 }}
				animate={{ y: 0 }}
				transition={{ duration: 0.5, delay: 1.2 }}
			>
				<FormTitle>Contact Form:</FormTitle>
				<Form>
					<Input placeholder="Company Name" />
					<Input
						required
						placeholder="Your Name *"
					/>
					<Input
						required
						type="email"
						placeholder="Your E-Mail *"
					/>
					<Input
						required
						placeholder="Phone *"
					/>
					<Input placeholder="Subject" />
					<Textarea
						required
						placeholder="Requirements *"
					/>
					<ButtonGroup>
						<Button type="submit">Submit</Button>
						<Button type="reset">Reset</Button>
					</ButtonGroup>
				</Form>
			</FormSection>
		</Container>
	);
};

const Container = styled(motion.div)`
	padding: 2rem;
	background-color: #f0f2f5; /* Cream background */
	color: #333;
`;

const Section = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 3rem;
`;

const CorporateOffice = styled(motion.div)`
	text-align: center;
	margin-bottom: 2rem;
`;

const SiteOffices = styled(motion.div)`
	width: 100%;
`;

const Title = styled(motion.h2)`
	font-size: 1.8rem;
	margin-bottom: 1rem;
	color: #00008b; /* Dark blue color */
	text-align: center;
`;

const OfficesWrapper = styled(motion.div)`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 1rem;
`;

const Office = styled(motion.div)`
	background-color: #e8f0f8; /* Frost color */
	padding: 1rem;
	border-radius: 8px;
	width: 18%;
	min-width: 220px;
`;

const OfficeTitle = styled(motion.h3)`
	font-size: 1.4rem;
	margin-bottom: 0.5rem;
	color: #5dade2; /* Light blue color */
	text-align: center;
`;

const Address = styled(motion.p)`
	line-height: 1.5;
	font-size: 1rem;
	color: #2c3e50; /* Dark blue color */
	text-align: center;
`;

const FormSection = styled(motion.div)`
	max-width: 600px;
	margin: 0 auto;
`;

const FormTitle = styled(motion.h2)`
	text-align: center;
	margin-bottom: 1rem;
	color: #00008b; /* Dark blue color */
`;

const Form = styled(motion.form)`
	display: flex;
	flex-direction: column;
`;

const Input = styled(motion.input)`
	padding: 0.75rem;
	margin-bottom: 1rem;
	border: 1px solid #ccc;
	border-radius: 4px;
	font-size: 1rem;
`;

const Textarea = styled(motion.textarea)`
	padding: 0.75rem;
	margin-bottom: 1rem;
	border: 1px solid #ccc;
	border-radius: 4px;
	font-size: 1rem;
	height: 100px;
	resize: vertical;
`;

const ButtonGroup = styled(motion.div)`
	display: flex;
	justify-content: space-between;
`;

const Button = styled(motion.button)`
	padding: 0.75rem 1.5rem;
	font-size: 1rem;
	color: #fff;
	background-color: #2980b9;
	border: none;
	border-radius: 4px;
	cursor: pointer;

	&:hover {
		background-color: #3498db;
	}

	&[type="reset"] {
		background-color: #e74c3c;

		&:hover {
			background-color: #c0392b;
		}
	}
`;

export default ContactUs;