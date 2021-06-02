import { Link } from "gatsby"
import React, { useState } from "react"

import styled from "styled-components"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"

import Drawer from "./drawer"
import Container from "./container"

const Menu = styled.ul`
  display: none;
  list-style: none;
  margin: 0;
  width: 16rem;
  @media (min-width: 1024px) {
    align-items: center;
    display: flex;
    justify-content: space-around;
  }
`

const MenuItem = styled.li`
  color: #00343d;
  font-size: 0.875rem;
  margin: 0;
  text-decoration: none;
  &:hover {
    color: #0bd8a2;
    cursor: pointer;
  }
`

const MenuItemButton = styled.button`
  background: transparent;
  border: solid 2px #0bd8a2;
  border-radius: 0.25rem;
  color: #0bd8a2;
  padding: 0.5rem;
  transition: background 0.3s ease-in-out;
  &:hover {
    background: #0bd8a2;
    color: white;
    cursor: pointer;
  }
`

const ResponsiveButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: block;
  font-size: 1.5rem;
  z-index: 3;
  @media (min-width: 1024px) {
    display: none;
  }
`

const Header = () => {
  // responsive navbar status
  const [navbarStatus, setNavbarStatus] = useState(false)
  const responsiveStyles = {
    "padding-top": "2.5rem",
  }

  return (
    <Container
      alignItems="center"
      backgroundColor="white"
      display="flex"
      height="5rem"
      margin="0 auto 1.45rem"
      maxWidth="80rem"
      padding="3rem 0 0.5rem"
      width="100%"
      zIndex={3}
      responsiveStyles={responsiveStyles}
    >
      <Link
        to="/"
        style={{
          color: `#141c3a`,
          textDecoration: `none`,
          zIndex: 3,
        }}
      >
        <div style={{ margin: 10 }}>
        <svg
          style={{ margin: 0 }}
          xmlns="http://www.w3.org/2000/svg"
          id="Capa_1"
          enable-background="new 0 0 512 512"
          height="50"
          viewBox="0 0 512 512"
          width="120px"
        >
          <g>
            <path
              d="m483.513 187.632c0-52.685-41.519-95.856-93.557-98.528 8.78-46.366-26.97-89.104-73.821-89.104-24.567 0-46.416 11.852-60.134 30.136-13.717-18.284-35.567-30.136-60.134-30.136-46.587 0-82.074 42.171-73.999 88.11-84.802 4.506-124.135 107.083-65.338 167.389-58.758 60.266-19.539 163.03 65.517 167.397-8.78 46.365 26.97 89.104 73.821 89.104 24.567 0 46.416-11.852 60.134-30.136 13.717 18.284 35.566 30.136 60.133 30.136 46.587 0 82.074-42.171 73.999-88.11 51.956-2.761 93.379-45.895 93.379-98.52 0-26.434-10.198-51.386-27.946-69.742 17.945-18.116 27.946-42.073 27.946-67.996zm-342.972-68.35c12.546 2.468 22.242-10.938 15.971-22.076-16.841-29.912 4.878-67.206 39.355-67.206 24.887 0 45.134 20.243 45.134 45.125v32.104c-34.226-8.38-67.512 18.793-65.016 54.786 2.227 32.116 33.113 55.155 65.016 47.325v31.159h-48.94c-15.294 0-24.326 17.18-15.657 29.774 9.833 14.284.39 34.1-16.979 35.304-19.236 1.328-30.756-20.058-20.266-35.3 8.669-12.595-.358-29.778-15.654-29.778h-38.896c-16.432-12.993-26.119-32.812-26.119-53.869 0-43.028 39.386-75.756 82.051-67.348zm55.326 362.718c-34.898 0-56.572-38.136-38.872-68.048 6.595-11.149-3.156-24.944-15.928-22.332-42.82 8.797-82.578-24.055-82.578-67.252 0-21.057 9.688-40.875 26.118-53.869h22.101c-8.339 34.034 18.599 67.516 54.792 65.006 31.723-2.198 55.255-32.748 47.331-65.006h32.17v47.929c0 15.287 17.171 24.324 29.777 15.656 15.607-10.74 36.617 1.414 35.311 20.258-1.205 17.369-21.034 26.805-35.314 16.974-12.591-8.664-29.773.362-29.773 15.657v49.902c-.001 24.882-20.248 45.125-45.135 45.125zm175.594-89.282c-12.539-2.47-22.244 10.934-15.971 22.076 16.842 29.912-4.877 67.206-39.355 67.206-24.887 0-45.134-20.243-45.134-45.125v-33.132c32.334 7.938 62.82-15.674 65.016-47.326 2.484-35.811-30.578-63.217-65.016-54.785v-31.133h48.94c15.296 0 24.323-17.181 15.654-29.778-10.448-15.182.974-36.64 20.266-35.3 17.368 1.204 26.811 21.019 16.979 35.303-8.671 12.598.366 29.775 15.656 29.775h38.885c16.215 12.921 26.131 33.546 26.131 54.871.001 43.028-39.385 75.756-82.051 67.348zm56.054-152.219h-22.247c7.923-32.262-15.609-62.808-47.331-65.006-35.901-2.493-63.201 30.673-54.792 65.006h-32.143v-47.93c0-15.284-17.175-24.328-29.774-15.656-14.312 9.845-34.112.355-35.314-16.974-1.31-18.909 19.762-30.957 35.312-20.259 12.598 8.664 29.776-.362 29.776-15.656v-48.899c0-24.882 20.247-45.125 45.134-45.125 34.898 0 56.572 38.136 38.872 68.048-6.605 11.166 3.182 24.942 15.928 22.332 42.82-8.797 82.578 24.055 82.578 67.252-.001 20.813-9.42 39.842-25.999 52.867z"
              fill="#20c98b"
            />
          </g>
        </svg>
        <p color="#20c98b"><b>ChrisTheDev</b></p>
        </div>
      </Link>
      <Menu>
        <Link
          to="/about"
          style={{
            color: `#141c3a`,
            textDecoration: `none`,
          }}
        >
          <MenuItem>About me</MenuItem>
        </Link>
        <Link
          to="/contact"
          style={{
            color: `#141c3a`,
            textDecoration: `none`,
          }}
        >
          <MenuItem>
            <MenuItemButton>Get in Touch</MenuItemButton>
          </MenuItem>
        </Link>
      </Menu>

      <ResponsiveButton onClick={() => setNavbarStatus(!navbarStatus)}>
        {navbarStatus ? <AiOutlineClose /> : <AiOutlineMenu />}
      </ResponsiveButton>

      <Drawer isOpen={navbarStatus} />
    </Container>
  )
}

export default Header
