"use client"
import React from 'react';
import useModal from '@/components/ui/modal/ModalHook'; 
import Modal from '@/components/ui/modal/Modal';
import Card from '@/components/ui/card/Card';

const Page = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const rootURL = 'pages/home/main/selection/when';

  return (
    <div>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <div className='flex'>
            <Card title={'朝'} href={rootURL+'/morning'} image='/image1.png'/>
            <Card title={'昼'} href={rootURL+'/day'} image='/image1.png'/>
            <Card title={'夜'} href={rootURL+'/night'} image='/image1.png'/>
        </div>
      </Modal>
    </div>
  );
};

export default Page;