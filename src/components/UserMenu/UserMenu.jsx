import { Button } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthUserData } from 'redax/auth.selectors';

import { logOutThunk } from 'redax/authReducerThunk';

function UserMenu() {
  const dispatch = useDispatch();
  const userData = useSelector(selectAuthUserData);

  const onLogOut = () => {
    dispatch(logOutThunk());
  };

  return (
    <div>
      <p>{userData.name}</p>
      <p>{userData.email}</p>
      <Button onClick={onLogOut} variant="outlined" color="error" size="small">
        LogOut
      </Button>
    </div>
  );
}

export default UserMenu;
