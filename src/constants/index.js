import project1 from "../assets/projects/Portfolio_project.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project4 from "../assets/projects/Optical_Character_Recognition.jpeg";
import project5 from "../assets/projects/RaspberryPi4.jpeg";
import project6 from "../assets/projects/Projeto_Sensor.png";
import project7 from "../assets/projects/pwm_motor.png";  
import project8 from "../assets/projects/Photovoltaic_Panel_Batery.png";
import project9 from "../assets/projects/AGV_Robot.jpeg";
import project10 from "../assets/projects/PLC_Schneidder.jpeg";
import project11 from "../assets/projects/Agencia_Viagens.png";
import project12 from "../assets/projects/Flexsim_Simulation.png";

export const HERO_CONTENT = `I am a passionate eletrical and computers engineer, with some background in IT area. With 1 years of hands-on experience as a DBA i was able to develop and improve my skills in SQL Server and work with many other technologies. I have skills in both software and hardware components, but my main interest goes towards the software, i have some experience in projects with technologies such as React, TailwindCSS, Python, C/C++, SQL, Git and many more. My strong foundation helped me master these technologies, currently my goal is to improve them even further, while also be able to learn new technologies and face new challenges in my professional carreer.`;

export const ABOUT_TEXT = `I'm a dedicated student located in Penafiel, Porto, Portugal currently pursuing my master's degree in automation and systems at ISEP in Portugal. My academic journey in electrical and computer engineering has equipped me with a strong foundation in this field, and I'm now eager to apply my knowledge and skills in a professional setting.
I am currently actively searching for opportunities in my field to gain practical experience. I believe that hands-on experience is invaluable in furthering my skills and making a meaningful contribution to projects. I am eager to collaborate with like-minded professionals and organizations that share my enthusiasm for innovation and problem-solving.`;

export const EXPERIENCES = [
  {
    year: "2024 - 2024 (10 months)",
    role: "Database Reliability Engineer",
    company: "Jumia Porto Tech Center",
    description: `Member of the SRE team of Jumia with the role of DBRE( Database Reliability Engineer) in Jumia Porto Tech Center. As a team we were responsible by the SQL Server environment, with this experience i learnt and applied various concepts about database management, security management, Disaster recovery, High availability, Migration and Upgrade Management, Auditing, Troubleshooting, Automation, Scripting, Monitoring, Log analysis. During this time i was able to master a wide range of techologies such as: windows powershell, Microsoft SQL Server, SQL Server Agent, ODBC Drivers, Linked Servers, SQL Profiler, Grafana, Jira, Confluence, Veeam Backup and Replication between many more technologies, beeing the main focus the Microsoft SQL Server. My main functions as a DBRE relied on the administration, monitoring and maintenance of the SQL Server databases to ensure high availability, performance and security.`,
    technologies: ["SQL Server", "Grafana", "Windows PowerShell", "SQL Profiler", "Veeam"],  
  },
  {
    year: "2023 - 2023 (6 months)",
    role: "Internship",
    company: "Central Casa",
    description: ` During my last year of studies I carried out a curricular internship at the company Central Casa, where I learned and worked on topics related to electric mobility, such as load balancing systems. In addition, I learned home automation concepts, including the most used communication protocols such as ZigBee, Z-Wave and Wifi`,
    technologies: ["ZigBee", "Z-wave", "WallBoxes", "Home Automation", "EM", "LBS"],
  },
];

