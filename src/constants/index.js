import { title } from "framer-motion/client";
import {
    javascript,
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
    go_2,
    gratitude,
    initiare,
    university,
    c_plus_plus,
    golang,
    python,
    cakeshop,
    todolist,
    tetris,
    OOP_Java,
    full_stack,
    dimsum
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
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
        title: "Full Stack Web Development Certificate – University of Helsinki (Full Stack Open)",
        img: full_stack,
    },
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
        title: "The way to Go",
        img: go_2,
    },
    {
        title: "A Visual Introduction to Algorithms",
        img: algorithm,
    },
    {
        title: "Fundamentals of Machine Learning for Software Engineers",
        img: ml,
    },
    {
        title: "Learn Object-Oriented Programming in Java",
        img: OOP_Java,
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
        demo: "https://cake-shop-sigma.vercel.app/",
    },
    {
        name: "Quick Dimsum",
        description:
            "Built with React.js and Tailwind CSS and Golang (Fiber) with PostgreSQL, featuring customer authentication, food item browsing, product management, payment processing, and order history.",
        tags: [
            {
                name: "react.js",
                color: "blue-text-gradient",
            },
            { name: 'tailwind' },
            {
                name: "fiber",
                color: "green-text-gradient",
            },
            {
                name: "postgreSQL",
                color: "pink-text-gradient",
            },
        ],
        image: dimsum,
        source_code_link: "https://github.com/NguyenKhangPhuc/Dimsum",
        demo: "https://dimsum-production.up.railway.app/",
    }
];

export { certificates, technologies, projects };