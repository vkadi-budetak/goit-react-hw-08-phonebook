import { createSelector } from '@reduxjs/toolkit';

const selectContactsStore = state => state.contactStore;

export const selectContacts = createSelector(
  selectContactsStore,
  contactStore => contactStore.contacts
);
export const selectContactsIsLoading = createSelector(
  selectContactsStore,
  contactStore => contactStore.isLoading
);
export const selectContactsError = createSelector(
  selectContactsStore,
  contactStore => contactStore.error
);
export const selectContactsFilter = createSelector(
  selectContactsStore,
  contactStore => contactStore.filter
);
