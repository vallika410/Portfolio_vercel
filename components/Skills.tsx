"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "JavaScript (ES6+)", "TypeScript", "Python", "Go (Golang)"],
  },
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "Redux",
      "React Hooks",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Material UI",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "FastAPI", "Flask", "Spring Boot", "Django REST", "Microservices"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Redis"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS (S3, EC2, Lambda)", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Jenkins"],
  },
  {
    title: "Tools & Testing",
    skills: ["Git", "GitHub", "Jira", "Jest", "React Testing Library", "Mocha", "Splunk", "Prometheus", "Grafana"],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" ref={ref} className="py-32 px-6 lg:px-8 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6"
            >
              Skills & Technologies
            </motion.div>
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">Technical expertise</h2>
            <p className="text-lg text-muted-foreground">The tools and technologies I work with every day</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
                <div className="relative bg-card/80 backdrop-blur-sm border-2 border-border/50 rounded-3xl p-8 group-hover:border-primary/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-primary/10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <div className="w-3 h-3 bg-primary-foreground rounded-full" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: index * 0.1 + skillIndex * 0.03, duration: 0.3 }}
                        whileHover={{ scale: 1.08, y: -2 }}
                        className="px-4 py-2.5 text-sm bg-gradient-to-br from-muted/60 to-muted/40 border border-border/50 rounded-lg text-foreground hover:bg-gradient-to-br hover:from-primary/20 hover:to-accent/20 hover:border-primary/50 hover:text-primary transition-all duration-200 cursor-default font-medium shadow-sm hover:shadow-md"
                      >
                        {skill}
                      </motion.span>
                    ))}
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
