import { useState } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return { isOpen, openModal, closeModal };
};

export default useModal;