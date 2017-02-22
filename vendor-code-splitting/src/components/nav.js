import React from 'react';
import { Link } from 'react-router';

const Nav = () => {
  return (
    <div>
      <Link to='/'>Home</Link>&nbsp;
      <Link to='/address'>Address</Link>
    </div>
  );
};

export default Nav;
