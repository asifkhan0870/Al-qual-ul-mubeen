// Dropdown.js
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownContent = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  border-radius: 10px;
  position: absolute;
  margin-top: 5px;
  margin-left: -32px;
  background-color: white;
  color: white;
  min-width: 160px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 5px;
`;

const DropdownItem = styled(Link)`
  color: black;
  padding: 12px 16px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  display: block;

  &:hover {
    // background-color: #f1f1f1;
  }
`;

const QuranDropDown = ({ isOpen, toggleDropdown }) => {
  return (
    <DropdownContainer>
      <DropdownContent isOpen={isOpen}>
        <DropdownItem to="/quran/readquran">Recitation</DropdownItem>
        <DropdownItem to="/quran/translation">Translation</DropdownItem>
        <DropdownItem to="/quran/tafseer">Tafseer</DropdownItem>
        {/* Add more dropdown items as needed */}
      </DropdownContent>
    </DropdownContainer>
  );
};

export default QuranDropDown;
