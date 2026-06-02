"use client"

import { motion } from "framer-motion"
import { Code, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"

const codingProfiles = [
  {
    name: "LeetCode",
    icon: Code,
    description: "Solving algorithmic challenges and improving problem-solving skills through consistent practice.",
    link: "https://leetcode.com",
    color: "from-orange-500 to-yellow-500",
  },
  {
    name: "HackerRank",
    icon: Terminal,
    description: "Practicing coding challenges and earning skill certifications across multiple domains.",
    link: "https://hackerrank.com",
    color: "from-green-500 to-emerald-500",
  },
]

export function CodingProfilesSection() {
  return (
    <section className="py-16 sm:py-24 relative bg-card/25">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Coding Profiles</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-5">Competitive Programming</h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 mx-auto rounded-full shadow-[0_0_12px_rgba(59,130,246,0.7)]" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {codingProfiles.map((profile, index) => (
            <motion.div
              key={profile.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 glow-card"
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${profile.color} mb-5 shadow-lg`}>
                <profile.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{profile.name}</h3>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">{profile.description}</p>
              <Button
                variant="outline"
                size="default"
                asChild
                className="gap-2 hover:border-primary/60 hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
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
