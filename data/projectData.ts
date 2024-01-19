export const projectList = {
    projects: [
        { id: 'business-intelligence', imageUrl: "business_Intelligence_01.png", title: "My Awesome Project", skillsIcon:'business_Intelligence.svg' },
        { id: 'library-api', imageUrl: "library_api_01.png", title: "Library API (REST)"},
    ]
}


export const projectsData: ProjectType[] = [
    {   id:'business-intelligence',
        title: 'Business Intelligence Website',
        images: [
            'business_Intelligence_01.png',
            'business_Intelligence_02.png',
            'business_Intelligence_03.png',
            'business_Intelligence_04.png',
            'business_Intelligence_05.png'
        ],
        github: 'https://github.com/moscuet/Project-Business-consulting-intelligence',
        url: 'https://awesome-mahavira-48e62b.netlify.app/',
        techStack: ['Gatsby.js', 'GraphQL', 'Figma', 'Contentful', 'Mailchimp', 'Netlify'],
        story: "This is a group project for a business intelligence consulting company. Because of privacy reasons, we can't share the code publicly. The site demo was deployed on Netlify by removing the company's credentials. To explore the application's functionalities, kindly visit the deployed demo site.",
        roles: [
            'Design and Development - Engaged in conceptualizing and crafting the design, and developed key components such as the Contact-card and Contact-form',
            'Page Construction - Built the Contact page with attention to detail and user experience.',
            "SEO Implementation - Implemented search engine optimization to enhance the website's online visibility."
        ],
        developmentSteps: [
            { title: 'Idea Generation', date: '01.01.2023' },
            { title: 'Planning', date: '10.02.2023' },
            { title: 'Design', date: '05.03.2023' },
            { title: 'Development', date: '15.04.2023' },
            { title: 'Deployment', date: '30.05.2023' },
        ]
    },
    {   id:'library-api',
        title: 'Library API (REST)',
        images: [
            'library_api_01.png',
            'library_api_02.png',
            'library_api_03.png',
            'library_api_04.png',
        ],
        github: 'https://github.com/moscuet/library-server100',
        url: 'https://library-server100.up.railway.app/api',
        techStack: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'Jest', 'Supertest', 'JWT', 'Nodemon', 'ESLint'],
        story: "This backend application is designed to support book borrowing services for public libraries and is constructed using TypeScript, Node.js, Express, and MongoDB. The application features an open API and was meticulously developed from scratch, including the design of the data structure. It was created as part of a training project for the final full-stack assignment in 2021. To discover and test the endpoints of this Open API, please visit the GitHub repository.",
        roles: [
            'Database Design - Crafted the data architecture and optimized database operations for the application.',
            'Backend Development - complete backend cycle, from initial design to production deployment.',
            'API Development - Created a scalable open API, adhering to RESTful standards for book borrowing services.',
            'Deployment - Led the backend deployment'
        ],
        developmentSteps: [
            { title: 'Idea Generation', date: '01.01.2023' },
            { title: 'Planning', date: '10.02.2023' },
            { title: 'Design', date: '05.03.2023' },
            { title: 'Development', date: '15.04.2023' },
            { title: 'Deployment', date: '30.05.2023' },
        ]
    }
]
