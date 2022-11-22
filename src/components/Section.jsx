import React from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";

export const Section = ({
  bgImage,
  title,
  description = "Schedule a Test Drive",
  leftBtnText = "Custom Order",
  rightBtnText = "Existin Inventory",
  activeDownArrow = false,
}) => {
  return (
    <Wrap bgImage={bgImage}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>
            <a href="">{description}</a>
          </p>
        </ItemText>
      </Fade>
      <Buttons>
        <ButtonGroup>
          <Fade bottom>
            <LeftButton>{leftBtnText}</LeftButton>
          
          {rightBtnText && <RighButton>{rightBtnText}</RighButton>}
          </Fade>
        </ButtonGroup>
        {!activeDownArrow ? <DownArrow src="/img/down-arrow.svg" /> : ""}
      </Buttons>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("/img/${props.bgImage}")`};
`;

const ItemText = styled.div`
  padding-top: 17vh;
  text-align: center;
  letter-spacing: -0.7px;

  h1 {
    font-weight: 500;
    font-size: 40px;
    line-height: 36px;
  }
  p {
    font-size: 14px;
    font-weight: 300;
    margin-top: 15px;
  }

  a {
    text-decoration: none;
    box-shadow: rgba(23, 26, 32) 0px 1px 0px 0px;
    letter-spacing: 0.1px;

  }
  @media (max-width:1200px){
    a {
      padding-bottom: 1.4vw;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 2vw;
  margin-bottom: 10vh;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 270px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 14px;
  @media (max-width: 768px) {
    width: 90vw;
  }
`;

const RighButton = styled(LeftButton)`
  background-color: rgba(244, 244, 244, 0.65);
  color: rgb(57, 60, 65);
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.8s;
  filter: invert(0.9) sepia(1);
`;

const Buttons = styled.div``;
