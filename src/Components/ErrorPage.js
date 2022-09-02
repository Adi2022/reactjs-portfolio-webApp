import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import error from '../assets/error.png';
import { Button } from '../common/Button';

const ErrorPage = () => {
  return (
    <Wrapper>
    <img src={error}/>
    <NavLink to="/home">
    <Button className='btn'>Back to Home Page</Button>
    </NavLink>
   
    </Wrapper>
  )
}


const Wrapper=styled.section`
padding:9rem 0;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;

.btn{
    margin-top:3rem;
    font-size:1.8rem;
}

`;
export default ErrorPage