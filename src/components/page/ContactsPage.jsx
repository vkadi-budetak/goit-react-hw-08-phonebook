import ContactForm from 'components/ContactForm/ContactForm'
import ContactList from 'components/ContactList/ContactList'
import Filter from 'components/Filter/Filter'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchContacts } from 'redax/contactsThunk'


const ContactsPage = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <div>
          <h1>Phonebook</h1>
          {/* <ContactForm />
          <h2>Contacts</h2>
          <Filter />
          <ContactList /> */}
        </div>
  )
}

export default ContactsPage