'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';

export type FormData = {
    name: string;
    email: string;
    message: string;
};

const Contact: FC = () => {
    const { register, handleSubmit } = useForm<FormData>();

    function onSubmit(data: FormData) {
    }

    return (
        <div className='w-screen -ml-6 sm:-ml-12 flex justify-center pt-[100px] inset-0 bg-gradient-to-br from-green-400 to-indigo-400'>
            <div className='w-full max-w-3xl h-screen bg-gray-50 rounded-lg pl-10 pr-5 my-10 sm:p-10'>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='mb-5'>
                        <label
                            htmlFor='name'
                            className='mb-3 block text-base font-medium text-black'
                        >
                            Full Name
                        </label>
                        <input
                            type='text'
                            placeholder='Full Name'
                            className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
                            {...register('name', { required: true })}
                        />
                    </div>
                    <div className='mb-5'>
                        <label
                            htmlFor='email'
                            className='mb-3 block text-base font-medium text-black'
                        >
                            Email Address
                        </label>
                        <input
                            type='email'
                            placeholder='example@domain.com'
                            className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
                            {...register('email', { required: true })}
                        />
                    </div>
                    <div className='mb-5'>
                        <label
                            htmlFor='message'
                            className='mb-3 block text-base font-medium text-black'
                        >
                            Message
                        </label>
                        <textarea
                            rows={4}
                            placeholder='Type your message'
                            className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
                            {...register('message', { required: true })}
                        ></textarea>
                    </div>
                    <div>
                        <button className='hover:shadow-form rounded-md bg-indigo-500 py-3 px-8 text-base font-semibold text-white outline-none'>
                            Submit
                        </button>
                    </div>
                </form>        </div>
        </div>

    );
};

export default Contact;

