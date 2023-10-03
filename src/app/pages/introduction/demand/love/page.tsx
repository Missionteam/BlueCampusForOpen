// pages/index.tsx
"use client"
import React from 'react';
import useModal from '@/components/ui/modal/ModalHook'; 
import Modal from '@/components/ui/modal/Modal';
import Card from '@/components/ui/card/Card';

const HomePage = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const rootURL = 'pages/introduction/demand/love';

  return (
    <div>
      <button onClick={openModal}>モーダルを開く</button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <div className='flex'>
            <Card title={'恋を鍛える'} href={rootURL+'/demand1'}/>
            <Card title={'異性と一緒に学ぶ'} href={rootURL+'/demand1'}/>
        </div>
      </Modal>
    </div>
  );
};

export default HomePage;