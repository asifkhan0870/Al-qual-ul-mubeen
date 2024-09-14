import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

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

  return (
    <Nav>
      <Logo src="logo.webp" alt="Logo" />
      <NavList>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/quran">Quran</NavLink>
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
          {darkMode ? (
            <MdDarkMode style={{ color: "white" }} />
          ) : (
            <MdOutlineDarkMode style={{ color: "black" }} />
          )}
        </ThemeToggle>
      </Controls>
    </Nav>
  );
}

export default Navbar;

// Styled Components
const Nav = styled.nav`
  background: #333;
  color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-style: normal;
  position: relative; /* To position the elements correctly */
  flex-wrap: wrap; /* Allows items to wrap on smaller screens */

  @media (max-width: 768px) {
    justify-content: space-between; /* Ensure space between items */
  }
`;

const Logo = styled.img`
  font-size: 1.5rem;
  font-weight: bold;
  height: 50px; /* Adjust height */
  width: auto; /* Adjust width to maintain aspect ratio */
  border-radius: 100px;
  margin-left: 10px;

  @media (max-width: 768px) {
    margin: 0;
    height: 40px; /* Adjust height for smaller screens */
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  flex: 1; /* Take up remaining space to push items to the right */

  @media (max-width: 768px) {
    display: none; /* Hide navigation links on smaller screens */
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
  gap: 10px; /* Space between language switcher and theme toggle */
  position: absolute; /* Position controls on the right side */
  right: 10px; /* Adjust right position */
  top: 50%;
  transform: translateY(-50%); /* Center vertically */

  @media (max-width: 768px) {
    position: static; /* Reset position for smaller screens */
    margin-top: 10px; /* Add margin-top */
  }
`;

const Button = styled.button`
  // background: #007bff;
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
  background: transparent;
  // border: 2px solid #007bff;
  color: lightblue;
  cursor: pointer;
  font-size: 14px;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #007bff;
    color: white;
  }

  &:active {
    border-color: #004085;
    transform: translateY(1px);
  }
`;

const ThemeToggle = styled(Button)`
  background: transparent;
  // border: 2px solid #007bff;
  color: #007bff;
  cursor: pointer;
  font-size: 14px;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #007bff;
    color: white;
  }

  &:active {
    border-color: #004085;
    transform: translateY(1px);
  }
`;
