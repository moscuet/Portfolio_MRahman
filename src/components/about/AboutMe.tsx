import React from 'react'
import { Button } from '../ui/Button'
import Image from 'next/image';
interface MyImageLoaderProps {
    src: string;
    width: number;
    quality?: number;
  }
  
  function myImageLoader({ src, width, quality }: MyImageLoaderProps): string {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
  }

export default function AboutMe() {
    return (
        <section style={{ paddingTop: '120px', paddingBottom: '150px', fontFamily: 'LinguisticsPro-Regular' }} className="flex flex-col sm:flex-row bg-gray-200 pb-20 w-full max-w-5xl ">
            <div className="container w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4 flex flex-col items-center justify-center">
              <Image
                    src={'/assets/cv_photo.jpg'}
                    alt="Profile"
                    width={160}
                    height={160}
                    className="rounded-full w-40 h-40 lg:w-60 lg:h-60 mb-2 border-2 border-gray-300"
                />
                <span className='text-gray-900 bold mb-4'> Mostafizur Rahman</span>
                <a href="/assets/cv_mostafizur_rahman.pdf" download className="inline-block">
                    <Button variant="primary">
                        Download Resume
                    </Button>
                </a>
            </div>
            <div className="container w-full sm:w-1/2 md:w-2/3 lg:w-2/3 gap-3  p-2 sm:p-0 text-base text-center text-gray-900">
                <span className='flex text-justify mt-2 mb-2'>

                    Hi,
                </span>
                <span className='flex text-justify mt-2 mb-4'>
                    I&rsquo;m a full-stack developer with more than three years of practical experience in web development. Originally starting my career as a civil engineer, I made a passionate shift to coding in 2019, driven by my fascination with technology and programming. Embracing both change and continuous learning, I&rsquo;ve adeptly transitioned from constructing buildings to crafting code, utilizing my analytical skills and problem-solving abilities in innovative ways. In my work, I focus on collaboration, innovation, and maintaining a keen eye for detail.
                </span>
                <span className='flex text-justify mb-4'>
                    Currently, I&rsquo;m actively learning Next.js and deepening my understanding of artificial intelligence through the &rsquo;Elements of AI&rsquo; course.

                </span >
                <span className='flex text-justify mb-4'>
                    In my free time, I immerse myself in movies and embrace the challenge of swimming. I am passionate about exploring new destinations, experimenting with diverse cuisines, and cooking delectable Asian meals. Often, you&rsquo;ll find me relaxing on the sofa, catching up on the latest tech news.
                </span>
            </div>
        </section>
    )
}
