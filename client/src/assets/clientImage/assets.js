import courseImage from "./couseimage.jpg"
import teacher from "./teacher.jpeg"
import avtar1 from "./avtar1.jpg"
import avtar2 from "./avtar2.jpg"
import avtar3 from "./avtar3.jpg"
import logo from "./logo.png"
import addIcon from "./addIcon.svg";
import dashboardIcon from "./dashboardIcon.svg";
import listIcon from "./listIcon.svg";


export const assets={
  logo,
  addIcon,
  dashboardIcon,
  listIcon,
}


//stats objects
export const stats = [
  { heading: "25K+", desc: "Student" },
  { heading: "500+", desc: "Courses" },
  { heading: "75+", desc: "Instructors" },
  { heading: "250K+", desc: "Enrollments" },
];

//sample category
export const categories = [
  { name: "Development", icon: "💻" },
  { name: "Business", icon: "📊" },
  { name: "Marketing", icon: "📱" },
  { name: "Design", icon: "🎨" },
  { name: "Music", icon: "🎵" },
];

//sample course
export const courses = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    instructor: "John Smith",
    rating: 4.5,
    students: 1235,
    price: 49.99,
    image: courseImage,
    duration: 22,
    syllabus: [
      {
        section: "Introduction",
        lectures: ["Welcome", "Course Overview", "What You Will Learn"],
      },
      {
        section: "Frontend Basics",
        lectures: ["HTML Essentials", "CSS Fundamentals", "JavaScript Introduction"],
      },
      {
        section: "Project Setup",
        lectures: ["VSCode Setup", "Live Server", "Folder Structure"],
      },
    ],
  },
  {
    id: 2,
    title: "Advanced JavaScript Concepts",
    instructor: "Jane Doe",
    rating: 4.8,
    students: 987,
    price: 59.99,
    image: courseImage,
    duration: 22,
    syllabus: [
      {
        section: "Advanced Functions",
        lectures: ["Closures", "Callbacks", "Higher-Order Functions"],
      },
      {
        section: "Asynchronous JavaScript",
        lectures: ["Promises", "Async/Await", "Event Loop"],
      },
      {
        section: "JavaScript Patterns",
        lectures: ["Module Pattern", "Observer Pattern"],
      },
    ],
  },
  {
    id: 3,
    title: "UI/UX Design Masterclass",
    instructor: "John Smith",
    rating: 4.7,
    students: 1456,
    price: 69.99,
    image: courseImage,
    duration: 22,
    syllabus: [
      {
        section: "Design Foundations",
        lectures: ["Design Thinking", "User-Centered Design"],
      },
      {
        section: "Tools Overview",
        lectures: ["Figma Basics", "Wireframing in Adobe XD"],
      },
      {
        section: "User Testing",
        lectures: ["Creating Prototypes", "Collecting Feedback"],
      },
    ],
  },
  {
    id: 4,
    title: "Python for Data Science",
    instructor: "John Smith",
    rating: 3.6,
    students: 2134,
    price: 54.99,
    image: courseImage,
    duration: 22,
    syllabus: [
      {
        section: "Python Basics",
        lectures: ["Syntax & Variables", "Loops & Functions"],
      },
      {
        section: "Libraries for Data Science",
        lectures: ["NumPy", "Pandas", "Matplotlib"],
      },
      {
        section: "Data Analysis",
        lectures: ["Cleaning Data", "Visualizing Data"],
      },
    ],
  },
  {
    id: 5,
    title: "Introduction to React",
    instructor: "Jane Doe",
    rating: 4.3,
    students: 789,
    price: 39.99,
    image: courseImage,
    duration: 22,
    syllabus: [
      {
        section: "React Basics",
        lectures: ["JSX", "Components", "Props"],
      },
      {
        section: "React State",
        lectures: ["useState Hook", "State Lifting"],
      },
      {
        section: "React Events",
        lectures: ["Handling Events", "Forms in React"],
      },
    ],
  },
  {
    id: 6,
    title: "Deep Learning with Python",
    instructor: "Jane Doe",
    rating: 4.9,
    students: 1100,
    price: 89.99,
    image: courseImage,
    duration: 22,
    syllabus: [
      {
        section: "Deep Learning Overview",
        lectures: ["What is Deep Learning?", "Neural Networks"],
      },
      {
        section: "TensorFlow Basics",
        lectures: ["Installing TF", "Building a Simple Model"],
      },
      {
        section: "Model Evaluation",
        lectures: ["Accuracy vs Loss", "Overfitting"],
      },
    ],
  },
  {
    id: 7,
    title: "The Complete Node.js Course",
    instructor: "Alex Johnson",
    rating: 4.6,
    students: 1342,
    price: 69.99,
    image: courseImage,
    duration: 22,
    syllabus: [
      {
        section: "Node.js Basics",
        lectures: ["Intro to Node.js", "NPM & Modules"],
      },
      {
        section: "File System",
        lectures: ["Reading/Writing Files", "Streams & Buffers"],
      },
      {
        section: "Express.js",
        lectures: ["Routing", "Middleware"],
      },
    ],
  },
  {
    id: 8,
    title: "Full Stack Development with MERN",
    instructor: "Sarah Williams",
    rating: 4.4,
    students: 1156,
    price: 79.99,
    image: courseImage,
    duration: 22,
    syllabus: [
      {
        section: "Frontend with React",
        lectures: ["React Setup", "React Router"],
      },
      {
        section: "Backend with Node/Express",
        lectures: ["REST API", "CRUD Operations"],
      },
      {
        section: "MongoDB Integration",
        lectures: ["Mongoose Models", "Database Queries"],
      },
    ],
  },
  {
    id: 9,
    title: "Modern JavaScript from Scratch",
    instructor: "Sarah Williams",
    rating: 4.2,
    students: 923,
    price: 49.99,
    image: courseImage,
    duration: 22,
    syllabus: [
      {
        section: "JS Fundamentals",
        lectures: ["Variables", "Loops", "Functions"],
      },
      {
        section: "Modern Syntax",
        lectures: ["ES6 Features", "Arrow Functions", "Destructuring"],
      },
      {
        section: "Browser APIs",
        lectures: ["DOM Manipulation", "Fetch API"],
      },
    ],
  },
  {
    id: 10,
    title: "Data Structures and Algorithms",
    instructor: "Robert Chen",
    rating: 4.7,
    students: 1030,
    price: 59.99,
    image: courseImage,
    duration: 22,
    syllabus: [
      {
        section: "Introduction to DSA",
        lectures: ["Why DSA?", "Time & Space Complexity"],
      },
      {
        section: "Data Structures",
        lectures: ["Arrays", "Stacks", "Queues", "Linked Lists"],
      },
      {
        section: "Algorithms",
        lectures: ["Sorting", "Searching", "Recursion"],
      },
    ],
  },
  {
    id: 11,
    title: "Machine Learning with TensorFlow",
    instructor: "Robert Chen",
    rating: 4.8,
    students: 800,
    price: 99.99,
    image: courseImage,
    duration: 22,
    syllabus: [
      {
        section: "ML Foundations",
        lectures: ["Supervised vs Unsupervised", "Linear Regression"],
      },
      {
        section: "TensorFlow Models",
        lectures: ["Keras API", "Building and Training Models"],
      },
      {
        section: "Model Tuning",
        lectures: ["Hyperparameters", "Cross Validation"],
      },
    ],
  },
  {
    id: 12,
    title: "Mobile App Development with Flutter",
    instructor: "Alex Johnson",
    rating: 4.3,
    students: 1200,
    price: 64.99,
    image: courseImage,
    duration: 22,
    syllabus: [
      {
        section: "Flutter Setup",
        lectures: ["Installing Flutter", "First App"],
      },
      {
        section: "Widgets",
        lectures: ["Stateless vs Stateful", "Layouts"],
      },
      {
        section: "Navigation & State",
        lectures: ["Routing", "State Management"],
      },
    ],
  },
];



