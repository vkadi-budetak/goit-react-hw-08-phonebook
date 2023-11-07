import React, { Suspense, lazy } from 'react';

import { Route, Routes } from 'react-router-dom';

import { StyledAppContainer } from 'App.styled';
import Navigation from './Navigation/Navigation';

const RegisterPage = lazy(() => import('./page/RegisterPage'));
const LoginPage = lazy(() => import('./page/LoginPage'));
const ContactsPage = lazy(() => import('./page/ContactsPage'));

const appRoutes = [
  { path: 'register', element: <RegisterPage /> },
  { path: 'login', element: <LoginPage /> },
  { path: 'contacts', element: <ContactsPage /> },
];

const App = () => {

  return (
    <StyledAppContainer>
      <Navigation />
      
      <Suspense>
      <Routes>
          {appRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Suspense>
      
    </StyledAppContainer>
  );
};

export default App;
