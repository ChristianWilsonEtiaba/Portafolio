import { Link } from "gatsby"
import React from "react"

import styled from "styled-components"
import { AiOutlineMail, AiOutlineLinkedin, AiFillGithub } from "react-icons/ai"
import { RiGatsbyLine } from "react-icons/ri"

import Container from "../components/container"

// import LogoImage from "../images/white_logo.png"

const Card = styled.div`
  align-items: center;
  background: #141c3a;
  border-radius: 12px;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px #141c3a;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 0 auto;
  margin-top: -9rem;
  padding: 3.5rem 1.25rem;
  max-width: 60rem;
  width: 90%;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`
const CardTitle = styled.h2`
  color: white;
  font-size: 1.25rem;
  font-weight: 800;
  margin: 0;
  margin-bottom: 1rem;
  @media (min-width: 1024px) {
    margin: 0;
  }
`

const CardText = styled.p`
  color: white;
  font-size: 1rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  text-align: center;
  @media (min-width: 1024px) {
    margin: 0;
    width: 400px;
  }
`

const CardButton = styled.button`
  background: transparent;
  border: solid 2px #0bd8a2;
  border-radius: 0.25rem;
  color: white;
  margin-bottom: 1rem;
  margin-top: 1rem;
  padding: 0.5rem;
  transition: background 0.3s ease-in-out;
  width: 190px;
  &:hover {
    background: #0bd8a2;
    color: white;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    margin: 0;
  }
`

const List = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  margin: auto;
  margin-bottom: 2rem;
  max-width: 25rem;
`

const ListItem = styled.li`
  border: solid 2px rgba(255, 255, 255, 0.3);
  border-radius: 100%;
  color: white;
  height: 48px;
  position: relative;
  transition: background-color 0.1s ease-in-out;
  width: 48px;
  &:hover {
    background-color: white;
    color: #0bd8a2;
  }
`
const Icon = styled.div`
  align-items: center;
  display: inline-flex;
  font-size: 1.25rem;
  justify-content: center;
  position: absolute;
  top: 12px;
  left: 12px;
  @media (min-width: 768px) {
    top: 10px;
    left: 10px;
  }
`

const Typography = styled.p`
  color: white;
  margin: 0;
  opacity: 0.7;
  text-align: center;
`

const TitleText = styled(Typography)`
  font-size: 1.25rem;
  margin: 1rem auto 3rem;
  width: 20rem;
`

const AdditionalText = styled(Typography)`
  font-size: 0.8rem;
  padding-top: 1rem;
`

const CopyrightText = styled(Typography)`
  font-size: 0.7rem;
`

const Copyright = styled.div`
  align-items: center;
  display: flex;
  font-weight: 600;
  justify-content: center;
