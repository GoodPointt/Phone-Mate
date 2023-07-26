import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { INewContact } from '../common/models';

axios.defaults.baseURL = 'https://6463d446127ad0b8f89270c2.mockapi.io/tasks';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact: INewContact, { rejectWithValue }) => {
    try {
      const response = await axios.post('/contacts', newContact);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async (contactId: string, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error: any) {
      rejectWithValue(error.message);
    }
  }
);

export const toggleFavorite = createAsyncThunk(
  'contacts/toggleFavorie',
  async (contact: INewContact, { rejectWithValue }) => {
    try {
      const response = await axios.put(`/contacts/${contact.id}`, {
        isFavorite: !contact.isFavorite,
      });
      return response.data;
    } catch (error: any) {
      rejectWithValue(error.message);
    }
  }
);
