import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <h2 className="common-heading">Feel Free TO Contact Us</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228625.11920945064!2d80.1982949576143!3d26.447105409233536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4770b127c46f%3A0x1778302a9fbe7b41!2sKanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1662098543025!5m2!1sen!2sin"
        width="100% "
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xyyvzryv"
            method="POST"
            className="form-data"
          >
            <input
              type="text"
              name="username"
              placeholder="Username"
              autoComplete="off"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
              required
            />
            <textarea
              name="message"
              cols="30"
              rows="6"
              placeholder="Message"
              autoComplete="off"
              required
            ></textarea>
            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;

  .container {
    margin-top: 6rem;
    text-align: center;

    .contact-form {
      max-width: 50rem;
      margin: auto;
    }
    .form-data {
      display: flex;
      flex-direction: column;
      gap: 3rem;
    }
  }
`;
export default Contact;
