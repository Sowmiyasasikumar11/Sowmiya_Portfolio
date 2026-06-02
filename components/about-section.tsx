"use client"

import { motion } from "framer-motion"
import { Code2, Brain, Rocket } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Building end-to-end web applications with React, Node.js, and modern frameworks.",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Creating intelligent solutions with Python, Scikit-learn, and ML-driven features.",
  },
  {
    icon: Rocket,
    title: "Problem Solving",
    description: "Tackling complex challenges with efficient, scalable, and maintainable solutions.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-36 relative">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-lg font-semibold tracking-widest uppercase">About Me</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-3 mb-6">Crafting Digital Experiences</h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 mx-auto rounded-full shadow-[0_0_12px_rgba(59,130,246,0.7)]" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="space-y-6"
          >
            <p className="text-2xl text-muted-foreground leading-relaxed">
              I&apos;m a 3rd-year Computer Science Engineering student with strong interests in full
              stack development, artificial intelligence, and problem solving. I enjoy developing
              scalable web applications, machine learning solutions, and modern digital experiences
              that combine creativity with technology.
            </p>
            <p className="text-2xl text-muted-foreground leading-relaxed">
              Through hands-on projects and continuous learning, I actively strengthen my development
              skills and explore emerging technologies — from building intuitive front-end interfaces
              to designing robust back-end systems and AI-powered features.
            </p>
            <p className="text-2xl text-muted-foreground leading-relaxed">
              I believe in writing clean, maintainable code and staying current with industry trends
              to deliver solutions that are both technically sound and impactful in the real world.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="grid gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-7 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 glow-card"
              >
                <div className="flex items-start gap-5">
                  <div className="p-3.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shrink-0">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-2xl mb-2 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
