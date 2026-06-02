"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react"

const contactLinks = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:sowmiya110307@gmail.com",
    label: "sowmiya110307@gmail.com",
    external: false,
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/Sowmiyasasikumar11",
    label: "github.com/Sowmiyasasikumar11",
    external: true,
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/sowmiya-m-s/",
    label: "linkedin.com/in/sowmiya-m-s",
    external: true,
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-24 relative">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Contact</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-5">Let&apos;s Work Together</h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 mx-auto rounded-full shadow-[0_0_12px_rgba(59,130,246,0.7)]" />
          <p className="text-muted-foreground mt-6 max-w-xl mx-auto text-lg leading-relaxed">
            Open to internships, collaborations, and exciting opportunities. Feel free to reach out
            — I typically respond within 24 hours.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-5">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              whileHover={{ x: 7 }}
              className="flex items-center justify-between p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 glow-card group"
            >
              <div className="flex items-center gap-5">
                <div className="p-3.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <link.icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-base">{link.name}</p>
                  <p className="text-base text-muted-foreground mt-0.5">{link.label}</p>
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300 shrink-0" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
