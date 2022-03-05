import React from 'react';
import { Button, Container } from 'react-bootstrap';

const welcomeStyle = {
  padding: '2rem 1rem',
  marginBottom: '2rem',
  backgroundColor: '#e9ecef',
  borderRadius: '.3rem',
};

const Welcome = () => {
  return (
    <Container style={welcomeStyle}>
      <h1>Images Gallery</h1>
      <p>
        This is simple application that retrieves photos using Unsplash API. In
        order to start enter any search term in the input field.
      </p>
      <p>
        <Button variant="primary" href="https://unsplash.com" target="_blank">
          Learn more
        </Button>
      </p>
    </Container>
  );
};

export default Welcome;
