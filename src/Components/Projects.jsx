import { motion } from "framer-motion";
import { title } from "framer-motion/client";

function Projects() {

  // ---------------- REACT PROJECTS ----------------
  const reactProjects = [
    {
      title: "NSKart",
      desc: "E-Commerce Web App",
      links:"https://namancomtech.github.io/NSKart",
    },
    {
      title: "Property Website",
      desc: "Property Website with Filter,Sorting & Search Functionality.",
      links:"https://namancomtech.github.io/PropertyWebsite",
    },
    {
      title: "ToDoList",
      desc: "Add your Daily Tasks here & get status report in Pdf file.",
      links:"https://namancomtech.github.io/ToDoList",
    },
  ];

  return (

<section id="projects" className="bg-slate-900 text-white py-20 px-6 md:px-20">


{/* ---------------- HEADING ---------------- */}

<motion.h2
initial={{opacity:0,y:50}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.1}}
className="text-4xl md:text-5xl font-bold text-center text-cyan-400 mb-16"
>

My <span className="text-white">Projects</span>

</motion.h2>

{/* ================= REACT PROJECTS ================= */}

<h3 className="text-2xl font-bold text-cyan-400 mb-8">
React Projects
</h3>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

{reactProjects.map((project,index)=>(

<motion.div
key={index}

initial={{opacity:0,y:50}}
whileInView={{opacity:1,y:0}}
transition={{delay:index*0.2}}

whileHover={{
scale:1.05,
boxShadow:"0 0 40px #22d3ee"
}}

className="bg-slate-800 p-6 rounded-2xl cursor-pointer transition-all duration-300"
>

<h4 className="text-xl font-bold mb-2">
{project.title}
</h4>

<p className="text-gray-300">
{project.desc}
</p>

  {/*  LINKS BUTTON */}
<a
  href={project.links}
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="mt-4 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg">
    View Project
  </button>
</a>

</motion.div>

))}

</div>

</section>

  );
}

export default Projects;