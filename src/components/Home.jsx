import React from 'react'
import styled from 'styled-components'
import { Section } from './Section'


export const Home = () => {
  return (
    <Container>
      <Section 
         bgImage="model-3.jpg"
         title="Model 3"
      />
      <Section 
         bgImage="model-y.jpg"
         title="Model Y"
      />
      <Section 
         bgImage="model-s.jpg"
         title="Model S"
      />
      <Section 
         bgImage="model-x.jpg"
         title="Model X"
      />
      <Section 
         bgImage="solar-panel.jpg"
         title="Solar Panels"
         description='Lowest Cost Solar Panels in America'
         leftBtnText='Orden Now'
         rightBtnText='Learn More'
      />
       <Section 
         bgImage="solar-roof.jpg"
         title="Solar Roof"
         description='Produce Clean Energy From Your Roof'
         leftBtnText='Orden Now'
         rightBtnText='Learn More'
      />
      <Section 
         bgImage="accessories.jpg"
         title="Accessories"
         description=''
         leftBtnText='Orden Now'
         rightBtnText=''
         activeDownArrow
      />
    </Container>
  )
}

const Container = styled.div`
   height: 100vh;
`
