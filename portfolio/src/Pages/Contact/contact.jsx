import React from 'react';
import styled from 'styled-components';

const Centerbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Utilisez la hauteur de la vue pour centrer verticalement */
`;

const ContactWrapper = styled.div`
  background-color: black;
  color: white;
  padding: 10px 20px; /* Réduisez la marge intérieure */
  width: 60%; /* Réglez la largeur */
  min-width: 400px;
`;

const Form = styled.form`
  label {
    display: block;
    margin-bottom: 5px;
  }

  input[type="text"],
  textarea {
    width: 100%;
    padding: 5px;
    margin-bottom: 10px;
  }

  input[type="submit"] {
    background-color: black;
    box-shadow: red 1px 0 15px 5px;
    font-family: 'Virgo', sans-serif;
    text-shadow: red 1px 0 3px;
    color: red;
    padding: 10px 20px;
    cursor: pointer;
    border: red;
    border-radius: 20px;
  }

  input[type="submit"]:hover {
    background-color: red;
    box-shadow: red 1px 0 15px 5px;
    font-family: 'Virgo', sans-serif;
    text-shadow: black 1px 0 3px;
    color: black;
    padding: 10px 20px;
    cursor: pointer;
    border: red;
    border-radius: 20px;
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
