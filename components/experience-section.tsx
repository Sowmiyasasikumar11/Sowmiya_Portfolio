"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "Aptitude Guru Hemchandar",
    description:
      "Developed a web-based Leave Management System with role-based access for students, Class Advisors, and HODs. Implemented authentication, CRUD operations, and database integration to streamline leave approval workflows and record management.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/Sowmiyasasikumar11/Leave_Management_System",
    live: "https://mern-brown-psi.vercel.app/",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 sm:py-36 relative">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-lg font-semibold tracking-widest uppercase">Experience</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-3 mb-6">Professional Journey</h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 mx-auto rounded-full shadow-[0_0_12px_rgba(59,130,246,0.7)]" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: index * 0.1 }}
              className="group relative p-10 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 glow-card"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/6 via-transparent to-cyan-500/6 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-7">
                  <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 w-fit">
                    <Briefcase className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                      {experience.title}
                    </h3>
                    <p className="text-primary/80 font-semibold text-lg mt-1">{experience.company}</p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-7 text-lg">
                  {experience.description}
                </p>

                <div className="flex flex-wrap gap-2.5 mb-8">
                  {experience.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-sm px-4 py-1.5 bg-primary/10 text-primary/80 border border-primary/20 hover:bg-primary/20 transition-colors font-medium"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="gap-2 hover:border-primary/60 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  >
                    <a href={experience.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="gap-2 hover:border-primary/60 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  >
                    <a href={experience.live} target="_blank" rel="noopener noreferrer">
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
