import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
          <Title>CORPORATE OFFICE:</Title>
          <Address>
            701, 7th Floor, Ambience Mall,
            <br />
            NH-8, Gurgaon, Haryana PIN - 122001
            <br />
            <ContactLink href="tel:01244257899,4147899,4004599">
              <FontAwesomeIcon icon={faPhone} /> 0124-4257899, 4147899, 4004599
            </ContactLink>
            <br />
            <ContactLink href="mailto:info@qemindia.com">
              <FontAwesomeIcon icon={faEnvelope} /> info@qemindia.com
            </ContactLink>
          </Address>
        </CorporateOffice>
        <SiteOffices
          initial={{ x: 50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Title>SITE OFFICES:</Title>
          <OfficesWrapper>
            {[
              {
                title: "Masonry Stone Mines & Crushing Plant",
                address:
                  "Vill. Ramkumarpura, Via-Papurana, Tehsil - Khetri, Distt. - Jhunjhunu, Rajasthan",
                contact: "9660357963",
              },
              {
                title: "Granite Mines & Manufacturing",
                address:
                  "Vill. Surkhand, Tehsil - Kanore, Distt. - Udaipur, Rajasthan",
                contact: "9660357963",
              },
              {
                title: "Masonry Stone Mines & Crushing Plant",
                address:
                  "Vill. Chhapoli, Tehsil-Udaipurwati, Distt-Neemkathana, Rajasthan",
                contact: "9660357963",
              },
              {
                title: "Masonry Stone Mines & Crushing Plant",
                address:
                  "Vill. Jharinda, Via-Toda, Neemkathana, Distt. - Sikar, Rajasthan",
                contact: "9351719580",
              },
              {
                title: "Silica Sand Mines",
                address:
                  "Vill. Sohanpura, Via-Patan, Distt. - Sikar, Rajasthan",
                contact: "9660057127",
              },
              {
                title: "Package -6B, HRRL Tankage Project",
                address:
                  "Vill. Pachpadra, Distt. - Barmer, Rajasthan-344032.",
                contact: "7750968468 CLIENT - BRIDGE AND ROOF CO. (I) LTD.",
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
                  <ContactLink href={`tel:${office.contact}`}>
                    <FontAwesomeIcon icon={faPhone} /> {office.contact}
                  </ContactLink>
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
        <FormTitle>CONTACT FORM:</FormTitle>
        <Form>
          <Input placeholder="Company Name" />
          <Input required placeholder="Your Name *" />
          <Input required type="email" placeholder="Your E-Mail *" />
          <Input required placeholder="Phone *" />
          <Input placeholder="Subject" />
          <Textarea required placeholder="Requirements *" />
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
  background-color: #f0f2f5; /* Light background */
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
  font-size: 1.8rem; /* Font size remains unchanged */
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
  font-size: 1.4rem; /* Font size remains unchanged */
  margin-bottom: 0.5rem;
  color: #191970; /* Light blue color */
  text-align: center;
`;

const Address = styled(motion.p)`
  line-height: 1.5;
  font-size: 1.2rem; /* Increased font size for Address */
  color: #2c3e50; /* Dark blue color */
  text-align: center;
`;

const ContactLink = styled.a`
  color: #2c3e50;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
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
  background-color: #1e3c72;
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
