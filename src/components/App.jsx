import React, { Suspense, lazy, useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';

import { StyledAppContainer } from 'App.styled';
import Navigation from './Navigation/Navigation';
import RestictedRoute from './RestictedRoute/RestictedRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthisLoading } from 'redax/auth.selectors';
import { refreshThunk } from 'redax/authReducerThunk';
import Loader from './Loader/Loader';

const RegisterPage = lazy(() => import('../page/RegisterPage'));
const LoginPage = lazy(() => import('../page/LoginPage'));
const ContactsPage = lazy(() => import('../page/ContactsPage'));

const appRoutes = [
  {
    path: 'register',
    element: (
      <RestictedRoute>
        <RegisterPage />
      </RestictedRoute>
    ),
  },
  {
    path: 'login',
    element: (
      <RestictedRoute>
        <LoginPage />
      </RestictedRoute>
    ),
  },
  {
    path: 'contacts',
    element: (
      <PrivateRoute>
        <ContactsPage />
      </PrivateRoute>
    ),
  },
];

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectAuthisLoading);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <StyledAppContainer>
      <Navigation />

      {isRefreshing ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <Routes>
            {appRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </Suspense>
      )}
    </StyledAppContainer>
  );
};

export default App;
