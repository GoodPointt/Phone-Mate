import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INewContact } from '../common/utils';
import { addContact, fetchContacts, removeContact } from './operations';
import { onAddSucces, onRemoveSucces } from '../common/toasts';

interface ContactsState {
  contacts: INewContact[];
  status: 'loading' | 'resolved' | 'rejected' | '';
  error: null | string;
}

const initialState: ContactsState = {
  contacts: [],
  status: '',
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchContacts.pending.type]: state => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchContacts.fulfilled.type]: (
      state,
      action: PayloadAction<INewContact[]>
    ) => {
      state.status = 'resolved';
      state.error = null;
      state.contacts = action.payload;
    },
    [fetchContacts.rejected.type]: (state, action: PayloadAction<string>) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
    [addContact.pending.type]: state => {
      state.status = 'loading';
      state.error = null;
    },
    [addContact.fulfilled.type]: (
      state,
      action: PayloadAction<INewContact>
    ) => {
      state.status = 'resolved';
      state.error = null;
      state.contacts = [...state.contacts, action.payload];
      onAddSucces(action.payload.name);
    },
    [addContact.rejected.type]: (state, action: PayloadAction<string>) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
    [removeContact.pending.type]: state => {
      state.status = 'loading';
      state.error = null;
    },
    [removeContact.fulfilled.type]: (
      state,
      action: PayloadAction<INewContact>
    ) => {
      state.status = 'resolved';
      state.error = null;
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload.id
      );
      onRemoveSucces(action.payload.name);
    },
    [removeContact.rejected.type]: (state, action: PayloadAction<string>) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  },
});

export default contactsSlice.reducer;
