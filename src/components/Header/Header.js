import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

import Logo from './Logo/Logo';
import User from './User/User';
import { Row } from 'simple-flexbox';

const Header = () => (
  <div className={styles.Header}>
    <Row horizontal="space-between" vertical="center">
   <Logo />
   <User />

    </Row>

  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
