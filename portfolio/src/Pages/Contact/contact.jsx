import React from 'react';
import styled from 'styled-components';

const Centerbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin-top: 3vh;
`;

const ContactWrapper = styled.div`
  background-color: black;
  color: white;
  padding: 1.2vw 2.4vw;
  width: 60%;
  min-width: 400px;
  opacity: 0.9;

  @media (max-width: 550px) {
    width: 40%;
    min-width: 150px;
    font-size: smaller;
  }
`;

const Form = styled.form`
  label {
    display: block;
    margin-bottom: 0.6vw;
  }

  input[type="text"],
  textarea {
    width: 100%;
    padding: 0.6vw;
    margin-bottom: 1.2vw;
  }

  input[type="submit"] {
    background-color: black;
    box-shadow: red 1px 0 1.8vw 0.6vw;
    font-family: 'Virgo', sans-serif;
    text-shadow: red 1px 0 0.36vw;
    color: red;
    padding: 1.2vw 2.4vw;
    cursor: pointer;
    border: red;
    border-radius: 1.8vw;
  }

  input[type="submit"]:hover {
    background-color: red;
    box-shadow: red 1px 0 1.8vw 0.6vw;
    font-family: 'Virgo', sans-serif;
    text-shadow: black 1px 0 0.36vw;
    color: black;
    padding: 1.2vw 2.4vw;
    cursor: pointer;
    border: red;
    border-radius: 1.8vw;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

function Contact() {
  return (
    <Centerbox>
    <ContactWrapper>
    <div>
      <header>
        <h1>Me contacter :</h1>
        <Form action="mailto:florian.bernard@outlook.com" method="post" enctype="text/plain">
          <label htmlFor="nom">Nom :</label>
          <input type="text" id="nom" name="nom" /><br />
          <label htmlFor="email">Email :</label>
          <input type="text" id="email" name="email" /><br />
          <label htmlFor="message">Message :</label><br />
          <textarea id="message" name="message" rows="4" cols="50"></textarea><br />
          <input type="submit" value="Envoyer" />
        </Form>
      </header>
    </div>
    </ContactWrapper>
    </Centerbox>
  );
}

export default Contact;
