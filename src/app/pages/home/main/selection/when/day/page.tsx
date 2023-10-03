"use client"
import React from 'react';
import useModal from '@/components/ui/modal/ModalHook'; 
import Modal from '@/components/ui/modal/Modal';
import Card from '@/components/ui/card/Card';

const Page = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const rootURL = 'pages/home/main/selection/when/confirm';

  return (
    <div>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <div className='flex'>
            <Card title={'一日中'} href={rootURL} image='/image1.png'/>
            <Card title={'短時間で'} href={rootURL} image='/image1.png'/>
        </div>
      </Modal>
    </div>
  );
};

export default Page;