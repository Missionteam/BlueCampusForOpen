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
                <div className='block'>
                    <div className='flex'>
                        <Card title={'選択肢1'} href={rootURL + '/when'} image='/image1.png' />
                        <Card title={'選択肢2'} href={rootURL + '/what'} image='/image1.png' />
                        <Card title={'選択肢3'} href={rootURL + '/who'} image='/image1.png' />
                    </div>
                    <div className='h-12'></div>
                    <div className='flex'>
                        <Card title={'選択肢4'} href={rootURL + '/when'} image='/image1.png' />
                        <Card title={'選択肢5'} href={rootURL + '/what'} image='/image1.png' />
                        <Card title={'選択肢6'} href={rootURL + '/who'} image='/image1.png' />
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Page;