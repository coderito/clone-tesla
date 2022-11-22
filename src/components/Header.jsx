import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { selectCars } from "../features/carSlice";
import { useSelector } from "react-redux";


export const Header = () => {
  const [burger, setBurger] = useState(false)
  const cars = useSelector(selectCars)

  return (
    <Container>
      <Logo>
        <a>
          <img src="img/logo.svg" alt="Logo Tesla" />
        </a>
      </Logo>
      <Models>
        
        <ol>
          {cars && cars.map((car, index) => (
            <li key={index}>{car}</li>
          ))}
          
        </ol>
      </Models>
      <Navigate>
        <ol>
          <li>Shop</li>
          <li>Account</li>
          <li onClick={() => setBurger(true)}>Menu</li>
        </ol>
      </Navigate>
      <CustomMenu onClick={() => setBurger(true)}>Menu</CustomMenu>
      <BurgerNav show={burger}>
        <CloseWrapper onClick={() => setBurger(!burger)}>
          <CustomIconClose />
        </CloseWrapper>
        <li>Existing Inventory</li>
        <li>Used Inventory</li>
        <li>Trade-In</li>
        <li>Test Drive</li>
        <li>Insurance</li>
        <li>Cybertruck</li>
        <li>Roadster</li>
        <li>Semi</li>
        <li>Charging</li>
        <li>Powerall</li>
        <li>Commercial Energy</li>
        <li>Utilities</li>
        <li>Find Us</li>
        <li>Support</li>
        <li>Investor Relations</li>
      </BurgerNav>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 98%;
  align-items: center;
  min-height: 56px;
  position: fixed;
  justify-content: space-between;
  z-index: 1;

  ol {
    display: flex;
    list-style-type: none;
    justify-content: center;
    gap: 15px;
  }
  li {
    transition: color 0.33s ease;
    cursor: pointer;
    padding: 4px 8px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    &:hover {
      border-radius: 3px;
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
`;

const Logo = styled.div`
  margin-left: 30px;
  padding-right: 9vw;
  cursor: pointer;
`;

const Models = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  left: 0;
  @media (max-width: 1200px) {
    display: none;
  }
`;
const Navigate = styled.div`
  @media (max-width: 1200px) {
    display: none;
  }
`;

const CustomMenu = styled.li`
  list-style-type: none;
  background-color: rgba(244, 244, 244, 0.65);
  border-radius: 4px;
  @media (min-width: 1200px) {
    display: none;
    place-items: center;
}
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  justify-content: flex-start;
  padding-top: 10px;
  transform: ${props => !props.show ? 'translateX(100%)' : 'translateX(0%)'};
  transition: transform 0.2s ease-in;
  li {
    padding: 10px;
    color: #393c41;
    cursor: pointer;
  }
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;
`;

const CustomIconClose = styled(CloseIcon)`
  cursor: pointer;
`;