//sample instructors

export  const instructors = [
    { id: 1, name: "John Smith", image: teacher ,specialization:"UI/UX Designer",students:300,experience:2.4,phone:7635786321},
    { id: 3, name: "Alex Johnson", image: teacher ,specialization:"Backend Development" ,students:400 ,experience:3.7,phone:7635786321},
    { id: 4, name: "Jane Doe", image: teacher ,specialization:"Development" ,students:300 ,experience:3.6,phone:7635786321},
    { id: 5, name: "Robert Chen", image: teacher ,specialization:"Machine Learning" ,students:400 ,experience:2.5,phone:7635786321},
    { id: 2, name: "Sarah Williams", image: teacher ,specialization:"Development" ,students:200 ,experience:3.7,phone:7635786321},
];

//sample testimonials

export const testimonials = [
    {
      id: 1,
      comment: "Bytefy transformed my career. I went from knowing nothing about coding to landing a job as a full-stack developer in just 6 months!",
      user: "Michael P.",
      avatar: avtar1
    },
    {
      id: 2,
      comment: "The courses are well-structured and the instructors are top-notch. I've taken several courses and each one has been excellent.",
      user: "Lisa T.",
      avatar: avtar2
    },
    {
      id: 3,
      comment: "As someone switching careers, Bytefy provided me with all the skills I needed to make a successful transition into tech.",
      user: "David R.",
      avatar: avtar3
    }
];
