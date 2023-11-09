import { Button, ButtonGroup } from '@mui/material';
import { StyledNavLink } from 'App.styled';
import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectAuthAuthenticated } from 'redax/auth.selectors';

const Navigation = () => {
  const authenticated = useSelector(selectAuthAuthenticated);

  return (
    <nav>
      {authenticated ? (
        <>
          <Button variant="contained">
            <StyledNavLink className="header-link" to="/contacts">
              Contacts
            </StyledNavLink>
          </Button>
          <UserMenu />
        </>
      ) : (
        <>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>
              <StyledNavLink className="header-link" to="/register">
                Register
              </StyledNavLink>
            </Button>
            <Button>
              <StyledNavLink className="header-link" to="/login">
                Login
              </StyledNavLink>
            </Button>
          </ButtonGroup>
        </>
      )}
    </nav>
  );
};

export default Navigation;
