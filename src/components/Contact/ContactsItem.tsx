import { useAppDispatch } from '../../redux/hooks';
import { INewContact } from '../../common/models';
import { changeFilter } from '../../redux/filterSlice';
import { removeContact } from '../../redux/operations';
import { StyledItem } from './ContactsItem.styled';
import { Favorite } from '../Favorite/Favorite';
import { ReactComponent as CallSvg } from '../../img/svg/call.svg';

export interface IContactsItem {
  contact: INewContact;
}

export const ContactsItem: React.FC<IContactsItem> = ({ contact }) => {
  const { id, number, name } = contact;
  const dispatch = useAppDispatch();
  return (
    <StyledItem key={id}>
      <div className="card">
        <div className="card__name">
          <p className="p1">{name}</p>
          <p className="p2">{number}</p>
        </div>
        <div className="card__buttons-wrap">
          <a href={`tel:${number}`} id="call" className="card__button">
            <CallSvg />
          </a>
          <span className="card__button" id="favorite">
            <Favorite contact={contact} />
          </span>
          <span
            id="delete"
            className="card__button"
            onClick={() => {
              id && dispatch(removeContact(id));
              dispatch(changeFilter({ filter: '' }));
            }}
          >
            &times;
          </span>
        </div>
      </div>
    </StyledItem>
  );
};
