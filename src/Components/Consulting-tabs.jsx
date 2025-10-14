"use client"
import { useState } from "react"

// Inline SVG Icons (navy strokes with coral accents)
function IconPlane() {
  return (
    <svg viewBox="0 0 140 100" className="h-full w-full" fill="none">
      <path d="M10 52 L120 52" stroke="#0B2A70" strokeWidth="6" strokeLinecap="round" />
      <path d="M25 68 l30-16 20 0 28-18" stroke="#0B2A70" strokeWidth="6" strokeLinecap="round" />
      <path d="M35 78 l20-10" stroke="#0B2A70" strokeWidth="6" strokeLinecap="round" />
      {/* plane body */}
      <path d="M25 60 l40 8 30-22" stroke="#0B2A70" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      {/* coral clouds */}
      <path d="M92 26c6-8 18-8 24 0" stroke="#FF6B61" strokeWidth="6" strokeLinecap="round" />
      <path d="M96 32c4-5 12-5 16 0" stroke="#FF6B61" strokeWidth="6" strokeLinecap="round" />
    </svg>
  )
}

function IconChartUp() {
  return (
    <svg viewBox="0 0 120 100" className="h-full w-full" fill="none">
      <rect x="12" y="56" width="12" height="30" stroke="#0B2A70" strokeWidth="6" />
      <rect x="36" y="46" width="12" height="40" stroke="#0B2A70" strokeWidth="6" />
      <rect x="60" y="36" width="12" height="50" stroke="#0B2A70" strokeWidth="6" />
      <path d="M14 36 L44 22 L66 28 L104 8" stroke="#FF6B61" strokeWidth="6" fill="none" />
      <path d="M104 8 l-6 10" stroke="#FF6B61" strokeWidth="6" strokeLinecap="round" />
    </svg>
  )
}

function IconBottles() {
  return (
    <svg viewBox="0 0 120 100" className="h-full w-full" fill="none">
      <rect x="26" y="30" width="24" height="56" rx="4" stroke="#FF6B61" strokeWidth="6" />
      <rect x="58" y="24" width="26" height="62" rx="6" stroke="#0B2A70" strokeWidth="6" />
      <rect x="70" y="16" width="6" height="8" fill="#0B2A70" />
      <rect x="38" y="22" width="4" height="8" fill="#FF6B61" />
    </svg>
  )
}

function IconTruckCheck() {
  return (
    <svg viewBox="0 0 140 100" className="h-full w-full" fill="none">
      <rect x="12" y="40" width="62" height="32" rx="6" stroke="#0B2A70" strokeWidth="6" />
      <rect x="74" y="50" width="36" height="22" rx="6" stroke="#0B2A70" strokeWidth="6" />
      <circle cx="38" cy="80" r="8" stroke="#0B2A70" strokeWidth="6" />
      <circle cx="92" cy="80" r="8" stroke="#0B2A70" strokeWidth="6" />
      <path d="M20 34 l12 10 18-18" stroke="#FF6B61" strokeWidth="6" strokeLinecap="round" />
    </svg>
  )
}

function IconGlobeHands() {
  return (
    <svg viewBox="0 0 130 100" className="h-full w-full" fill="none">
      <circle cx="64" cy="42" r="24" stroke="#0B2A70" strokeWidth="6" />
      <path d="M40 42 h48" stroke="#0B2A70" strokeWidth="6" />
      <path d="M64 18 v48" stroke="#0B2A70" strokeWidth="6" />
      {/* hands */}
      <path d="M16 72 c10 10 30 10 40 0" stroke="#FF6B61" strokeWidth="6" strokeLinecap="round" />
      <path d="M72 72 c10 10 30 10 40 0" stroke="#FF6B61" strokeWidth="6" strokeLinecap="round" />
    </svg>
  )
}

function IconCoinsBars() {
  return (
    <svg viewBox="0 0 140 100" className="h-full w-full" fill="none">
      <rect x="18" y="64" width="14" height="22" stroke="#0B2A70" strokeWidth="6" />
      <rect x="40" y="56" width="14" height="30" stroke="#0B2A70" strokeWidth="6" />
      <rect x="62" y="68" width="14" height="18" stroke="#0B2A70" strokeWidth="6" />
      {/* coins */}
      <circle cx="102" cy="54" r="12" stroke="#FF6B61" strokeWidth="6" />
      <circle cx="84" cy="68" r="12" stroke="#FF6B61" strokeWidth="6" />
      <text x="98" y="58" fontSize="12" fontWeight="700" fill="#0B2A70">
        $
      </text>
      <text x="80" y="72" fontSize="12" fontWeight="700" fill="#0B2A70">
        $
      </text>
    </svg>
  )
}

