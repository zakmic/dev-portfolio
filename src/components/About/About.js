import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/man-svgrepo-com.svg"
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            Hello! My name is <strong>Zak Micallef</strong>. I am a software developer with a lot of general intrests such as infrastructure, CI/CD, high availability, and distributed systems.
            I hold a Bachelor's degree in Artificial Intelligence from the University of Malta while interning at CCBill, which laid a solid academic foundation for my career.
            With two years of full-time experience at PhoenixNap, an IaaS company, I have gained extensive hands-on experience in leading features and working with technologies such as Spring Boot, NoSQL, and Kubernetes. 
            Currently, I am pursuing a Master's degree in Computer Science at the University of Amsterdam while continuing to work part-time as a Java Engineer at PhoenixNap. 
          </div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
