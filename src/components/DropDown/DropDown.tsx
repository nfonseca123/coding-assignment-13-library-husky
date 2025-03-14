import React from 'react';
import styled from 'styled-components';
import { DropDownProps } from './DropDown.types';

const StyledDropDown = styled.div<{
  bgColor: string;
  hoverColor: string;
  disabled: boolean;
}>`
  .dropbtn {
    background-color: ${(props) => (props.disabled ? 'gray' : props.bgColor)};
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  /* Dropdown Content (Hidden by Default) */
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: ${(props) => (props.disabled ? 'gray' : props.bgColor)};
    min-width: 160px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  /* Buttons inside the dropdown */
  .dropdown-content button {
    color: white;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    background: none;
    border: none;
    width: 100%;
    text-align: left;
  }

  /* Change color of dropdown buttons on hover */
  .dropdown-content button:hover {
    background-color: ${(props) =>
      props.disabled ? 'gray' : props.hoverColor};
  }

  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content {
    display: ${(props) => (props.disabled ? 'none' : 'block')};
  }

  /* Change the background color of the dropdown button when the dropdown content is shown */
  .dropdown:hover .dropbtn {
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    background-color: ${(props) =>
      props.disabled ? 'gray' : props.hoverColor};
  }
`;

const DropDown: React.FC<DropDownProps> = ({
  dropDownName,
  optionOneText,
  optionTwoText,
  optionThreeText,
  bgColor,
  hoverColor,
  disabled,
}) => {
  return (
    <StyledDropDown
      bgColor={bgColor || 'blue'}
      hoverColor={hoverColor || 'darkblue'}
      disabled={disabled || false}
    >
      <div className="dropdown">
        <button className="dropbtn">{dropDownName}</button>
        <div className="dropdown-content">
          <button onClick={(e) => e.preventDefault()}>{optionOneText}</button>
          <button onClick={(e) => e.preventDefault()}>{optionTwoText}</button>
          <button onClick={(e) => e.preventDefault()}>{optionThreeText}</button>
        </div>
      </div>
    </StyledDropDown>
  );
};

export default DropDown;