function FeatureItem({ title, desc, children }) {
  return (
    <article className="flex items-start gap-6">
      <div className="relative shrink-0">
        {/* hatch circle */}
        <span
          aria-hidden="true"
          className="absolute -left-6 -top-6 h-24 w-24 rounded-full"
          style={{
            background: "repeating-linear-gradient(135deg, rgba(2,32,88,0.08) 0 6px, transparent 6px 12px)",
          }}
        />
        {/* icon container to control size */}
        <div className="relative h-24 w-28">{children}</div>
      </div>

      <div className="min-w-0">
        <h3 className="text-[20px] font-semibold tracking-wider text-[#0B2A70]">{title}</h3>
        <p className="mt-3 text-base leading-7 text-slate-600">{desc}</p>
      </div>
    </article>
  )
}

// Financial features grid
function FinancialGrid() {
  const items = [
    {
      title: "TRAVEL AND AVIATION",
      desc: "Normcore cornhole synth, keffiyeh asymmetrical vaporware hell of. Sartorial leggings butcher pork",
      Icon: IconPlane,
    },
    {
      title: "STRATEGIC PLANNING",
      desc: "Normcore cornhole synth, keffiyeh asymmetrical vaporware hell of. squid vinyl leggings butcher pork",
      Icon: IconChartUp,
    },
    {
      title: "CUNSUMER PRODUCTS",
      desc: "Woke raw denim seitan post-ironic, twee flannel bicycle rights gastropub direct trade sriracha",
      Icon: IconBottles,
    },
    {
      title: "SURFACE TRANSPORT",
      desc: "Cronut semiotics portland, truffaut tumeric forage polaroid tacos before they sold out gluten-free",
      Icon: IconTruckCheck,
    },
    {
      title: "ENVIRONMENT",
      desc: "Woke raw denim seitan post-ironic, twee flannel bicycle rights gastropub direct trade sriracha",
      Icon: IconGlobeHands,
    },
    {
      title: "FINANCIAL SERVICES",
      desc: "Truffaut tumeric forage polaroid tacos before they sold out gluten-free loko synth pabst gentrify.",
      Icon: IconCoinsBars,
    },
  ]

  return (
    <section aria-labelledby="financial-heading" className="mx-auto max-w-6xl px-4">
      <h2 id="financial-heading" className="sr-only">
        Financial services features
      </h2>
      <div className="grid gap-y-14 gap-x-10 md:grid-cols-2 lg:grid-cols-3">
        {items.map(({ title, desc, Icon }, i) => (
          <FeatureItem key={i} title={title} desc={desc}>
            <Icon />
          </FeatureItem>
        ))}
      </div>
    </section>
  )
}

