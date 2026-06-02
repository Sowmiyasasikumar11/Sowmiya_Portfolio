"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin } from "lucide-react"

const contactLinks = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:sowmiya110307@gmail.com",
    label: "sowmiya110307@gmail.com"
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/Sowmiyasasikumar11",
    label: "github.com/Sowmiyasasikumar11"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/sowmiya-m-s/",
    label: "linkedin.com/in/sowmiya-m-s"
  }
]

export function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-32 relative bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Contact</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
            Let&apos;s Work Together
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
            <p className="text-muted-foreground">
              Feel free to reach out through any of the following platforms. 
              I typically respond within 24 hours.
            </p>
          </div>

          <div className="space-y-4">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all group"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <link.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">{link.name}</p>
                  <p className="text-sm text-muted-foreground">{link.label}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
