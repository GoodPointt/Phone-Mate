import { toast } from 'react-toastify';
import { Formik, Field, ErrorMessage, Form } from 'formik';

import { StyledBtn, ErrorMsg, StyledInput } from '../Styled.styled';

import { INITIAL_VALUES, VALIDATION_SCHEMA } from '../../common/formik';
import { isContactExist } from '../../common/utils';
import { INewContact } from '../../common/models';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { changeFilter } from '../../redux/filterSlice';
import { addContact } from '../../redux/operations';
import { toggleModal } from '../../redux/modalSlice';

export const ContactForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const contacts: INewContact[] = useAppSelector(
    state => state.contacts.contacts
  );

  const handleSubmit = (values: { name: string; number: string }) => {
    const newContact: INewContact = {
      name: values.name.toString(),
      number: values.number.toString(),
    };

    if (isContactExist(newContact, contacts)) {
      toast.warn(`${newContact.name} is already in contacts.`);
      return;
    }
    dispatch(addContact(newContact));
    dispatch(changeFilter({ filter: '' }));
    dispatch(toggleModal());
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      <Form>
        <Field
          type="text"
          name="name"
          as={StyledInput}
          placeholder="Enter name..."
          autoFocus
        />
        <ErrorMessage name="name" component={ErrorMsg} />

        <Field
          type="tel"
          name="number"
          as={StyledInput}
          placeholder="Enter phone..."
        />
        <ErrorMessage name="number" component={ErrorMsg} />

        <StyledBtn type="submit">Add contact</StyledBtn>
      </Form>
    </Formik>
  );
};