export const PROJECTS = [
  {
    title: "Portfilio Website",
    image: project1,
    description:
      "A fully functional portfolio website builded mainly with React, TailwindCSS and the React framework Framer.",
    technologies: ["React", "TailwindCSS", "HTML", "Framer", "Git"],
  },
  {
    title: "Store Management App",
    image: project2,
    description:
      "An application built in C/C++ with the objective of delievering a full functional system capable of handle market transations in the case of a bought or sell of a product, store products, insert new products, besides the more casual functions such as list all the products and delete a product, in the end the app was capable of checking the balance of a transation.",
    technologies: ["C/C++"],
  },
  {
    title: "Signal Processing Circuit for sensor activation",
    image: project6,
    description:
      "This project consisted in the implementation and development of a signal processing circuit, for a temperature sensor, which will later control a motor using LABVIEW software analyse the entire system operation. ",
    technologies: ["Eletronics", "Arduino", "C/C++", "LabView"],
  },
  {
    title: "PWN Controlling motor",
    image: project7,
    description:
      " Development of Assembly code implemented on a microcontroller on a board developed by ISEP in order to control a motor",
    technologies: ["Assembly"],
  },
  {
    title: "Battery Design for Solar Photovoltaic System",
    image: project8,
    description:
      " In my last year of my degree, I completed my degree thesis, which consisted of sizing a battery for a solar photovoltaic system. This work consisted of studying and sizing the best battery to implement in a previously selected photovoltaic system",
    technologies: ["Excel", "Dashboard", "Batteries", "Photovoltaic Systems"],
  },
  {
    title: "Automated Guided Vehicle(AGV) Robot",
    image: project9,
    description:
      " Implementation and development of a control board (Arduino) starting from a microcontroller, which was later used to develop an AGV Robot, which would be capable of following a black line and avoiding obstacles, with the possibility of being controlled remotely by cell phone.",
    technologies: ["Eletronics", "C/C++", "microcontroller"],
  },
  {
    title: " Food Industry Automation System",
    image: project10,
    description:
      "  Development a system coded with Ladder Language in SoMachine Software, and development of a control interface in HMI, that will alow the control of a Schneider electricals PLC, and will also allow to simulate, monitor, automate and control the whole processment chain of a food processing industry. ",
    technologies: ["SoMachine", "HMI", "Batteries", "Photovoltaic Systems"],
  },
  {
    title: "Optical Character Regonition(OCR) System",
    image: project4,
    description:
      " Development of a system using the Python programming language, capable of detecting different characters in an image and processing them in the system, returning the processed characters, OCR (Optical Character Recognition). The System was able to detect characters even in diferent languages and tranlate them to the desired language.",
    technologies: ["Python", "OCR", "Machine Learning"],
  },
  {
    title: "Product and Production Chain Management of a Pneumatic Cylinder Industry",
    image: project12,
    description:
      " Creating a Simulation Environment of the production of pneumatic cylinder industry in FlexSim software, with the aim of simulating the entire production process, from the arrival of raw materials to the final product, allowing to analyze the production process and optimize it, in order to increase productivity and reduce costs. In the end of the project the aim was to attend the market needs while optimize the production process the most we could so that the company could increase the annual incomme.",
    technologies: ["FlexSim", "Simulation", "Industry Management"],
  },
  {
    title: "Information System for a Travel Agency Company",
    image: project11,
    description:
      " Development of a Information System for a Agency Travel Company. The system was capable of handle multiple requests, while also offers package possibility (trip + hotel, cruise + hotel, trip + cruise + hotel), the system would store the data in a database (MySQL), the frontend was developed in HTML, CSS and Javascript, the backend communication was developed in PHP. ",
    technologies: ["PHP", "HTML", "CSS", "Javascript", "MySQL", "Figma"],
  },
  {
    title: "Minimal Linux Distribution for Raspberry Pi",
    image: project5,
    description:
      " Creation of a minimal Linux distribution to run in a raspberrypi 4 board, capable of acessing the Web, while also generating graphic images, the distribution was created using the Buildroot tool, the kernel was compiled and the file system was created, the distribution was capable of running on a Raspberry Pi board.",
    technologies: ["Buildroot", "Linux", "Kernel", "File Systems", "Raspberry Pi"],
  },
  
];

export const CONTACT = {
  address: "Penafiel, Porto, Portugal",
  email: "If you want to get in touch, you can reach me at pdrubenpd1@gmail.com ",
};