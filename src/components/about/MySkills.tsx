import React from 'react'

export const devOpsSkills = ['Docker', 'Git', 'Github', 'CI/CD', 'Vercel', 'Heroku', 'Jenkins', 'Kubernetes', 'Netlify',];

export const frontendSkills = ['TypeScript', 'React', 'Redux', 'NextJS', 'Jest', 'TailwindCSS', 'SCSS', 'CSS3',  'Material UI','Gatsby', 'GraphQL', 'Ant Design', 'Bootstrap', 'HTML5'];

export const backendSkills = ['Node', 'Express', 'REST API', 'MariaDB', 'MongoDB','Mongoose', 'Prisma', 'Redis',  'MySQL', 'PostgreSQL'];

const MySkills = () => {
    return (
        <>
            <div className="text-gray-800 font-bold text-2xl">
                My Skills
            </div>
            <div className="mb-[50px] lg:mb-[150px] text-gray-800 ">
                <span className='flex text-justify mt-2 mb-4 px-3 sm:px-4 md:px-6 lg:px-8'>
                    In my development journey, I&rsquo;ve worked with a range of modern tools and technologies. The following are some key examples
                </span>
            </div>
            <section className="w-screen relative bg-gray-50 custom-height -ml-6 sm:ml-0">
                <div className="absolute top-[-50px] lg:top-[-100px] left-1/2 -translate-x-1/2 w-[85vw] rounded-t-[10px] flex flex-col lg:flex-row items-stretch justify-center">
                    <div className="xl:w-1/2 bg-gradient-to-b from-indigo-300 to-indigo-100 rounded-lg py-6 sm:py-12 px-1 sm:px-2 md:px-4 lg:px-6 m-2 flex flex-col shadow-2xl transform transition duration-300 ease-in-out hover:scale-105">
                        <h3 className="text-white text-lg font-bold mb-4 sm:mb-12 text-center">Frontend & Testing</h3>
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex flex-wrap text-gray-900 justify-center gap-2">
                                {frontendSkills.map(skill => (
                                    <span key={skill} className="p-1 rounded-md">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="xl:w-1/4 bg-gradient-to-b from-indigo-300 to-indigo-100 rounded-lg py-6 sm:py-12 px-1 sm:px-2 md:px-4 lg:px-6 m-2 flex flex-col shadow-2xl transform transition duration-300 ease-in-out hover:scale-105">
                        <h3 className="text-white text-lg font-bold mb-4 sm:mb-12 text-center">Backend & Database</h3>
                        <div className="flex flex-col justify-center items-center">
                        <div className="flex flex-wrap text-gray-900 justify-center gap-2">
                                {backendSkills.map(skill => (
                                    <span key={skill} className="p-1 rounded-md">{skill}</span>
                                    ))}
                            </div>
                        </div>
                    </div>

                    <div className="xl:w-1/4 bg-gradient-to-b from-indigo-300 to-indigo-100 rounded-lg py-6 sm:py-12 px-1 sm:px-2 md:px-4 lg:px-6 m-2 flex flex-col shadow-2xl transform transition duration-300 ease-in-out hover:scale-105">
                        <h3 className="text-white text-lg font-bold mb-4 sm:mb-12 text-center">DevOps</h3>
                        <div className="flex flex-col justify-center items-center">
                        <div className="flex flex-wrap text-gray-900 justify-center gap-2">
                                {devOpsSkills.map(skill => (
                                    <span key={skill} className="p-1 rounded-md">{skill}</span>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MySkills

