export const projectList = {
    projects: [

        {
            id: 'lending-loft',
            title: "Lending Loft: Library Management",
            skillsIcon: 'lending_loft.svg',
            skillsIconText: 'Netlify l JWT Authentication',

            intro: 'A Front-end book borrowing App, developed with TypeScript, React, Redux, React-Bootstrap & JWT auth. Integrated with a Node.js & Express backend & MongoDB.',
            mobileIntro:'Front-end: TypeScript, React, Redux, React-Bootstrap & JWT auth. Backend: Node & MongoDB.',
            imageUrl: "lending_loft_01.png",
        },
        {
            id: 'library-api',
            title: "Library API (REST)",
            skillsIcon: 'library_api.svg',
            skillsIconText: 'Open API',
            intro: 'Backend app, designed for book borrowing services, was developed using TypeScript, Node.js, Express, and MongoDB as part of a full-stack training project.',
            mobileIntro: 'Backend for a book borrowing Service app: TypeScript, Node.js, Express, and MongoDB.',
            imageUrl: "library_api_01.png",
        },
        {
            id: 'business-intelligence',
            title: "Business Intelligence website",
            skillsIcon: 'business_Intelligence.svg',
            intro: 'Team Collaboration with an External Designer, Employing a Tech Stack Featuring Gatsby, GraphQL, Figma, Contentful, Mailchimp, Netlify..',
            mobileIntro: 'Team Collaboration: Featuring Gatsby, GraphQL, Figma, Contentful, Mailchimp, Netlify..',
            imageUrl: "business_Intelligence_01.png",
        },
        {
            id: 'text-similarity-api',
            imageUrl: "text_similarity_api_01.png",
            title: "Text Similarity Api",
            skillsIcon: 'text_similarity_api.svg',
            skillsIconText: 'OpenAI l Google Auth',
            intro: 'A full-stack app designed to determine the similarity between two texts, developed by NextJS 14, Prisma, OpenAI, Tailwind, Google Auth..',
            mobileIntro: 'A full-stack app  developed by NextJS 14, Prisma, OpenAI, Tailwind, Google Auth..'
        },
        {
            "id": "react-blog-post",
            "title": "React Blog Post Application",
            "skillsIcon": "react_blog_post.svg",
            "skillsIconText": "React.js, Github, Netlify",
            "intro": "A collaborative Learning project to develop a blogging app using React, enabling users to add, edit, and delete posts",
            "mobileIntro": "React APP as Learning Project: CRUD application",
            "imageUrl": "react_blog_post_01.png"
          }
    ]
}



