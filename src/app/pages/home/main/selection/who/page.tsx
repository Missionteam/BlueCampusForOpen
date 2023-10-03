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
            <Card title={'今いる人と\nもっと仲を深める'} href={rootURL+'/when'} image='/image1.png'/>
            <Card title={'新しい人と\n出会う'} href={rootURL+'/what'} image='/image1.png'/>
        </div>
      </Modal>
    </div>
  );
};

export default Page;