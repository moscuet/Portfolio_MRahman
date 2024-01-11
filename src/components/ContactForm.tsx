'use client';

import { Button } from '@/components/ui/Button';
import { sendEmail } from '@/utils/send-email';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from './ui/ToastNotification';

export type FormData = {
    name: string;
    subject: string;
    email: string;
    message: string;
};

const ContactForm: FC = () => {
    const { register, handleSubmit,reset, formState: { errors,isSubmitting} } = useForm<FormData>();

    async function onSubmit(data: FormData) {
        try {
            const response = await sendEmail(data);
            console.log('response', response)
            toast({
                title: 'Message Sent Successfully',
                message: 'Thank you for reaching out! I will get back to you as soon as possible.',
                type: 'success',
            });
            reset()
        } catch (error) {
            toast({
                title: 'Error',
                message: 'There was an error sending your message. Please try again later.',
                type: 'error',
            });
            console.error('Error sending email:', error);
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-3'>
                <label htmlFor='name' className='mb-3 block text-base font-medium text-black'>
                    Full Name
                </label>
                <input
                    type='text'
                    placeholder='Full Name'
                    className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
                    {...register('name', { required: true, minLength: 3, maxLength: 38 })}
                />
                {errors.name && <p className="text-red-500">Full Name is required (3-38 characters)</p>}
            </div>
    
            <div className='mb-3'>
                <label htmlFor='subject' className='mb-3 block text-base font-medium text-black'>
                    Subject
                </label>
                <input
                    type='text'
                    placeholder='Subject'
                    className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
                    {...register('subject', { maxLength: 140 })}
                />
                {errors.subject && <p className="text-red-500">Subject must be less than 140 characters</p>}
            </div>
    
            <div className='mb-3'>
                <label htmlFor='email' className='mb-3 block text-base font-medium text-black'>
                    Email Address
                </label>
                <input
                    type='text'
                    placeholder='example@domain.com'
                    className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
                    {...register('email', { required: true, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })}
                />
                {errors.email && <p className="text-red-500">A valid email address is required</p>}
            </div>
    
            <div className='mb-3'>
                <label htmlFor='message' className='mb-3 block text-base font-medium text-black'>
                    Message
                </label>
                <textarea
                    rows={4}
                    placeholder='Type your message'
                    className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
                    {...register('message', { required: true, maxLength: 400 })}
                ></textarea>
                {errors.message && <p className="text-red-500">Message is required (max 400 characters)</p>}
            </div>
    
            <div>
                <Button className='my-3 px-4' size={'wide'} variant={'primary'} isLoading={isSubmitting}>
                    Submit
                </Button>
            </div>
        </form>
    );
    
};

export default ContactForm;

