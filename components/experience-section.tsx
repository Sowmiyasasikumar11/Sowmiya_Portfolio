"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "Aptitude Guru Hemchandar",
    description: "Developed a web-based Leave Management System with role-based access for students, Class Advisors, and HODs. Implemented authentication, CRUD operations, and database integration to streamline leave approval workflows and record management.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/Sowmiyasasikumar11/Leave_Management_System",
    live: "https://mern-brown-psi.vercel.app/"
  }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Experience</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
            Professional Journey
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 glow-card"
            >
              {/* Decorative gradient border */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />

              <div className="relative z-10 text-center">
                <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {experience.title}
                </h3>
                <p className="text-primary/80 font-medium mb-6">
                  {experience.company}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6 text-left">
                  {experience.description}
                </p>

                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {experience.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-sm px-3 py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-center gap-4">
                  <Button variant="outline" size="default" asChild>
                    <a href={experience.github} target="_blank" rel="noopener noreferrer" className="gap-2">
                      <Github className="h-4 w-4" />
                      GitHub Code
                    </a>
                  </Button>
                  <Button variant="outline" size="default" asChild>
                    <a href={experience.live} target="_blank" rel="noopener noreferrer" className="gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
