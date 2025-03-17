import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    
    guviGenAI,
    googleAndroid,
    ScalarAI,
    WebIBM,
    Metaverse,
    AWS,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    php,
    django,
    mern,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    androidStudio,
    postman,
    metalogo,
    java,
    colab,
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
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Android App Developer",
      icon: mobile,
    },
    {
      title: "Basic AI Engineer",
      icon: backend,
    },
    {
      title: "Full Stack Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML ",
      icon: html,
    },
    {
      name: "CSS ",
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
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "androidStudio",
      icon: androidStudio,
    },
    {
      name: "postman",
      icon: postman,
    },
    {
      name: "metalogo",
      icon: metalogo,
    },
  ];
  
  const experiences = [
    {
      title: "Student Achievement Management System",
      company_name: "Team Project",
      icon: php,
      iconBg: "#383E56",
      date: "April 2024 - June 2024",
      points: [
        "Developed a responsive website to enhance interaction between staff and students.",
        "Implemented a certificate upload feature for students, allowing staff to track achievements.",
        "Integrated a backend database with PHP for efficient data management.",
        
      ],
      Etags: [
        {
          name: "PHP",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
      ],
    },
    {
      title: "Duplicate Data Download Alert System (DDAS)",
      company_name: "Team Project",
      icon: django, 
      iconBg: "#E6DEDD",
      date: "August 2024 - Ongoing",
      points: [
        "Collaborating with a team to develop a system that alerts users about redundant data downloads.",
        "Established the Django-MongoDB connection and integrated frontend and backend components.",
        "Optimized storage and network efficiency through data hashing techniques.",
       
      ],
      Etags: [
        {
          name: "Django",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "SHA-256 hashing",
          color: "pink-text-gradient",
        },
      ],
    },
    {
      title: "Healthcare ChatBot (WeCare)",
      company_name: "Independent Project",
      icon: colab, 
      iconBg: "#383E56",
      date: "January 2025",
      points: [
        "Developed a medical chatbot to assist heart patients with reliable health-related responses.",
        "Processed medical documents to generate easy-to-understand health information.",
        "Used AI models for accurate health query responses.",
        
      ],
      Etags: [
        {
          name: "LangChain",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "PubMedBERT",
          color: "pink-text-gradient",
        },
        {
          name: "HuggingFace",
          color: "pink-text-gradient",
        },
        
      ],
    },
    {
      title: "MERN Stack To-Do List Website",
      company_name: "Independent Project",
      icon: mern, 
      iconBg: "#383E56",
      date: "January 2025",
      points: [
        "Built a productivity-focused To-Do List website using the MERN stack.",
        "Implemented CRUD operations for real-time task management.",
        "Developed and tested APIs using Postman, ensuring seamless backend functionality.",
        "Used Bootstrap to create a clean and responsive UI.",
        
      ],
      Etags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "Node.js",
          color: "pink-text-gradient",
        },
        {
          name: "Express.js",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "Postman",
          color: "pink-text-gradient",
        },
      ],
    },
    {
      title: "Dynamic Instagram Effects",
      company_name: "Meta Spark Studio",
      icon: metalogo, 
      iconBg: "#E6DEDD",
      date: "October 2023",
      points: [
        "Created two dynamic effects for Instagram to enhance user engagement.",
        "Utilized interactive visual elements for a more immersive social media experience.",
       
      ],
      Etags: [
        {
          name: "Meta Spark Studio",
          color: "blue-text-gradient",
        },
        
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
      name: "Google Android Virtual Internship",
      description:
        "My Google Android Virtual Internship helped me understand Android app development, covering UI/UX design in Android Studio, working with Firebase, and deploying/debugging Android applications.",
      
      image: googleAndroid,
      source_code_link: "https://github.com/",
    },
    {
      name: "Guvi GenAI",
      description:
        "With Guvi GenAI, I got hands-on experience with Generative AI, learning how AI models create content, the deep learning concepts behind it, and practical applications of AI-driven tools. It helped me to develop a Medical Chatbot",
      
      image: guviGenAI,
      source_code_link: "https://github.com/",
    },
    {
      name: " Metaverse",
      description:
        "In Metaverse Phase 1 and Phase 2 Workshop, I explored virtual and augmented reality, gaining insights into 3D modeling, creating immersive environments, and understanding how the metaverse can be applied in real-world scenarios.",
      image: Metaverse,
      source_code_link: "https://github.com/",
    },
    {
      name: "Scalar Image Generation in AI",
      description:
        "My Scalar Image Generation in AI certification introduced me to AI-powered image generation techniques using models like GANs and Stable Diffusion. I also learned about training AI to generate visuals from text prompts and ethical considerations in AI-generated content.",
      
      image: ScalarAI,
      source_code_link: "https://github.com/",
    },
    {
      name: "AWS Cloud Foundation",
      description:
      "In my learning journey through the AWS Cloud Foundation course, I gained a solid understanding of the fundamentals of cloud computing and how AWS provides scalable and reliable cloud solutions. I explored core AWS services such as EC2 for virtual machine deployment, S3 for object storage, and RDS for managed databases."   ,   
      image: AWS,
      source_code_link: "https://github.com/",
    },
    {
      name: " Web Development by IBM",
      description:
        "Web Development by IBM gave me full-stack development skills, covering frontend technologies (HTML, CSS, JavaScript), backend development with Node.js and Express, and database management using MongoDB or MySQL. I also learned how to build and deploy complete web applications.",
      image: WebIBM,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };