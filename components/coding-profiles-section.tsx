"use client"

import { motion } from "framer-motion"
import { Code, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"

const codingProfiles = [
  {
    name: "LeetCode",
    icon: Code,
    description: "Solving algorithmic challenges and improving problem-solving skills",
    link: "https://leetcode.com",
    color: "from-orange-500 to-yellow-500"
  },
  {
    name: "HackerRank",
    icon: Terminal,
    description: "Practicing coding challenges and earning skill certifications",
    link: "https://hackerrank.com",
    color: "from-green-500 to-emerald-500"
  }
]

export function CodingProfilesSection() {
  return (
    <section className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Coding Profiles</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
            Competitive Programming
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {codingProfiles.map((profile, index) => (
            <motion.div
              key={profile.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 glow-card"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${profile.color} mb-4`}>
                <profile.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{profile.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{profile.description}</p>
              <Button variant="outline" size="sm" asChild>
                <a href={profile.link} target="_blank" rel="noopener noreferrer">
                  View Profile
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
