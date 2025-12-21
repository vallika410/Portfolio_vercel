"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const certifications = [
  {
    title: "Scrum Master Certification",
    issuer: "Scrum Alliance, Inc.",
    date: "Valid through 2026",
    link: "https://bcert.me/bc/html/show-badge.html?b=krjrphlv",
    image: "/Scrum.png",
  },
  {
    title: "Project Management Professional (PMP)",
    issuer: "PMI",
    date: "Valid through 2028",
    link: "https://www.credly.com/badges/e3902422-1b14-44a3-a455-35395d46c6e9/linked_in_profile",
    image: "/PMP.png",
  },
  {
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    date: "Valid through 2028",
    link: "https://www.credly.com/badges/aca6ea2c-aaa9-48a8-b2ba-5bb24f93e9e8/linked_in_profile",
    image: "/Associate.png",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Valid through 2028",
    link: "https://www.credly.com/badges/2210ec03-c04b-4b10-a267-3c1a2f36fca7/linked_in_profile",
    image: "/CloudPrac.png",
  },
]

export default function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="certifications" ref={ref} className="py-32 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
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
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6"
            >
              Certifications
            </motion.div>
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-4 whitespace-nowrap">
              Professional Certifications
            </h2>
            <p className="text-lg text-muted-foreground">Industry-recognized certifications and achievements</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group relative block cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative border-2 border-border/50 rounded-3xl p-8 bg-card hover:border-primary/50 transition-all shadow-lg">
                  <div className="flex items-center gap-6">
                    <div className="flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-muted-foreground font-medium">{cert.issuer}</p>
                      <p className="text-sm text-muted-foreground">{cert.date}</p>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
