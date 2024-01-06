import Main from '@/components/Main';
import FollowDownAnimation from '@/components/FollowDownAnimation';
import { Button } from '@/components/ui/Button';

export default function Home() {

    return (
        <>
            <div className="min-h-screen flex-grow flex flex-col justify-center items-center p-4 relative">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center mb-10">
                    Hi, I am Rahman
                </h1>
                <p className="text-base md:text-xl lg:text-xl text-gray-800 text-center mt-4 px-20">
                    A Full-Stack Developer in Helsinki, creating seamless web experiences where technology meets user needs.
                </p>
                <Button className='my-6' variant={'primary'}>
                    Show All Projects
                </Button>
                <div style={{ position: 'absolute', bottom: 0, width: '100%' }}>
                    <FollowDownAnimation />
                </div>
            </div>
            <Main />
        </>
    );
}