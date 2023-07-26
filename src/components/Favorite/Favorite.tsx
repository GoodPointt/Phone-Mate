import { useAppDispatch } from '../../redux/hooks';
import { toggleFavorite } from '../../redux/operations';
import { IContactsItem } from '../Contact/ContactsItem';
import css from './Favorite.module.css';
import { ReactComponent as FavoriteSvg } from '../../img/svg/favorite.svg';

export const Favorite: React.FC<IContactsItem> = ({ contact }) => {
  const dispatch = useAppDispatch();
  return (
    <label className={css.container}>
      <input
        checked={contact.isFavorite}
        type="checkbox"
        onChange={() => dispatch(toggleFavorite(contact))}
      />
      <div className={css.checkmark}>
        <FavoriteSvg />
      </div>
    </label>
  );
};
