"use client"

import { motion } from "framer-motion"
import { Code2, Brain, Rocket } from "lucide-react"

export function AboutSection() {
  const highlights = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Building end-to-end web applications with modern technologies"
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Creating intelligent solutions using ML algorithms and frameworks"
    },
    {
      icon: Rocket,
      title: "Problem Solving",
      description: "Tackling complex challenges with efficient and scalable solutions"
    }
  ]

  return (
    <section id="about" className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">About Me</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
            Crafting Digital Experiences
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m a 3rd year Computer Science Engineering student with a deep passion for full stack 
              development and artificial intelligence. My journey in tech has been driven by curiosity 
              and a desire to build solutions that make a real impact.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From crafting intuitive user interfaces to designing robust backend systems and implementing 
              AI-powered features, I enjoy working across the entire development stack. I believe in writing 
              clean, maintainable code and staying updated with the latest industry trends.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source 
              projects, or solving algorithmic challenges on competitive programming platforms.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 glow-card"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
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
