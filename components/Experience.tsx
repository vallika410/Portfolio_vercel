"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const experiences = [
  {
    role: "Software Developer",
    company: "ELAS Inc",
    location: "USA",
    period: "Oct 2025 – Present",
    description:
      "Owned the architecture and delivery of a multi-tenant enterprise SaaS platform with 6+ Next.js applications backed by FastAPI and Go microservices.",
    achievements: [
      "Designed shared frontend component library with React, TypeScript, and Tailwind CSS, cutting development time by ~40%",
      "Architected Stripe-based billing at scale covering subscription lifecycle, trial handling, and prorated upgrades/downgrades",
      "Established secure multi-tenant architecture with JWT authentication, RBAC, and database-level tenant isolation",
      "Led containerization strategy using Docker, Kubernetes, and CI/CD pipelines improving release reliability",
    ],
  },
  {
    role: "Software Developer",
    company: "Kingston Technologies (Client: Capital One)",
    location: "USA",
    period: "May 2025 – Oct 2025",
    description:
      "Modernized mission-critical financial systems by decomposing monolithic applications into Django REST–based microservices.",
    achievements: [
      "Drove ~30% improvement in PostgreSQL query performance through advanced tuning with Python and SQLAlchemy",
      "Engineered high-throughput services using Python Asyncio for trading and financial data pipelines",
      "Contributed to distributed, fault-tolerant order management system for equities trading using Spring Boot",
      "Introduced Redis caching to improve system stability and reduce database load during peak market conditions",
    ],
  },
  {
    role: "Software Developer",
    company: "Community Dreams Foundation",
    location: "USA",
    period: "Oct 2024 – May 2025",
    description:
      "Developed customer account and payment workflows for a digital banking platform supporting subscription-based services.",
    achievements: [
      "Built high-performance UIs with React.js, reducing page load times by ~25% and improving customer engagement",
      "Designed backend services using Node.js for authentication, transaction processing, and third-party integrations",
      "Implemented OAuth 2.0 authentication flows, reducing security risks by ~30% while maintaining compliance",
      "Established end-to-end observability using ELK stack, achieving ~98% platform reliability",
    ],
  },
  {
    role: "Software Developer",
    company: "Infosys",
    location: "India",
    period: "Nov 2019 – Dec 2021",
    description:
      "Delivered a core banking reporting application (TTR) for Westpac Group using React, Redux, and modern JavaScript.",
    achievements: [
      "Designed reusable, scalable React components using Hooks improving maintainability across the application",
      "Integrated RESTful APIs using Axios to support real-time transactional data flows",
      "Improved frontend performance by over 30% through code splitting, lazy loading, and memoization",
      "Built comprehensive unit test coverage using Jest and React Testing Library, reducing production defects by ~25%",
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" ref={ref} className="py-32 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
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
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6"
            >
              Career Journey
            </motion.div>
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-4 whitespace-nowrap">
              Professional experience
            </h2>
            <p className="text-lg text-muted-foreground whitespace-nowrap">
              My journey through impactful roles and meaningful contributions
            </p>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative pl-12 border-l-2 border-border group hover:border-primary/50 transition-colors"
              >
                <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg group-hover:scale-125 transition-transform" />

                <div className="space-y-6 pb-12">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div>
                      <h3 className="text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-xl text-primary font-medium">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mt-2 font-medium">{exp.period}</p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    <li className="flex gap-4 text-muted-foreground group/item hover:text-foreground transition-colors">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span className="leading-relaxed text-lg">{exp.description}</span>
                    </li>
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex gap-4 text-muted-foreground group/item hover:text-foreground transition-colors"
                      >
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
