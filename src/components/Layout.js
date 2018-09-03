import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Container, Divider, Icon } from 'semantic-ui-react';
import AppBar from './AppBar';

import { pullRight, h1 } from './Layout.css';

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <Container textAlign={"right"}>
        {children}
        <Divider />
        <p className={pullRight}>
          Made with__<Icon name="heart" color="red" />
        </p>
      </Container>
    </div>
  );
};

export default Layout;