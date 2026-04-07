import { motion } from "framer-motion";
import Profile from "../assets/Profile.jpeg"

function About() {
  return (
    <section
      id="about"

      // pt-28 important hai kyuki navbar fixed hai
      // isse section navbar ke niche start hoga
      className="bg-slate-900 text-white pt-28 pb-20 px-8 md:px-10 md:py-40"
    >

      {/* ---------------- MAIN CONTAINER ---------------- */}
      {/* mobile → column layout */}
      {/* desktop → row layout */}
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

        {/* ---------------- LEFT IMAGE SECTION ---------------- */}
        <motion.div

          // image left se slide karegi
          initial={{ opacity: 0, x: -80 }}

          // viewport me aate hi animation
          whileInView={{ opacity: 1, x: 0 }}

          transition={{ duration: 1 }}

          className="md:w-1/3 flex justify-center relative"
        >

          {/* ---------------- PROFILE IMAGE ---------------- */}

          <motion.img
            src={Profile}
            alt="Naman Sharma"

            className="
              w-56 h-56 md:w-72 md:h-72
              rounded-full
              border-4 border-cyan-400
              shadow-[0_0_40px_#22d3ee]
              object-cover
            "

            // hover animation
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 60px #22d3ee",
            }}

            transition={{ duration: 0.3 }}
          />

        </motion.div>


        {/* ---------------- RIGHT TEXT SECTION ---------------- */}

        <motion.div

          // right se slide animation
          initial={{ opacity: 0, x: 80 }}

          whileInView={{ opacity: 1, x: 0 }}

          transition={{ duration: 1 }}

          className="md:w-2/3 flex flex-col items-start gap-6"
        >

          {/* ---------------- HEADING ---------------- */}

          <motion.h2

            initial={{ opacity: 0, y: 50 }}

            whileInView={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.8 }}

            className="text-4xl md:text-5xl font-bold text-cyan-400"
          >

            <span className="text-white">About</span> Me

          </motion.h2>


          {/* ---------------- ABOUT TEXT ---------------- */}

          <p className="text-gray-300 text-lg md:text-xl">

            Hi, I'm

            <motion.span
              className="text-cyan-400 font-bold ml-2"

              // glowing name animation
              animate={{
                textShadow: [
                  "0 0 5px #22d3ee",
                  "0 0 20px #22d3ee",
                  "0 0 5px #22d3ee",
                ],
              }}

              transition={{ repeat: Infinity, duration: 2 }}
            >
  
              Naman Sharma

            </motion.span>

        ' passionate web developer focused on creating modern web applications using React, React-Bootstrap and PHP for backend services.

</p>


{/* learning + interest */}

<p className="text-gray-300 text-lg md:text-xl">

  I like to elevate my web development skills with time.
  I can help you in gaining more profit in business by building your website
  by React JS & React-Bootstrap with strong PHP backend technology.

</p>


{/* collaboration + mindset */}

<p className="text-gray-300 text-lg md:text-xl">

  I enjoy creating projects, exploring new AI trends,
  and creating convenience user experience for my clients.

</p>

          {/* ---------------- SOCIAL ICONS ---------------- */}

          <div className="flex gap-5 mt-2">

            <a
              href="https://github.com/namancomtech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-white text-2xl"
            >
              <i className="ri-github-fill"></i>
            </a>

            <a
              href="https://linkedin.com/in/namancomtech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-white text-2xl"
            >
              <i className="ri-linkedin-box-fill"></i>
            </a>

            <a
              href="mailto:namancomtech@gmail.com"
              className="text-cyan-400 hover:text-white text-2xl"
            >
              <i className="ri-mail-fill"></i>
            </a>

            <a
              href="https://instagram.com/friendly_naman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-white text-2xl"
            >
              <i className="ri-instagram-fill"></i>
            </a>

          </div>


          {/* ---------------- BUTTON ---------------- */}

          <motion.a
            href="/PortfolioNaman/NamanResume.pdf?v=2"   //after deploy 
            target="_blank"
            rel="noopener noreferrer"

            // mobile → center
            // desktop → left
            className="mt-6 px-6 py-2 rounded-3xl font-semibold text-black bg-cyan-400 shadow-lg self-center md:self-start"

            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 60px #22d3ee",
              backgroundColor: "transparent",
              color: "white",
              border: "2px solid cyan",
            }}

            whileTap={{ scale: 0.95 }}
          >

            More About Me

          </motion.a>

        </motion.div>

      </div>

    </section>
  );
}

export default About;