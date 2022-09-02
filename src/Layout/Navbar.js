import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CgMenu } from "react-icons/cg";
import { CgCloseR } from "react-icons/cg";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Nav>
      <div className={openMenu ? "menuIcon active" : "menuIcon"}>
        <ul className="navbar-list">
          <li>
            <NavLink className="navbar-links" to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-links" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-links" to="/services">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-links" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setOpenMenu(true)}
          />
          <CgCloseR
            name="close-outline"
            className="close-outline mobile-nav-icon"
            onClick={() => setOpenMenu(false)}
          />
        </div>
      </div>
    </Nav>
  );
};
const Nav = styled.nav`
  .navbar-list {
    display: flex;
    gap: 4.8rem;

    li {
      list-style: none;
    

    .navbar-links {
      &:link,
      &:visited {
        display: inline-block;
        text-decoration: none;
        font-size: 1.8rem;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.black};
        transition: color 0.3s linear;
      }
      &:hover,
      &:active {
        color: ${({ theme }) => theme.colors.helper};
      }
    }
  }
}

  .mobile-navbar-btn {
     display: none;
  .close-outline {
     display: none;
    } 
  }
  .mobile-navbar-btn[name="close-outline"] {
    display: none;
  }


  @media (max-width:${({ theme }) => theme.media.mobile}) {
    .mobile-navbar-btn {
      display: inline-block;
      z-index: 999;
      border: ${({ theme }) => theme.colors.black} .mobile-nav-icon {
        font-size: 4.2rem;
        color: ${({ theme }) => theme.colors.black};
      }
    }
    .navbar-list {
      width: 100vw;
      height: 100vh;
      position: absolute;
      left: 0;
      top: 0;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      flex-direction: column;
      transform: translatex(100%);
      li {
        &.navbar-links {
          &:link,
          &:visited {
            font-size: 4.2rem;
          }
          &:hover,
          &:active {
            color: ${({ theme }) => theme.colors.helper};
          }
        }
      }
    }
    .active .mobile-nav-icon {
      display: none;
      font-size: 4.2rem;
      position: absolute;
      top: 30%;
      right: 10%;
      color: ${({ theme }) => theme.colors.black};
      z-index: 999;
    }

    .active .close-outline {
      display: inline-block;
    }

    .active .navbar-list {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
      z-index: 999;
    }
  }
`;

export default Navbar;