// Consulting features grid
function ConsultingGrid() {
  // Same copy and icons as your references, ordered to match the screenshot
  const items = [
    {
      title: "CUNSUMER PRODUCTS",
      desc: "Woke raw denim seitan post-ironic, twee flannel bicycle rights gastropub direct trade sriracha",
      Icon: IconBottles,
    },
    {
      title: "SURFACE TRANSPORT",
      desc: "Cronut semiotics portland, truffaut tumeric forage polaroid tacos before they sold out gluten-free",
      Icon: IconTruckCheck,
    },
    {
      title: "ENVIRONMENT",
      desc: "Woke raw denim seitan post-ironic, twee flannel bicycle rights gastropub direct trade sriracha",
      Icon: IconGlobeHands,
    },
    {
      title: "TRAVEL AND AVIATION",
      desc: "Normcore cornhole synth, keffiyeh asymmetrical vaporware hell of. Sartorial leggings butcher pork",
      Icon: IconPlane,
    },
    {
      title: "FINANCIAL SERVICES",
      desc: "Truffaut tumeric forage polaroid tacos before they sold out gluten-free loko synth pabst gentrify.",
      Icon: IconCoinsBars,
    },
    {
      title: "STRATEGIC PLANNING",
      desc: "Normcore cornhole synth, keffiyeh asymmetrical vaporware hell of. squid vinyl leggings butcher pork",
      Icon: IconChartUp,
    },
  ]

  return (
    <section aria-labelledby="consulting-heading" className="relative mx-auto max-w-6xl px-4">
      <h2 id="consulting-heading" className="sr-only">
        Consulting features
      </h2>
      <div className="grid gap-y-14 gap-x-10 md:grid-cols-2 lg:grid-cols-3">
        {items.map(({ title, desc, Icon }, i) => (
          <FeatureItem key={i} title={title} desc={desc}>
            <Icon />
          </FeatureItem>
        ))}
      </div>

      {/* right-side coral diagonal stripes accent, shown on large screens only */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 lg:block"
        style={{
          width: "170px",
          height: "340px",
          background: "repeating-linear-gradient(150deg, #FF6B61 0 4px, transparent 4px 14px)",
        }}
      />
    </section>
  )
}

// Other Solution features grid
function OtherGrid() {
  // Order matches the provided Other Solution screenshot
  const items = [
    {
      title: "ENVIRONMENT",
      desc: "Woke raw denim seitan post-ironic, twee flannel bicycle rights gastropub direct trade sriracha",
      Icon: IconGlobeHands,
    },
    {
      title: "CUNSUMER PRODUCTS",
      desc: "Woke raw denim seitan post-ironic, twee flannel bicycle rights gastropub direct trade sriracha",
      Icon: IconBottles,
    },
    {
      title: "TRAVEL AND AVIATION",
      desc: "Normcore cornhole synth, keffiyeh asymmetrical vaporware hell of. Sartorial leggings butcher pork",
      Icon: IconPlane,
    },
    {
      title: "FINANCIAL SERVICES",
      desc: "Truffaut tumeric forage polaroid tacos before they sold out gluten-free loko synth pabst gentrify.",
      Icon: IconCoinsBars,
    },
    {
      title: "SURFACE TRANSPORT",
      desc: "Cronut semiotics portland, truffaut tumeric forage polaroid tacos before they sold out gluten-free",
      Icon: IconTruckCheck,
    },
    {
      title: "STRATEGIC PLANNING",
      desc: "Normcore cornhole synth, keffiyeh asymmetrical vaporware hell of. squid vinyl leggings butcher pork",
      Icon: IconChartUp,
    },
  ]

  return (
    <section aria-labelledby="other-heading" className="relative mx-auto max-w-6xl px-4">
      <h2 id="other-heading" className="sr-only">
        Other Solution features
      </h2>
      <div className="grid gap-y-14 gap-x-10 md:grid-cols-2 lg:grid-cols-3">
        {items.map(({ title, desc, Icon }, i) => (
          <FeatureItem key={i} title={title} desc={desc}>
            <Icon />
          </FeatureItem>
        ))}
      </div>
      {/* right-side coral diagonal stripes accent */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 lg:block"
        style={{
          width: "170px",
          height: "340px",
          background: "repeating-linear-gradient(150deg, #FF6B61 0 4px, transparent 4px 14px)",
        }}
      />
    </section>
  )
}

export default function ConsultingTabs({ children, otherContent = null }) {
  const [active, setActive] = useState("financial")

  const baseBtn =
    "px-4 py-2 text-sm font-semibold rounded-full transition-colors border border-slate-200 text-slate-700 hover:bg-slate-100"
  const activeBtn = "relative px-4 py-2 text-sm font-semibold rounded-full text-white bg-blue-800 shadow"

  return (
    <div className="mt-6">
      <div className="flex items-center justify-center gap-6">
        <button
          type="button"
          className={active === "financial" ? activeBtn : baseBtn}
          onClick={() => setActive("financial")}
          aria-pressed={active === "financial"}
        >
          Financial
        </button>
        <button
          type="button"
          className={active === "consulting" ? activeBtn : baseBtn}
          onClick={() => setActive("consulting")}
          aria-pressed={active === "consulting"}
        >
          Consulting
        </button>
        <button
          type="button"
          className={active === "other" ? activeBtn : baseBtn}
          onClick={() => setActive("other")}
          aria-pressed={active === "other"}
        >
          Other Solution
        </button>
      </div>

      <div className="mt-8">
        {active === "consulting" ? <ConsultingGrid /> : active === "financial" ? <FinancialGrid /> : <OtherGrid />}
      </div>
    </div>
  )
}
