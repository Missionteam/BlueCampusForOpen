// pages/index.tsx
"use client"
import React from 'react';
import useModal from '@/components/ui/modal/ModalHook'; 
import Modal from '@/components/ui/modal/Modal';
import Card from '@/components/ui/card/Card';

const HomePage = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const rootURL = 'pages/introduction/demand/try';

  return (
    <div>
      <button onClick={openModal}>モーダルを開く</button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <div className='flex'>
            <Card title={'新しいことに挑戦する'} href={rootURL+'/demand1'}/>
            <Card title={'今、頑張っていることを\n実現する'} href={rootURL+'/demand1'}/>
        </div>
      </Modal>
    </div>
  );
};

export default HomePage;