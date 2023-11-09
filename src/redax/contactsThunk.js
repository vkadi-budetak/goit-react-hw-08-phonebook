import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  requestAddContact,
  requestAllContacts,
  requestDeleteContact,
} from 'services/phonebookApi';

export const fetchContacts = createAsyncThunk(
  'contacts/getAll',
  async (_, thunkAPI) => {
    try {
      const contacts = await requestAllContacts();

      return contacts; //це буде записано в екшин пейлоад
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async (newContact, thunkAPI) => {
    try {
      const contact = await requestAddContact(newContact);

      return contact; //це буде записано в екшин пейлоад
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (contactId, thunkAPI) => {
    try {
      const deleteContact = await requestDeleteContact(contactId);

      return deleteContact; //це буде записано в екшин пейлоад
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);
