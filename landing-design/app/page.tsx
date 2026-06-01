import Image from "next/image"
import ProjectCarousel from "@/components/project-carousel"

export default function Page() {
  return (
    <main
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at 15% 40%, #6cb4f8 0%, #2253b0 30%, transparent 65%),
          radial-gradient(ellipse at 60% 0%, #5aa0f0 0%, transparent 50%),
          #08163b
        `,
      }}
    >
      {/* ── Blended portrait — height capped at 70vh ── */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 select-none"
        aria-hidden="true"
        style={{ height: "70vh", mixBlendMode: "screen", opacity: 0.22 }}
      >
        <Image
          src="/images/hero-portrait.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
      </div>

      {/* Content container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-20 pt-24 pb-20">

        {/* ── Hero Headline ── */}
        <h1
          className="text-white font-black leading-[1.02] tracking-tight text-balance"
          style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontSize: "clamp(2.4rem, 6.4vw, 5.6rem)",
            maxWidth: "18ch",
          }}
        >
          Lorem ipsum dolor sit<br />
          amet consectetur<br />
          adipiscing elit.
        </h1>

        {/* ── Body Copy ── */}
        <p
          className="mt-10 text-white/75 leading-relaxed"
          style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontSize: "clamp(0.8rem, 1.2vw, 0.9rem)",
            maxWidth: "62ch",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>

        {/* ── CTA Button ── */}
        <div className="mt-12">
          <button
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-[#08163b] font-bold tracking-wide transition-all duration-200 hover:bg-[#6cb4f8] hover:text-[#08163b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontSize: "0.8rem",
            }}
          >
            Get Started Today
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* ── Divider ── */}
        <div className="mt-10 mb-6 h-px w-full bg-white/10" />

        {/* ── Section label ── */}
        <p
          className="mb-6 font-bold text-white"
          style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontSize: "clamp(1.6rem, 2.4vw, 1.8rem)",
          }}
        >
          Featured projects
        </p>

        {/* ── Carousel ── */}
        <ProjectCarousel />
      </div>
    </main>
  )
}
