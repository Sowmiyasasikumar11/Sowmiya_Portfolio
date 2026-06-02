"use client"

import { motion } from "framer-motion"
import { Trophy, Award, Users } from "lucide-react"

const achievements = [
  {
    icon: Trophy,
    title: "Springer Publication",
    description: "Published research paper in Springer journal, contributing to the academic community with innovative findings in technology.",
    highlight: "Research Publication"
  },
  {
    icon: Award,
    title: "SelfE Hackathon Finalist",
    description: "Reached the finals of SelfE Hackathon by developing an innovative solution that impressed the judges with its creativity and technical implementation.",
    highlight: "Top Finalist"
  },
  {
    icon: Users,
    title: "CIR Assistant Student Director",
    description: "Served as Assistant Student Director at CIR, leading initiatives, coordinating events, and fostering collaboration among students.",
    highlight: "Leadership Role"
  }
]

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 sm:py-32 relative bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Achievements</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
            Milestones & Recognition
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 text-center glow-card"
            >
              <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <achievement.icon className="h-8 w-8" />
              </div>
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4">
                {achievement.highlight}
              </span>
              <h3 className="text-xl font-semibold mb-3">{achievement.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
