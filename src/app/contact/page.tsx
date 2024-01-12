'use client';

import ContactForm from '@/components/ContactForm';
import { FC } from 'react';

export type FormData = {
    name: string;
    subject: string;
    email: string;
    message: string;
};

const Contact: FC = () => {

    return (
        <div className='w-screen -ml-12  flex flex-col items-center justify-center pl-14 sm:pl-0 pt-[100px]'>
            <div className='flex justify-center w-full max-w-xl'>
                <span className='w-full text-center text-gray-800 text-sm sm:text-lg mt-10 p-1'>Have an idea in mind? Let&apos;s bring it to life together!</span>
            </div>
            <div  className='w-full max-w-xl bg-gray-50 rounded-lg mb-10 mt-5 sm:p-10 bg-gradient-to-b from-indigo-300 to-indigo-100'>
                <ContactForm />
            </div>
        </div>

    );
};

export default Contact;

