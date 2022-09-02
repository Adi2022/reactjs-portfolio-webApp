import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../common/Button";
import homebanner from "../assets/homebanner.webp";
import { AppContext } from "../Context";
import Typewriter from "typewriter-effect";

const HomeBanner = (props) => {
  const { name, image } = useContext(AppContext);
  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="home-data">
          <p className="home-small-heading">THIS IS ME</p>
          <h1 className="home-heading">{name}</h1>
          <p className="home-para">
            I'm {name}.
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: [
                  "I am a Frontend Developer",
                  "I am also a Full Stack Devloper",
                  "I am also a YouTuber",
                ],
              }}
            />
          </p>
          <Button className="btn hire-me">
            <NavLink to="/contact">Hire me</NavLink>
          </Button>
        </div>

        <div className="home-banner-image">
          <picture>
            <img src={image} alt="banner" className="image" loading="lazy" />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

 
  .home-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .home-small-heading {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }
  .btn {
    max-width: 16rem;
  }
  .home-heading {
    text-transform: uppercase;
    font-size: 6.5rem;
  }

  .home-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .home-banner-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }
  .image {
    max-width: 80%;
  }
`;
export default HomeBanner;
