"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const education = [
  {
    degree: "Master of Science in Systems Engineering",
    institution: "University of Maryland, Baltimore County",
    location: "USA",
    period: "2024",
    details:
      "Advanced studies in systems engineering, software architecture, and distributed systems. Focused on scalable system design and optimization.",
  },
  {
    degree: "Master of Technology in Mining Engineering",
    institution: "National Institute of Technology, Rourkela",
    location: "India",
    period: "2019",
    details:
      "Specialized in engineering systems, optimization, and data analysis. Applied computational methods to complex engineering problems.",
  },
  {
    degree: "Bachelor of Technology in Civil Engineering",
    institution: "Mahatma Gandhi Institute of Technology, JNTUH",
    location: "India",
    period: "2017",
    details:
      "Foundation in engineering principles, mathematics, and analytical problem-solving. Strong technical and computational background.",
  },
]

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" ref={ref} className="py-32 px-6 lg:px-8 bg-muted/20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6"
            >
              Education
            </motion.div>
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">Academic background</h2>
            <p className="text-lg text-muted-foreground">My educational journey and academic achievements</p>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -4 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative border-2 border-border/50 rounded-3xl p-8 bg-card group-hover:border-primary/50 transition-all shadow-lg">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-xl text-primary font-medium">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground font-medium">{edu.period}</p>
                    <p className="text-muted-foreground leading-relaxed pt-2">{edu.details}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
