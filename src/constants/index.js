import { title } from "framer-motion/client";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    algorithm,
    beginner,
    go,
    ml,
    oop,
    gratitude,
    initiare,
    university,
    c_plus_plus,
    golang,
    python,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const certificates = [
    {
        title: "Gratitude Letter",
        img: gratitude,
    },
    {
        title: "Learn to Code: C++ for Absolute Beginners",
        img: beginner,
    },
    {
        title: "Learn Object Oriented Programming in C++",
        img: oop,
    },
    {
        title: "An introduction to Programming in Go",
        img: go,
    },
    {
        title: "A Visual Introduction to Algorithms",
        img: algorithm,
    },
    {
        title: "Fundamentals of Machine Learning for Software Engineers",
        img: ml,
    }
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Golang",
        icon: golang,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "Git",
        icon: git,
    },
    {
        name: "Figma",
        icon: figma,
    },
    {
        name: "C++",
        icon: c_plus_plus,
    },
];

const experiences = [
    {
        title: "Web Developer",
        company_name: "Ho Chi Minh City University of Education's Chinese language department",
        icon: university,
        iconBg: "white",
        date: "May 2024 - August 2024",
        points: [
            "Providing support in building the activity report web application for the Sub-association of the Chinese language language Department.",
            "Using React.js, Node.js, Express.js, and MongoDB to implement responsive design and ensuring cross-browser compatibility."
        ],
    },
    {
        title: "Web Developer",
        company_name: "INITIARE",
        icon: initiare,
        iconBg: "white",
        date: "September 2024 - Now",
        points: [
            "Developing and maintaining web applications using TypeScript, Go, and PostgreSQL",
            "Work smoothly with other members in the team to perfect every small detail of the website.",
            "The website provide an accessible and dynamic platform designed speciffically for students to unlock the power of professional research."
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { certificates, technologies, experiences, testimonials, projects };