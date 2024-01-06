'use client';

import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/Button';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

export type FormData = {
    name: string;
    subject: string;
    email: string;
    message: string;
};

const Contact: FC = () => {

    return (
        <div className='w-screen -ml-6 sm:-ml-12 flex justify-center pt-[100px] '>
            <div className='w-full max-w-3xl h-screen bg-gray-50 rounded-lg pl-10 pr-5 my-10 sm:p-10 bg-gradient-to-b from-indigo-300  to-indigo-100' >
                <ContactForm />
            </div>
        </div>

    );
};

export default Contact;

