"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="py-32 px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6"
            >
              About Me
            </motion.div>
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 w-full">
              Crafting digital experiences that matter
            </h2>
          </div>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed w-full">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xl w-full text-justify"
            >
              I'm a Software Development Engineer with over 3 years of experience building scalable, high-performance
              SaaS and FinTech web applications. I specialize in creating responsive, modular, and cross-browser
              applications using modern technologies.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="w-full text-justify"
            >
              My expertise spans frontend development with React, Next.js, Redux, and TypeScript, as well as backend and
              microservices architecture using FastAPI, Flask, Spring Boot, Node.js, and Go. I'm experienced in cloud
              deployments, containerization, and CI/CD pipelines with AWS, Docker, and Kubernetes.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="w-full text-justify"
            >
              I thrive in Agile Scrum teams, mentoring junior developers, conducting code reviews, and translating
              complex business requirements into scalable software solutions. My focus is always on performance,
              maintainability, and delivering exceptional user experiences.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8"
          >
            {[
              { label: "Years Experience", value: "3+" },
              { label: "Organizations", value: "4" },
              { label: "Certifications", value: "4" },
              { label: "Technologies", value: "30+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="bg-card border-2 border-border/50 rounded-2xl p-6 text-center hover:border-primary/50 transition-all shadow-lg group"
              >
                <div className="text-4xl font-bold text-primary group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
