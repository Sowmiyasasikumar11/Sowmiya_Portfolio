"use client"

import { motion } from "framer-motion"
import { Download, Github, Linkedin, ChevronDown, Sparkles } from "lucide-react"
import Image from "next/image"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.045)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/6 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-2xl" />
      <div className="absolute bottom-1/4 right-1/6 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-2xl" />

      <div className="container mx-auto px-6 sm:px-10 lg:px-16 relative z-10 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 xl:gap-28">

          {/* ── Left: Text Content ── */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 text-sm font-semibold rounded-full bg-primary/10 text-primary border border-primary/25 backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5" />
                Open for Opportunities
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-[1.05] tracking-tight"
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text whitespace-nowrap">Sowmiya M S</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="text-lg sm:text-xl font-semibold text-primary/85 mb-5 tracking-wide"
            >
              Full Stack &amp; AI Developer
            </motion.p>

            <motion.p
              {...fadeUp(0.3)}
              className="text-base sm:text-lg text-muted-foreground mb-10 max-w-[620px] mx-auto lg:mx-0 leading-relaxed"
            >
              A 3rd-year Computer Science Engineering student passionate about Full Stack
              Development and Artificial Intelligence. I enjoy building scalable web applications,
              AI-powered solutions, and interactive digital experiences that solve real-world
              problems using modern technologies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              {...fadeUp(0.4)}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 flex-wrap"
            >
              {/* Download Resume */}
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.04, boxShadow: "0 0 36px rgba(59,130,246,0.6)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.22 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-primary-foreground text-base font-semibold shadow-xl shadow-primary/30 hover:bg-primary/85 transition-colors duration-300 cursor-pointer"
              >
                <Download className="h-5 w-5 shrink-0" />
                Download Resume
              </motion.a>

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                <motion.a
                  href="https://github.com/Sowmiyasasikumar11"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center h-13 w-13 p-3.5 rounded-xl border border-border bg-card hover:bg-primary/10 hover:text-primary hover:border-primary/60 text-muted-foreground transition-all duration-300"
                >
                  <Github className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/sowmiya-m-s/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center h-13 w-13 p-3.5 rounded-xl border border-border bg-card hover:bg-primary/10 hover:text-primary hover:border-primary/60 text-muted-foreground transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* ── Right: Profile Image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex-shrink-0 flex items-center justify-center"
          >
            <motion.div
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Outer glow */}
              <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 opacity-35 blur-2xl animate-pulse" />

              {/* Gradient ring */}
              <div className="relative p-[3px] rounded-full bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-600">
                <div className="absolute inset-1 rounded-full bg-gradient-to-b from-blue-500/20 to-transparent pointer-events-none" />
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.35 }}
                  className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-[320px] md:h-[320px] lg:w-[360px] lg:h-[360px] xl:w-[400px] xl:h-[400px] rounded-full overflow-hidden bg-background"
                >
                  <Image
                    src="/profile.png"
                    alt="Sowmiya M S — Full Stack & AI Developer"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </motion.div>
              </div>

              {/* Orbiting dots */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-9 pointer-events-none"
              >
                <div className="absolute top-0 left-1/2 w-2.5 h-2.5 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,1)]" />
                <div className="absolute bottom-0 right-1/4 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,1)]" />
                <div className="absolute top-1/4 right-0 w-2 h-2 bg-blue-300 rounded-full shadow-[0_0_10px_rgba(147,197,253,1)]" />
              </motion.div>
            </motion.div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll to about section"
          >
            <span className="text-xs tracking-widest uppercase font-medium opacity-50">Scroll</span>
            <ChevronDown className="h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
