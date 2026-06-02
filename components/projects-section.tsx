"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Service Booking & Scheduling System",
    description:
      "A full-stack web application enabling customers to book services by preferred time slots. Providers and admins manage approvals, schedules, and workflows through a role-based access control system.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/Sowmiyasasikumar11/Service_Booking_Scheduling_System",
    live: "https://servicebookingscheduling.netlify.app/login",
  },
  {
    title: "FemAura",
    description:
      "An AI-powered women's health and wellness platform for tracking menstrual cycles, monitoring mood patterns, and accessing personalized health insights through an intuitive, user-friendly interface.",
    tech: ["React.js", "Firebase", "Python", "Machine Learning"],
    github: "https://github.com/Sowmiyasasikumar11/femaura",
    live: "https://femaura.vercel.app/",
  },
  {
    title: "Chronic Kidney Disease Prediction",
    description:
      "An AI/ML-based clinical decision support system that analyzes patient health data to assess CKD risk. Features data preprocessing, model training with Scikit-learn, and a Flask-powered prediction API to support early diagnosis.",
    tech: ["Python", "Scikit-learn", "Flask", "Pandas", "Machine Learning"],
    github: "https://github.com/Sowmiyasasikumar11/chronic-kidney-disease-prediction",
    live: "https://chronic-kidney-disease-prediction-kohl.vercel.app",
  },
  {
    title: "Pixel Python",
    description:
      "An interactive Snake Game built with Python and Pygame featuring smooth directional controls, real-time score tracking, collision detection, and polished game-over logic for an engaging gameplay experience.",
    tech: ["Python", "Pygame"],
    github: "https://github.com/Sowmiyasasikumar11/snake-game",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 sm:py-24 relative bg-card/25">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Projects</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-5">Featured Work</h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 mx-auto rounded-full shadow-[0_0_12px_rgba(59,130,246,0.7)]" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 glow-card flex flex-col"
            >
              {/* Watermark number */}
              <span className="absolute top-6 right-7 text-8xl font-bold text-primary/7 group-hover:text-primary/14 transition-colors duration-300 select-none pointer-events-none leading-none">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="relative z-10 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300 leading-snug pr-10">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-base leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2.5 mb-7">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-sm px-3.5 py-1.5 font-medium bg-primary/10 text-primary/80 border border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-3 mt-auto">
                  <Button
                    variant="outline"
                    size="default"
                    asChild
                    className="gap-2 hover:border-primary/60 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  {project.live && (
                    <Button
                      variant="outline"
                      size="default"
                      asChild
                      className="gap-2 hover:border-primary/60 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
