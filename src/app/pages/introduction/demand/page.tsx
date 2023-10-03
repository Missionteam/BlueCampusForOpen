// pages/index.tsx
"use client"
import React from 'react';
import useModal from '@/components/ui/modal/ModalHook'; 
import Modal from '@/components/ui/modal/Modal';
import Card from '@/components/ui/card/Card';



const HomePage = () => {
  const { isOpen, openModal, closeModal } = useModal();
    const rootURL = 'pages/introduction/demand/';
  return (
    <div>
      <button onClick={openModal}>モーダルを開く</button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <div className='flex'>
            <Card title={'人生を楽しむ'} href={rootURL+'/joy'}/>
            <Card title={'なにかを頑張る'} href={rootURL+'/try'}/>
            <Card title={'恋を学ぶ'} href={rootURL+'/love'}/>
        </div>
      </Modal>
    </div>
  );
};

export default HomePage;