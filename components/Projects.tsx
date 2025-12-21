"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const projects = [
  {
    title: "E-Commerce Platform Clone",
    description:
      "Full-featured e-commerce platform with secure checkout, JWT authentication, admin dashboard, and S3 image uploads. Built with modern stack for scalability and performance.",
    tech: ["React", "Node.js", "MongoDB", "AWS S3", "Docker", "JWT"],
    link: "#",
    color: "from-primary/20 to-primary/5",
    icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    title: "Stock Trading Dashboard",
    description:
      "Real-time stock trading platform with live trade execution, visual dashboards, WebSocket integration, and PostgreSQL backend. Deployed with Docker Compose and monitored with Prometheus.",
    tech: ["Flask", "PostgreSQL", "Redis", "WebSockets", "Docker", "Prometheus"],
    link: "#",
    color: "from-accent/20 to-accent/5",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Portfolio Website",
    description:
      "High-performance personal portfolio built with Next.js featuring server-side rendering, dynamic routing, and SEO optimization. Deployed on Vercel with optimal performance metrics.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "SSR"],
    link: "#",
    color: "from-chart-3/20 to-chart-3/5",
    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" ref={ref} className="py-32 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
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
              Featured Work
            </motion.div>
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-4 whitespace-nowrap">
              Projects that make a difference
            </h2>
            <p className="text-lg text-muted-foreground">
              A selection of my recent work showcasing design and development excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-3xl blur-xl opacity-50 transition-all`}
                  whileHover={{ opacity: 100, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="relative bg-card border-2 border-border/50 rounded-3xl p-8 hover:border-primary/50 transition-all shadow-xl backdrop-blur-sm">
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className={`w-14 h-14 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-primary/20 transition-shadow`}
                      >
                        <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={project.icon} />
                        </svg>
                      </motion.div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-3 py-1.5 text-xs bg-muted/50 text-foreground rounded-lg border border-border/50 font-medium hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
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
