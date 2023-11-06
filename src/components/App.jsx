import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redax/contactsThunk';

import ContactForm from './ContactForm/ContactForm';

import ContactList from './ContactList/ContactList';

import Filter from './Filter/Filter';

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
