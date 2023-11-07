import { StyledNavLink } from 'App.styled';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectAuthAuthenticated } from 'redax/auth.selectors';

const Navigation = () => {
  const authenticated = useSelector(selectAuthAuthenticated);

  return (
    <nav>
      {authenticated ? (
        <><StyledNavLink className="header-link" to="/contacts">
        Contacts
      </StyledNavLink>
       <button>Log Out</button></>
      ) : (
        <>
          <StyledNavLink className="header-link" to="/register">
            Register
          </StyledNavLink>
          <StyledNavLink className="header-link" to="/login">
            Login
          </StyledNavLink>
        </>
      )}
    </nav>
  );
};

export default Navigation;
