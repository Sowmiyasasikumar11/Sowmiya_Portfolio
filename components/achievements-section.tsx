"use client"

import { motion } from "framer-motion"
import { Trophy, Award, Users } from "lucide-react"

const achievements = [
  {
    icon: Trophy,
    title: "Springer Publication",
    description:
      "Published research paper in Springer journal, contributing to the academic community with innovative findings in technology.",
    highlight: "Research Publication",
  },
  {
    icon: Award,
    title: "SelfE Hackathon Finalist",
    description:
      "Reached the finals of SelfE Hackathon by developing an innovative solution that impressed the judges with its creativity and technical implementation.",
    highlight: "Top Finalist",
  },
  {
    icon: Users,
    title: "CIR Assistant Student Director",
    description:
      "Served as Assistant Student Director at CIR, leading initiatives, coordinating events, and fostering collaboration among students.",
    highlight: "Leadership Role",
  },
]

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 sm:py-36 relative">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-lg font-semibold tracking-widest uppercase">Achievements</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-3 mb-6">Milestones &amp; Recognition</h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 mx-auto rounded-full shadow-[0_0_12px_rgba(59,130,246,0.7)]" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              whileHover={{ y: -6 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 text-center glow-card"
            >
              <div className="inline-flex p-5 rounded-2xl bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <achievement.icon className="h-9 w-9" />
              </div>
              <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20 mb-5">
                {achievement.highlight}
              </span>
              <h3 className="text-xl font-bold mb-3">{achievement.title}</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
