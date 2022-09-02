import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import Navbar from './Navbar';
import styled from 'styled-components';
const Header = () => {

  const styleImage={
    width:'20%',
    
  }
  return (
    <MainHeader>
    <NavLink to="/home">
    <img src={logo} style={styleImage} className="logo" alt="image"/>
    </NavLink>
    <Navbar/>
    </MainHeader>
  )
}


const MainHeader=styled.header`
 padding:0 4.8rem;
 height:10rem;
 background-color:${({theme})=>theme.colors.bg};
 display:flex;
 justify-content:space-bewteen;
 align-items:center;

 .logo{
  height:auto;
  max-width:30%;
 }
`;

export default Header;