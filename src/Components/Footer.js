import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../common/Button";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-tab">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started ?</h3>
            <h3>Talk to us today</h3>
          </div>
          <div className="contact-btn">
            <NavLink to="/home">
              <Button>Get Started</Button>
            </NavLink>
          </div>
        </div>
      </section>

      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about-section">
            <h3>Aditya Trivedi</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className="footer-about-subscribe">
            <h3>Subscribe to get updates</h3>
            <form action="#">
              <input
                type="email"
                required
                autoComplete="off"
                placeholder="Email"
              />
              <input type="submit" value="Subscribe" />
            </form>
          </div>

          <div className="footer-social">
            <h3>Follow us</h3>
            <div className="footer-icons">
              <div className="icons">
                <FaFacebook />
              </div>
              <div className="icons">
                <FaInstagram />
              </div>
              <div className="icons">
                <FaYoutube />
              </div>
            </div>
          </div>
          <div className="footer-contact">
            <h3>Call us</h3>
            <h3>+911234567890</h3>
          </div>
        </div>
        <div className="footer-bottom-section">
         <hr/>
         <div className="container grid grid-two-column">

    <p>
      @{new Date().getFullYear() }WEB DEVELOPMENT. All Rights Reserved
    </p>
    <div>
      <p>PRIVACY POLICY</p>
      <p>TERMS & CONDITIONS</p>
    </div>
         </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-tab {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    transform:translateY(50%);
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};

    
  }

  .grid .contact-btn {
    justify-self: end;
    align-self: center;
  }
  footer {

    .footer-bottom-section{
      padding-top:9rem;
  
  
      hr{
  margin-top:2rem;
  color: ${({ theme }) => theme.colors.hr};
  height:0.1px;
  
      }
    }

    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};

    .footer-icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
      }
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        
      }
    }
  
  }

  @media (max-width:${({ theme }) => theme.media.mobile}) {
  .contact-tab{
   max-width:95vw; 
   padding:2rem ;
   display:flex;
   justify-content:center;
   align-items:center;


   .contact-btn{
    text-align:center;
    justify-self:flex-start;
   }
   
  
   
   
  }
}
`;
export default Footer;