`

const Footer = ({ location }) => {
  const date = new Date()
  const currentYear = date.getFullYear()

  return (
    <Container backgroundColor="#00343d" padding="4rem 0">
      {location !== "/contact" && (
        <Card>
          <CardTitle>Start a project</CardTitle>
          <CardText>
            Interested in working together? Let's schedule a call.
          </CardText>
          <Link to="/contact">
            <CardButton>Let's Talk</CardButton>
          </Link>
        </Card>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 50,
          width: "100vw",
        }}
      >
        <svg
          style={{ margin: 0, maxWidth: 250, height: 100 }}
          xmlns="http://www.w3.org/2000/svg"
          id="Capa_1"
          enable-background="new 0 0 512 512"
          height="50"
          viewBox="0 0 512 512"
        >
          <g>
            <path
              d="m483.513 187.632c0-52.685-41.519-95.856-93.557-98.528 8.78-46.366-26.97-89.104-73.821-89.104-24.567 0-46.416 11.852-60.134 30.136-13.717-18.284-35.567-30.136-60.134-30.136-46.587 0-82.074 42.171-73.999 88.11-84.802 4.506-124.135 107.083-65.338 167.389-58.758 60.266-19.539 163.03 65.517 167.397-8.78 46.365 26.97 89.104 73.821 89.104 24.567 0 46.416-11.852 60.134-30.136 13.717 18.284 35.566 30.136 60.133 30.136 46.587 0 82.074-42.171 73.999-88.11 51.956-2.761 93.379-45.895 93.379-98.52 0-26.434-10.198-51.386-27.946-69.742 17.945-18.116 27.946-42.073 27.946-67.996zm-342.972-68.35c12.546 2.468 22.242-10.938 15.971-22.076-16.841-29.912 4.878-67.206 39.355-67.206 24.887 0 45.134 20.243 45.134 45.125v32.104c-34.226-8.38-67.512 18.793-65.016 54.786 2.227 32.116 33.113 55.155 65.016 47.325v31.159h-48.94c-15.294 0-24.326 17.18-15.657 29.774 9.833 14.284.39 34.1-16.979 35.304-19.236 1.328-30.756-20.058-20.266-35.3 8.669-12.595-.358-29.778-15.654-29.778h-38.896c-16.432-12.993-26.119-32.812-26.119-53.869 0-43.028 39.386-75.756 82.051-67.348zm55.326 362.718c-34.898 0-56.572-38.136-38.872-68.048 6.595-11.149-3.156-24.944-15.928-22.332-42.82 8.797-82.578-24.055-82.578-67.252 0-21.057 9.688-40.875 26.118-53.869h22.101c-8.339 34.034 18.599 67.516 54.792 65.006 31.723-2.198 55.255-32.748 47.331-65.006h32.17v47.929c0 15.287 17.171 24.324 29.777 15.656 15.607-10.74 36.617 1.414 35.311 20.258-1.205 17.369-21.034 26.805-35.314 16.974-12.591-8.664-29.773.362-29.773 15.657v49.902c-.001 24.882-20.248 45.125-45.135 45.125zm175.594-89.282c-12.539-2.47-22.244 10.934-15.971 22.076 16.842 29.912-4.877 67.206-39.355 67.206-24.887 0-45.134-20.243-45.134-45.125v-33.132c32.334 7.938 62.82-15.674 65.016-47.326 2.484-35.811-30.578-63.217-65.016-54.785v-31.133h48.94c15.296 0 24.323-17.181 15.654-29.778-10.448-15.182.974-36.64 20.266-35.3 17.368 1.204 26.811 21.019 16.979 35.303-8.671 12.598.366 29.775 15.656 29.775h38.885c16.215 12.921 26.131 33.546 26.131 54.871.001 43.028-39.385 75.756-82.051 67.348zm56.054-152.219h-22.247c7.923-32.262-15.609-62.808-47.331-65.006-35.901-2.493-63.201 30.673-54.792 65.006h-32.143v-47.93c0-15.284-17.175-24.328-29.774-15.656-14.312 9.845-34.112.355-35.314-16.974-1.31-18.909 19.762-30.957 35.312-20.259 12.598 8.664 29.776-.362 29.776-15.656v-48.899c0-24.882 20.247-45.125 45.134-45.125 34.898 0 56.572 38.136 38.872 68.048-6.605 11.166 3.182 24.942 15.928 22.332 42.82-8.797 82.578 24.055 82.578 67.252-.001 20.813-9.42 39.842-25.999 52.867z"
              fill="#20c98b"
            />
          </g>
        </svg>
      </div>
      <TitleText>Always thinking, learning and being creative.</TitleText>
      <List>
        <a
          href="https://www.github.com/ChristianWilsonEtiaba/"
          target="_blank"
          rel="noreferrer"
        >
          <ListItem>
            <Icon>
              <AiFillGithub />
            </Icon>
          </ListItem>
        </a>

        <a
          href="https://www.linkedin.com/in/daniel-christian-wilson-etiaba-3931b6b2/"
          target="_blank"
          rel="noreferrer"
        >
          <ListItem>
            <Icon>
              <AiOutlineLinkedin />
            </Icon>
          </ListItem>
        </a>
        <a href="mailto:christian.wilson.etiaba@gmail.com" rel="noreferrer">
          <ListItem>
            <Icon>
              <AiOutlineMail />
            </Icon>
          </ListItem>
        </a>
      </List>

      <AdditionalText>
        Handcrafted by @ChristianWilsonEtiaba - © {currentYear}
      </AdditionalText>

      <Copyright>
        <CopyrightText>Made with </CopyrightText>
        <RiGatsbyLine
          style={{
            fontSize: "1rem",
            marginLeft: "0.25rem",
            color: "white",
            display: "flex",
            alignItems: "center",
          }}
        />
      </Copyright>
    </Container>
  )
}

export default Footer
