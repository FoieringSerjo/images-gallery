import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/logo.svg';

const navbarStyle = {
  backgroundColor: '#e9ecef',
};

const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container style={{ marginLeft: '-2rem' }}>
        <Logo
          alt={title}
          style={{
            maxWidth: '28rem',
            maxHeight: '6rem',
          }}
        />
      </Container>
    </Navbar>
  );
};

export default Header;
