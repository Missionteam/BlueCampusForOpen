// pages/index.tsx
"use client"
import React from 'react';
import useModal from '@/components/ui/modal/ModalHook'; 
import Modal from '@/components/ui/modal/Modal';
import Card from '@/components/ui/card/Card';

const HomePage = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const rootURL = 'pages/introduction/demand/joy';

  return (
    <div>
      <button onClick={openModal}>モーダルを開く</button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <div className='flex'>
            <Card title={'新しい趣味に\n一緒に挑戦する'} href={rootURL+'/demand1'}/>
            <Card title={'趣味を教え合う'} href={rootURL+'/demand1'}/>
        </div>
      </Modal>
    </div>
  );
};

export default HomePage;