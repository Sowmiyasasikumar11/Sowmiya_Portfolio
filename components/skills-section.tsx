"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["C", "C++", "Python", "Java", "JavaScript"],
  },
  {
    title: "Web Technologies",
    skills: ["HTML", "CSS", "React.js", "Node.js", "Express.js"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "Firebase"],
  },
  {
    title: "Tools & Platforms",
    skills: ["GitHub", "VS Code", "Postman", "Jupyter Notebook", "Google Colab"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 sm:py-36 relative bg-card/25">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-lg font-semibold tracking-widest uppercase">Skills</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-3 mb-6">Technologies I Work With</h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 mx-auto rounded-full shadow-[0_0_12px_rgba(59,130,246,0.7)]" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: categoryIndex * 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 glow-card"
            >
              <h3 className="font-semibold text-2xl mb-6 gradient-text">{category.title}</h3>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    whileHover={{ scale: 1.07 }}
                    className="px-5 py-2.5 text-base font-medium rounded-full bg-secondary text-secondary-foreground border border-border hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
