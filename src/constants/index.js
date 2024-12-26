import { title } from "framer-motion/client";
import {
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
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
    cakeshop,
    quizzweb,
    todolist,
    tetris,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Experience",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const certificates = [
    {
        title: "Gratitude Letter of Ho Chi Minh University of Education's Chinese Language Department",
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
        name: "Cake Shop",
        description:
            "A cake shop website with cake details, shop intro, user accounts, cart, and a simulated payment process. With an user-friendly interface, the web gives the customers seamless experiences.",
        tags: [
            {
                name: "react.js",
                color: "blue-text-gradient",
            },
            {
                name: "node.js",
                color: "green-text-gradient",
            },
            {
                name: "express.js",
                color: "pink-text-gradient",
            },
            {
                name: "mongodb",
                color: "blue-text-gradient",
            },
        ],
        image: cakeshop,
        source_code_link: "https://github.com/NguyenKhangPhuc/Cake-Shopping",
        demo: "https://cake-shop-sigma.vercel.app/Home/66140bb2028d7af86325958a",
    },
    {
        name: "Quizz Web",
        description:
            "A user-friendly quiz website offering a variety of quizzes. Users can quickly answer questions, and view their results, all within a clean, interactive design that ensures a seamless and enjoyable experience.",
        tags: [
            {
                name: "react.js",
                color: "blue-text-gradient",
            },
        ],
        image: quizzweb,
        source_code_link: "https://github.com/NguyenKhangPhuc",
        demo: "https://quizapp-eight-alpha.vercel.app/",
    },
    {
        name: "Todolist",
        description:
            "The ToDoList website offers a user-friendly interface for easy task management, with features to add, complete, delete, and clear tasks, ensuring efficient and convenient organization.",
        tags: [
            {
                name: "typescript",
                color: "blue-text-gradient",
            },
            {
                name: "golang(fiber)",
                color: "green-text-gradient",
            },
            {
                name: "mongodb",
                color: "pink-text-gradient",
            },
        ],
        image: todolist,
        source_code_link: "https://github.com/NguyenKhangPhuc/Todolist",
        demo: "https://todolist-production-8160.up.railway.app/",
    },
    {
        name: "Tetris",
        description:
            "A classic Tetris game following the usual rules, where players control falling blocks, clear lines, and track their progress with a scoring system. It features simple controls and a clean, user-friendly interface.",
        tags: [
            {
                name: "c++",
                color: "blue-text-gradient",
            },
            {
                name: "raylib",
                color: "green-text-gradient",
            },
        ],
        image: tetris,
        source_code_link: "https://github.com/NguyenKhangPhuc/Tetris-Game",
        demo: "",
    },
];

export { certificates, technologies, experiences, testimonials, projects };