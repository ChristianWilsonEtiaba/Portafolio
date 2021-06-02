import { Link } from "gatsby"
import React from "react"

import styled from "styled-components"
// import { GoTools } from "react-icons/go"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"

import GFT from "../images/companies/gft.png"
import Virtusway from "../images/companies/virtusway.png"
import Creditas from "../images/companies/creditas.png"

import Mesacolachancla from "../images/projects/mesacolachancla.png"
import BancSabadell from "../images/projects/bancsabadell.png"


const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 80rem;
`

const SectionTitle = styled.h2`
  color: #00343d;
  margin: 0 auto;
  max-width: 30rem;
  padding-top: 5rem;
  text-align: center;
`

const SectionSubtitle = styled.p`
  color: #00343d;
  padding: 2rem 0.5rem 0;
  text-align: center;
`

const CallToAction = styled.span`
  color: #0bd8a2;
  cursor: pointer;
  font-weight: 550;
`

const ProjectsList = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 5rem auto;
  max-width: 70rem;
`
const Project = styled.div`
  align-items: center;
  border: 1px solid #e6ecf8;
  border-radius: 12px;
  box-shadow: 0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 1px 0 0 #e6ecf8;
  display: flex;
  flex-direction: column;
  height: 460px;
  justify-content: space-around;
  margin: 1rem;
  max-width: 21rem;
  padding: 2rem;
  text-align: center;
  width: 100%;
`

const ProjectImg = styled.div`
  align-items: center;
  display: flex;
  height: 105px;
  justify-content: center;
  margin-bottom: 2rem;
  width: 240px;
  @media (min-width: 1024px) {
    width: 162px;
  }
`

const ProjectDescription = styled.ul`
  align-items: center;
  color: #00343d;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  height: 130px;
  justify-content: center;
  list-style: none;
`

const ProjectLink = styled.p`
  color: ${props => (props.disabled ? "#0bd8a2aa" : "#0bd8a2")};
  font-size: 14px;
  font-weight: 550;
  margin-top: 2rem;
  text-align: center;
  &:hover {
    cursor: ${props => (props.disabled ? "not-allowed" : "auto")};
  }
`

const Divider = styled.div`
  background-color: #e6ecf8;
  height: 1px;
  width: 100vw;
`

const CompaniesList = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 0 auto;
  max-width: 50rem;
  padding: 5rem 1rem 15rem;
`

const Company = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
  width: 200px;
  @media (min-width: 968px) {
    margin: 1rem;
  }
`

const About = ({ location: { pathname } }) => {
  return (
    <Layout location={pathname}>
      <SEO title="About" />
      <Container
        backgroundColor="white"
        height="auto"
        margin="0 auto"
        minHeight="46rem"
        width="100vw"
      >
        <Wrapper>
          <SectionTitle>My Work</SectionTitle>
          <SectionSubtitle>
            Here a few projects i've worked on in the past. Want to see more?
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <CallToAction> Contact me</CallToAction>
            </Link>
          </SectionSubtitle>
          <ProjectsList>
            <Project>
              <ProjectImg>
                <img
                  alt="Mesacolachancla Web Design Valencia"
                  src={Mesacolachancla}
                  style={{ margin: 0, maxHeight: 105 }}
                />
              </ProjectImg>
              <ProjectDescription>
                <li>E-Commerce using HTML, CSS, Wordpress.</li>
                <li>
                  uploaded to domains for the clients.
                </li>
              </ProjectDescription>
              <ProjectLink>
                <a
                  href="https://www.mesacolachancla.com"
                  rel="noreferrer"
                  target="_blank"
                  style={{ textDecoration: "none", color: "#0bd8a2" }}
                >
                  www.mesacolachancla.com
                </a>
              </ProjectLink>
            </Project>
            <Project>
              <ProjectImg>
                <img
                  alt="BancSabadell"
                  src={BancSabadell}
                  style={{ margin: 0, maxHeight: 105 }}
                />
              </ProjectImg>
              <ProjectDescription>
                <li>Web and mobile application using React and React Native with StencilJs.</li>
                <li>Done with Java, Kotlin and MongoDB in the backend. And done in StecilJs with React and React Native in the frontend.</li>
              </ProjectDescription>
              <ProjectLink>
                <a
                  href="https://www.bancsabadell.com"
                  rel="noreferrer"
                  target="_blank"
                  style={{ textDecoration: "none", color: "#0bd8a2" }}
                >
                  www.bancsabadell.com
                </a>
              </ProjectLink>
            </Project>
          
            <Project>
              <ProjectImg>
                <img
                  alt="Creditas"
                  src={Creditas}
                  style={{ margin: 0, maxHeight: 105 }}
                />
              </ProjectImg>
              <ProjectDescription>
              <li>Single page application using ReactJS and Kotlin.</li>
                <li>
                  Working with React, MongoDB and Docker Compose, AWS cloud functions.
                </li>
              </ProjectDescription>
              <ProjectLink>
                <a
                  href="https://www.creditas.com/store"
                  rel="noreferrer"
                  target="_blank"
                  style={{ textDecoration: "none", color: "#0bd8a2" }}
                >
                  www.creditas.com
                </a>
              </ProjectLink>
            </Project>
          </ProjectsList>
        </Wrapper>
        <Divider />
        <Wrapper>
          <SectionTitle>
            I'm proud to have collaborated with some awesome companies:
          </SectionTitle>
          <CompaniesList>
            <Company>
              <img
                alt="GFT"
                src={GFT}
                style={{ margin: 0, height: 125 }}
              />
            </Company>
            <Company>
              <img
                alt="Banc Sbadell"
                src={BancSabadell}
                style={{ margin: 0, maxHeight: 125 }}
              />
            </Company>
            <Company>
              <img
                alt="Creditas"
                src={Creditas}
                style={{ margin: 0, maxHeight: 125 }}
              />
            </Company>
            <Company>
              <img
                alt="Mesacolachancla"
                src={Mesacolachancla}
                style={{ margin: 0, maxHeight: 125 }}
              />
            </Company>
            <Company>
              <img
                alt="vIRTUSWAY"
                src={Virtusway}
                style={{ margin: 0, maxHeight: 125 }}
              />
            </Company>
          </CompaniesList>
        </Wrapper>
      </Container>
    </Layout>
  )
}

export default About
