import React from 'react'
import styled from 'styled-components'

export const Header = () => {
  return (
      <Container>
        <Logo>
          <a>
            <img src="img/logo.svg" alt="Logo Tesla" />
          </a>
        </Logo>
        <Models>
          <ol>
            <li>Model S</li>
            <li>Model 3</li>
            <li>Model X</li>
            <li>Model Y</li>
            <li>Solar Roof</li>
            <li>Solar Panels</li>
          </ol>
        </Models> 
        <Navigate>
          <ol>
            <li>Shop</li>
            <li>Account</li>
            <li>Menu</li>        
          </ol>
        </Navigate>
      </Container>
  )
}


const Container = styled.div`
  display: flex;
  width: 98%;
  align-items: center;
  min-height: 56px;
  position: fixed; 
  justify-content: space-between;

  ol{ 
    display: flex;
    list-style-type: none;
    justify-content: center;
    gap: 15px;
  }
  li{
    transition: color .33s ease;
    cursor: pointer;
    padding: 4px 8px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    &:hover{
      border-radius: 3px;
    }
  }

`

const Logo = styled.div`
  margin-left: 30px;
  padding-right: 9vw;
  cursor: pointer;
`

const Models = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right : 0;
  left: 0;

`
const Navigate = styled.div`
  
`
