import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import Dropdown from "./QuranDropDown";
// Styled Components
const Nav = styled.nav`
  background: #333;
  color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-style: normal;
`;

const Logo = styled.img`
  font-size: 1.5rem;
  font-weight: bold;
  heigth: 70px;
  width: 70px;
  border-radius: 100px;
  margin-left: 10px;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    display: none;
  }
`;

const NavItem = styled.li`
  margin: 0 15px;

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    color: red;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  //   background-color: red;
`;

const Button = styled.button`
  background: #007bff;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background: #0056b3;
  }
`;

const LanguageSwitcher = styled(Button)`
  background: transparent; /* Transparent background for a cleaner look */
  //border: 2px solid #007bff; /* Border color that matches your theme */
  border-radius: 5px; /* Slightly rounded corners */
  color: lightblue; /* Text color to match the border */
  cursor: pointer; /* Pointer cursor on hover */
  font-size: 14px; /* Adjust font size as needed */
  padding: 8px 16px; /* Padding for spacing */
  text-align: center; /* Center text */
  text-decoration: none; /* Remove underline from links */
  transition: all 0.3s ease;

  // &:hover {
  //   // background: #007bff; /* Background color on hover */
  //   color: white; /* Change text color on hover */
  //   border-color: #0056b3;
  // }

  &:active {
    // background: #0056b3; /* Background color when button is pressed */
    border-color: #004085; /* Darker border color when pressed */
    transform: translateY(1px);
  }
`;

const ThemeToggle = styled(Button)`
  background: transparent; /* Transparent background for a cleaner look */
  //border: 2px solid #007bff; /* Border color that matches your theme */
  border-radius: 5px; /* Slightly rounded corners */
  color: #007bff; /* Text color to match the border */
  cursor: pointer; /* Pointer cursor on hover */
  font-size: 14px; /* Adjust font size as needed */
  padding: 8px 16px; /* Padding for spacing */
  text-align: center; /* Center text */
  text-decoration: none; /* Remove underline from links */
  transition: all 0.3s ease;

  // &:hover {
  //   // background: #007bff; /* Background color on hover */
  //   color: white; /* Change text color on hover */
  //   border-color: #0056b3;
  // }

  &:active {
    //background: #0056b3; /* Background color when button is pressed */
    border-color: #004085; /* Darker border color when pressed */
    transform: translateY(1px);
  }
`;

function Navbar() {
  const { i18n } = useTranslation();
  const [darkMode, setDarkMode] = React.useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.className = !darkMode ? "dark-mode" : "";
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <Nav>
      <Logo src="logo.webp"></Logo>
      <NavList>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <NavLink as="span" onClick={handleDropdownToggle}>
            Quran
          </NavLink>
          <Dropdown
            isOpen={dropdownOpen}
            toggleDropdown={handleDropdownToggle}
          />
        </NavItem>
        <NavItem>
          <NavLink href="/hadith">Hadith</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/fiqh">Fiqh</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/usool">Usool</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/bdai">Brailvi+Deobandi+Ahle Hadith Ikhtilaaf</NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="/ssi">Sunni-Shia Ikhtilaaf</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/about">About</NavLink>
        </NavItem>
      </NavList>
      <Controls>
        <LanguageSwitcher onClick={() => changeLanguage("en")}>
          EN
        </LanguageSwitcher>
        <LanguageSwitcher onClick={() => changeLanguage("hi")}>
          HI
        </LanguageSwitcher>
        <LanguageSwitcher onClick={() => changeLanguage("ur")}>
          UR
        </LanguageSwitcher>
        <ThemeToggle onClick={toggleTheme}>
          {/* <MdDarkMode /> */}

          {darkMode ? (
            <MdDarkMode style={{ background: "black" }} />
          ) : (
            <MdOutlineDarkMode style={{ color: "white" }} />
          )}
        </ThemeToggle>
      </Controls>
    </Nav>
  );
}

export default Navbar;
