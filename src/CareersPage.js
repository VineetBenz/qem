import React, { useState } from 'react';
import styled from 'styled-components';

const CareersPage = () => {
  const [resume, setResume] = useState(null);

  const handleResumeUpload = (event) => {
    setResume(event.target.files[0]);
  };

  return (
    <PageContainer>
      <Section>
        <Title>Why QEM Group?</Title>
        <Text>
          At QEM Group, we're passionate about innovation and making a difference. 
          We offer a dynamic work environment where your ideas are valued and your 
          career can flourish. Join us to be part of a team that's shaping the future and business solutions. 
          {/* of technology . */}
          
        </Text>
        <SubTitle>Why You Should Join Us:</SubTitle>
        <List>
          <ListItem>Cutting-edge projects and technologies</ListItem>
          <ListItem>Professional growth and development opportunities</ListItem>
          <ListItem>Collaborative and inclusive work culture</ListItem>
          <ListItem>Amazing structure and good facilities for Employees.</ListItem>
          <ListItem>Work-life balance and Peaceful environment</ListItem>
        </List>
        <ResumeUpload>
          <SubTitle>Interested in joining our team?</SubTitle>
          <Text>Upload your resume and we'll consider you for future opportunities:</Text>
          <FileUploadLabel>
            Upload Resume
            <FileInput type="file" onChange={handleResumeUpload} accept=".pdf,.doc,.docx" />
          </FileUploadLabel>
          {resume && <Text>Resume uploaded: {resume.name}</Text>}
        </ResumeUpload>
      </Section>

      <Section>
        <SubTitle>Current Job Openings</SubTitle>
        <JobBox>
          <SubTitle>Coming Soon</SubTitle>
          {/* <Text>We're looking for an experienced software engineer to join our development team.</Text>
          <List>
            <ListItem>5+ years of experience in full-stack development</ListItem>
            <ListItem>Proficiency in React, Node.js, and SQL databases</ListItem>
            <ListItem>Strong problem-solving and communication skills</ListItem>
          </List>
          <ApplyDetails>
            <div>
              <Text>Apply by: July 31, 2024</Text>
              <Text>Email: careers@qemgroup.com</Text>
            </div>
            <Button>Apply Now</Button>
          </ApplyDetails> */}
        </JobBox>
      </Section>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Arial', sans-serif;
  background-color: #f0f4f8;
  color: #333;
  line-height: 1.6;
`;

const Section = styled.section`
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: 40px;
  margin-bottom: 40px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Title = styled.h1`
  color: #2c3e50;
  font-size: 2.5em;
  margin-bottom: 20px;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 50px;
    height: 4px;
    background-color: #3498db;
    margin-top: 10px;
  }
`;

const SubTitle = styled.h2`
  color: #2980b9;
  font-size: 1.8em;
  margin-top: 30px;
`;

const Text = styled.p`
  margin-bottom: 15px;
`;

const List = styled.ul`
  padding-left: 20px;
  list-style-type: none;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  position: relative;
  padding-left: 25px;

  &::before {
    content: '✓';
    color: #27ae60;
    position: absolute;
    left: 0;
  }
`;

const ResumeUpload = styled.div`
  background-color: #ecf0f1;
  border-radius: 10px;
  padding: 30px;
  margin-top: 30px;
  text-align: center;
`;

const FileUploadLabel = styled.label`
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

const FileInput = styled.input`
  display: none;
`;

const JobBox = styled.div`
  border: 2px solid #3498db;
  border-radius: 10px;
  padding: 30px;
  background-color: #ffffff;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
  }
`;

// const ApplyDetails = styled.div`
//   margin-top: 20px;
//   padding-top: 20px;
//   border-top: 1px solid #bdc3c7;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-wrap: wrap;
// `;

// const Button = styled.button`
//   background-color: #27ae60;
//   color: white;
//   border: none;
//   padding: 12px 25px;
//   border-radius: 25px;
//   cursor: pointer;
//   font-size: 1em;
//   font-weight: 600;
//   transition: all 0.3s ease;
//   text-transform: uppercase;
//   letter-spacing: 1px;

//   &:hover {
//     background-color: #2ecc71;
//     transform: translateY(-2px);
//     box-shadow: 0 5px 15px rgba(46, 204, 113, 0.4);
//   }
// `;

export default CareersPage;