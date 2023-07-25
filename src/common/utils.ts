export interface INewContact {
  id?: string;
  name: string;
  number: string;
  createdAt?: string;
}

export type ThandleChange = React.ChangeEvent<HTMLInputElement>;

export const isContactExist = (
  newContact: INewContact,
  contactsArr: INewContact[]
): Boolean => {
  return contactsArr.find(
    contact =>
      contact.name.toLowerCase().trim() === newContact.name.toLowerCase().trim()
  )
    ? true
    : false;
};
