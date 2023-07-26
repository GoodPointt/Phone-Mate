import { ModalBackdrop, ModalContent } from '../Styled.styled';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useAppDispatch } from '../../redux/hooks';
import { toggleModal } from '../../redux/modalSlice';

const modalRoot: HTMLElement | null = document.querySelector('#modal-root')!;

interface IModal {
  children: React.ReactNode;
}

export const Modal = ({ children }: IModal) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') dispatch(toggleModal());
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [dispatch]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget === e.target && dispatch(toggleModal());
  };

  return createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContent>{children}</ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
};
