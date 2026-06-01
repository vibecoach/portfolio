"use client"

import { useRef, useState, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const projects = [
  {
    id: 1,
    logo: "A",
    logoColor: "#2253b0",
    title: "Alphacore Platform",
    body:
      "A next-generation infrastructure layer enabling enterprises to deploy and scale distributed workloads with unparalleled reliability and speed across global edge networks.",
  },
  {
    id: 2,
    logo: "B",
    logoColor: "#5aa0f0",
    title: "Blueshift Analytics",
    body:
      "Real-time data intelligence that transforms raw telemetry into actionable insights, empowering product teams to make confident, evidence-based decisions at every stage.",
  },
  {
    id: 3,
    logo: "C",
    logoColor: "#2253b0",
    title: "Cascade Networks",
    body:
      "Hyper-resilient mesh connectivity built for the modern enterprise, delivering sub-millisecond latency and five-nines uptime across hybrid and multi-cloud environments.",
  },
  {
    id: 4,
    logo: "D",
    logoColor: "#5aa0f0",
    title: "Driftline Studio",
    body:
      "Creative tooling for design-led teams, bridging the gap between rapid prototyping and production-ready component libraries with seamless developer handoff.",
  },
  {
    id: 5,
    logo: "E",
    logoColor: "#2253b0",
    title: "Echelon AI",
    body:
      "Intelligent automation at the frontier of language and reasoning, helping organisations unlock productivity through context-aware workflows and adaptive agent systems.",
  },
  {
    id: 6,
    logo: "F",
    logoColor: "#5aa0f0",
    title: "Foundry Labs",
    body:
      "An open research collective accelerating the commercialisation of deep-tech breakthroughs, from advanced materials to quantum-ready cryptographic protocols.",
  },
]

export default function ProjectCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateButtons = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 8)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8)
  }, [])

  const scroll = (dir: "left" | "right") => {
    const el = trackRef.current
    if (!el) return
    const cardWidth = el.querySelector("article")?.clientWidth ?? 320
    el.scrollBy({ left: dir === "left" ? -(cardWidth + 24) : cardWidth + 24, behavior: "smooth" })
    setTimeout(updateButtons, 350)
  }

  return (
    <div className="relative w-full">
      {/* Nav buttons */}
      <div className="flex justify-end gap-2 mb-5">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          aria-label="Scroll left"
          className={cn(
            "flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-200",
            canScrollLeft
              ? "border-white/30 text-white hover:border-white hover:bg-white/10"
              : "border-white/10 text-white/20 cursor-not-allowed"
          )}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          aria-label="Scroll right"
          className={cn(
            "flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-200",
            canScrollRight
              ? "border-white/30 text-white hover:border-white hover:bg-white/10"
              : "border-white/10 text-white/20 cursor-not-allowed"
          )}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Scrollable track */}
      <div
        ref={trackRef}
        onScroll={updateButtons}
        className="flex gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project) => (
          <article
            key={project.id}
            className="flex-none w-72 md:w-80 bg-white rounded-2xl p-6 flex flex-col gap-5 shadow-xl"
          >
            {/* Logo placeholder */}
            <div
              className="flex items-center justify-center w-14 h-14 rounded-xl text-white text-2xl font-black tracking-tight shrink-0"
              style={{ backgroundColor: project.logoColor }}
              aria-hidden="true"
            >
              {project.logo}
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2">
              <h3
                className="text-lg font-bold leading-snug"
                style={{ color: project.logoColor }}
              >
                {project.title}
              </h3>
              <p className="text-[#2253b0]/70 text-sm leading-relaxed">
                {project.body}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Fade edges */}
      <div className="pointer-events-none absolute right-0 top-12 h-full w-16 bg-gradient-to-l from-[#08163b] to-transparent" />
    </div>
  )
}
