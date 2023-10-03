"use client"
import React from 'react';
import useModal from '@/components/ui/modal/ModalHook';
import Modal from '@/components/ui/modal/Modal';
import Card from '@/components/ui/card/Card';
import Link from 'next/link';

const Page = () => {
    const { isOpen, openModal, closeModal } = useModal();
    const rootURL = 'pages/home/main/selection/when/confirm';

    return (
        <div>
            <Modal isOpen={isOpen} onClose={closeModal}>
                <div className='flex flex-col justify-center items-center bg-white p-16'>
                <div className='text-center mb-12'>その他の内容については<br></br>こちらでよろしいですか？</div>
                    <div className='flex'>
                        <Card title={'小さい努力'} href={rootURL} image='/image1.png' />
                        <Card title={'今いる人と仲を深める'} href={rootURL} image='/image1.png' />
                    </div>
                    <Link href={"/pages/home/main/main-plan"}><div className='text-center mt-12 bg-gray-600 w-min text-white pl-6 pr-6'>OK</div></Link>
                </div>
            </Modal>
        </div>
    );
};

export default Page;