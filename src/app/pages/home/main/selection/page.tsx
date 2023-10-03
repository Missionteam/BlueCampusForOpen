"use client"
import React from 'react';
import useModal from '@/components/ui/modal/ModalHook'; 
import Modal from '@/components/ui/modal/Modal';
import Card from '@/components/ui/card/Card';

const Page = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const rootURL = 'pages/home/main/selection';

  return (
    <div>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <div className='flex'>
            <Card title={'日時'} href={rootURL+'/when'} image='/image1.png'/>
            <Card title={'何に挑戦する？'} href={rootURL+'/what'} image='/image1.png'/>
            <Card title={'誰と'} href={rootURL+'/who'} image='/image1.png'/>
        </div>
      </Modal>
    </div>
  );
};

export default Page;