export const projectsData: ProjectType[] = [
    {
        id: 'lending-loft',
        title: 'Lending Loft: Library Management',
        images: [
            'lending_loft_01.png',
            'lending_loft_02.png',
            'lending_loft_03.png',
            'lending_loft_04.png',
        ],
        github: 'https://github.com/moscuet/Lending-Loft',
        url: 'https://zealous-galileo-0290aa.netlify.app/',
        techStack: ['TypeScript', 'React', 'Redux', 'React-Bootstrap', 'JWT', 'Formik-form', 'Yup validation', 'Mongoose'],
        story: "Lending Loft is a front-end application designed to streamline the book borrowing experience in libraries. The app features a user-friendly interface built with TypeScript, React, Redux, and React-Bootstrap, and integrates with a backend using Node.js, Express, and MongoDB. It includes secure JWT authentication for user security. Developed to showcase modern web development techniques and efficient library management, Lending Loft is a demonstration of the capabilities of full-stack development in real-world applications.",
        roles: [
            'Frontend Development - Created a dynamic user interface with TypeScript, React, Redux, and React-Bootstrap.',
            'Backend Integration - Integrated with a Node.js and Express backend',
            'Security Implementation - Ensured user security with JWT authentication.',
        ],
        features: [
            {
                title: 'User Dashboard',
                description: 'A personalized space where users can manage their book borrowings, update personal information, and view their borrowing history.',
                img: 'lending_loft_04.png'
            },
            {
                title: 'Admin Management Panel',
                description: 'Enables administrators to add new books, manage authors, track borrowing statuses, and handle user accounts.',
                img: 'lending_loft_02.png'
            },
            {
                title: 'Secure Authentication',
                description: 'Features JWT authentication to ensure secure access for users and protect sensitive data.',
                img: 'lending_loft_09.png'
            },
            {
                title: 'Interactive Book Browsing',
                description: 'Users can browse and select books with ease, add them to their cart, and manage their borrowings seamlessly.',
                img: 'lending_loft_01.png'
            }
        ],

        developmentSteps: [
            { title: 'Conceptualization', date: 'DD.MM.YYYY' },
            { title: 'Design & Development', date: 'DD.MM.YYYY' },
            { title: 'Integration & Testing', date: 'DD.MM.YYYY' },
            { title: 'Deployment', date: 'DD.MM.YYYY' },
        ]
    },
    {
        id: 'business-intelligence',
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
        story: "In this completed project for Pragmatic Intelligence Consulting, I worked alongside a team of developers and an external designer. My role was to design and develop key website components, specifically the Contact-card and Contact-form. Additionally, I was responsible for building the Contact page and enhancing the site's search engine optimization (SEO). Because of privacy reasons, we can't share the code publicly. The site demo was deployed on Netlify by removing the company's credentials. To explore the application's functionalities, kindly visit the deployed demo site.",
        roles: [
            'Design and Development - Engaged in conceptualizing and crafting the design, and developed key components such as the Contact-card and Contact-form',
            'Page Construction - Built the Contact page with attention to detail and user experience.',
            "SEO Implementation - Implemented search engine optimization to enhance the website's online visibility."
        ],
        "features": [
            {
                "title": "Responsive Web Design",
                "description": "Features a fluid and adaptive design that ensures optimal viewing and interaction experience across a wide range of devices, from desktops to smartphones.",
                "img": "business_Intelligence_01.png"
            },
            {
                "title": "Dynamic Content Management",
                "description": "Leverages Contentful as a powerful headless CMS for dynamic content updates, enabling seamless content management and instant updates across the site.",
                "img": "business_Intelligence_03.png"
            },
            {
                "title": "Integrated Email Marketing",
                "description": "Incorporates Mailchimp for streamlined email marketing campaigns, facilitating effective engagement and communication with the audience through automated email workflows.",
                "img": "business_Intelligence_04.png"
            },
            {
                "title": "Advanced SEO Techniques",
                "description": "Employs cutting-edge SEO strategies to enhance the website's visibility in search engine results, ensuring higher traffic and engagement.",
                "img": ""
            }
        ],
        developmentSteps: [
            { title: 'Idea Generation', date: '01.01.2023' },
            { title: 'Planning', date: '10.02.2023' },
            { title: 'Design', date: '05.03.2023' },
            { title: 'Development', date: '15.04.2023' },
            { title: 'Deployment', date: '30.05.2023' },
        ]
    },
    {
        id: 'library-api',
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
        story: "This backend application is designed to support book borrowing services for public libraries and is constructed using TypeScript, Node.js, Express, and MongoDB. The application features an open API and was developed from scratch, including the design of the data structure. It was created as part of a training project for the final full-stack assignment in 2021. To discover and test the endpoints of this Open API, please visit the GitHub repository.",
        roles: [
            'Database Design - Crafted the data architecture and optimized database operations for the application.',
            'Backend Development - complete backend cycle, from initial design to production deployment.',
            'API Development - Created a scalable open API, adhering to RESTful standards for book borrowing services.',
            'Deployment - Led the backend deployment'
        ],
        "features": [
            {
                "title": "Advanced Database System",
                "description": "Leverages MongoDB with Mongoose for efficient data storage, retrieval, and management, ensuring high performance and scalability.",
                "img": "library_api_02.png"
            },
            {
                "title": "Comprehensive Book Management",
                "description": "Enables librarians to add, update, and delete book records, including details such as ISBN, author, and publication date.",
                "img": ""
            },
            {
                "title": "User Account Management",
                "description": "Provides functionalities for creating and managing user accounts, including roles for librarians and borrowers.",
                "img": ""
            },
            {
                "title": "Borrowing and Returns Tracking",
                "description": "Tracks book borrowing and returns, including due dates and overdue notifications.",
                "img": ""
            },
            {
                "title": "Search and Filter",
                "description": "Allows users to search for books by various criteria and filter results for ease of access.",
                "img": ""
            }
        ],
        developmentSteps: [
            { title: 'Idea Generation', date: '01.01.2023' },
            { title: 'Planning', date: '10.02.2023' },
            { title: 'Design', date: '05.03.2023' },
            { title: 'Development', date: '15.04.2023' },
            { title: 'Deployment', date: '30.05.2023' },
        ]
    },
    {
        id: 'text-similarity-api',
        title: 'Library API (REST)',
        images: [
            'text_similarity_api_01.png',
            'text_similarity_api_02.png',
            'text_similarity_api_03.png',
            'text_similarity_api_04.png',
        ],
        github: 'https://github.com/moscuet/text-similarity',
        url: 'https://textsimilarityapi-eight.vercel.app/',
        techStack: ['NextJS 14', 'Tailwind CSS', 'OpenAI Integration', 'Prisma', 'Google Auth', 'Redis/Upstash'],
        story: "This application is a text similarity API, designed to analyze and compare two pieces of text, built as an open API using Next.js 14. To access this service, users can obtain an API key through a user-friendly frontend interface. The API leverages OpenAI's text embedding technology for accurate similarity assessments. The system is secured with Google authentication via NextAuth.js, and backend operations are efficiently managed with Prisma Client and a Planetscale database. Upstash Redis with rate limiting is used to ensure top-notch security. Developed as part of my advanced learning, this project effectively merges a straight-forward front-end for user interaction with a secure backend.",
        roles: [
            "Full-Stack Development - Led the development of both frontend and backend using Next.js 14, creating a seamless user experience for API key generation and integrating advanced text analysis features.",
            "API Integration and Security - Implemented and secured the API using OpenAI's text embedding technology, with Google authentication through NextAuth.js for secure access and Upstash Redis for rate limiting.",
            "Database and Backend Management - Managed backend operations with Prisma Client, utilizing a Planetscale database to ensure efficient performance and data integrity."
        ]
        ,

        "features": [
      
            {
                "title": "Advanced Text Similarity Evaluation",
                "description": "Employs sophisticated algorithms to analyze and determine the degree of similarity between two input texts, providing valuable insights for textual comparison.",
                "img": "text_similarity_api_01.png"
            },
            {
                "title": "Google Authentication Integration",
                "description": "Provides secure login functionality, enabling users to create a personal API key through Google authentication for enhanced security.",
                "img": "text_similarity_api_02.png"
            },
            {
                "title": "API Key Generation and Management",
                "description": "Allows users to generate, regenerate, or revoke their API keys, offering full control over their access to the application's services.",
                "img": "text_similarity_api_04.png"
            },
            {
                "title": "Efficient Request Limit Management",
                "description": "Implements a fair use policy with a request limit of 10 comparisons per hour to ensure quality service for all users.",
                "img": ""
            },
            {
                "title": "Personalized User Dashboard",
                "description": "Offers a comprehensive dashboard where users can manage their API keys—including generation, copying, and removal—view their request history, and see the last use of each key, facilitating seamless management and tracking of their text analysis activities.",
                "img": "text_similarity_api_05.png"
            },
        ],
        developmentSteps: [
            { title: 'Idea Generation', date: '01.01.2023' },
            { title: 'Planning', date: '10.02.2023' },
            { title: 'Design', date: '05.03.2023' },
            { title: 'Development', date: '15.04.2023' },
            { title: 'Deployment', date: '30.05.2023' },
        ]
    },
    {
        "id": "react-blog-post",
        "title": "React Blog Post Application",
        "images": [
          "react_blog_post_01.png",
          "react_blog_post_02.png",
          "react_blog_post_03.png"
        ],
        "github": "https://github.com/moscuet/Blog-Post_React",
        "url": "https://nifty-shirley-ff48f6.netlify.app/",
        "techStack": [
          "React.js",
          "Github",
          "Netlify"
        ],
        "story": "This learning project is a team effort in developing a blogging app using React, focusing on the functionalities to add, edit, and delete posts using static data. It showcases our collaborative development skills and React proficiency.",
        "roles": [
          "Collaborative Development - contributed group discussion, desiging UI and in development phase",
          "Blog Post Management - Implemented features to create, edit, and delete blog posts and UI interaction."
        ],
        "features": [
          {
            "title": "Collaborative Development",
            "description": "Developed through close collaboration among team members, sharing individual code contributions through GitHub.",
            "img": "react_blog_post_01.png"
          },
          {
            "title": "Blog Post Management",
            "description": "Users can create, edit, and delete their blog posts, showcasing dynamic content management capabilities.",
            "img": "react_blog_post_02.png"
          },
          {
            "title": "Simplied UI",
            "description": "Features a clean, intuitive interface enabling easy management of blog posts, enhancing user experience.",
            "img": "react_blog_post_03.png"
          },

        ],
      }
      
]
