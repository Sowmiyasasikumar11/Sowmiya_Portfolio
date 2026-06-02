"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Service Booking and Scheduling System",
    description: "A full-stack web application that enables customers to book services based on preferred time slots while allowing providers and admins to manage approvals, schedules, and service workflows efficiently through role-based access control.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/Sowmiyasasikumar11/Service_Booking_Scheduling_System",
    live: "https://servicebookingscheduling.netlify.app/login"
  },
  {
    title: "FemAura",
    description: "An AI-powered women's health and wellness platform that helps users track menstrual cycles, monitor mood, and access personalized health insights through an interactive and user-friendly interface.",
    tech: ["React.js", "Firebase", "Python", "Machine Learning"],
    github: "https://github.com/Sowmiyasasikumar11/femaura",
    live: "https://femaura.vercel.app/"
  },
  {
    title: "Chronic Kidney Disease Prediction System",
    description: "Developed an AI/ML-based Chronic Kidney Disease prediction system using Python, Pandas, and Scikit-learn to analyze patient health data and assess disease risk. Implemented data preprocessing, machine learning model training, and prediction features to support early diagnosis and healthcare decision-making.",
    tech: ["Python", "Pandas", "Scikit-learn", "Flask", "HTML", "CSS", "Machine Learning"],
    github: "https://github.com/Sowmiyasasikumar11/chronic-kidney-disease-prediction",
    live: "https://chronic-kidney-disease-prediction-kohl.vercel.app"
  },
  {
    title: "Pixel Python",
    description: "Developed an interactive Snake Game using Python and Pygame featuring smooth controls, score tracking, collision detection, and game-over functionality with engaging gameplay mechanics.",
    tech: ["Python", "Pygame", "MongoDB"],
    github: "https://github.com/Sowmiyasasikumar11/snake-game"
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Projects</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
            Featured Work
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 glow-card flex flex-col"
            >
              {/* Project Number */}
              <span className="absolute top-4 right-4 text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="relative z-10 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                  {project.description.replace("&apos;", "'")}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-3 mt-auto">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="gap-2">
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  {project.live && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Live
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
