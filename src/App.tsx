import { useEffect, useMemo, useState } from 'react'
import heroBg from './assets/hero.png'

type NavigateFn = (to: '/' | '/login') => void

type IconName = 'box' | 'chart' | 'receipt' | 'bolt' | 'shield' | 'link' | 'key' | 'cloud' | 'file' | 'chat'

const moduleCards: Array<{ title: string; description: string; icon: IconName }> = [
  {
    title: 'Inventory Management',
    description:
      'SKU-level tracking, real-time stock checks, and automated low-stock alerts for every branch.',
    icon: 'box',
  },
  {
    title: 'Financial Intelligence',
    description: 'Multi-branch sales reporting and product-level profitability with clear trend views.',
    icon: 'chart',
  },
  {
    title: 'Expenditure Tracking',
    description: 'Smart cost categorization, vendor insights, and export-ready accounting reports.',
    icon: 'receipt',
  },
]

const featureCards: Array<{ title: string; description: string; icon: IconName }> = [
  {
    title: 'Multi-branch support',
    description: 'Manage every location from one dashboard while keeping local controls flexible.',
    icon: 'link',
  },
  {
    title: 'Real-time stock updates',
    description: 'Inventory changes sync instantly across stores, POS terminals, and warehouse teams.',
    icon: 'bolt',
  },
  {
    title: 'POS integration',
    description: 'Connect with modern POS systems to reduce manual updates and prevent stock drift.',
    icon: 'shield',
  },
  {
    title: 'Role-based access',
    description: 'Set granular permissions for admins, accountants, and branch managers.',
    icon: 'key',
  },
  {
    title: 'Cloud system',
    description: 'Secure and always available from mobile, desktop, and in-store devices.',
    icon: 'cloud',
  },
  {
    title: 'Reports and exports',
    description: 'Download operational and financial summaries in PDF, CSV, and spreadsheet formats.',
    icon: 'file',
  },
]

const footerColumns = [
  {
    heading: 'PRODUCT',
    links: ['Inventory Control', 'Financial Analysis', 'Global Pricing'],
  },
  {
    heading: 'SOLUTIONS',
    links: ['Real-time Sync', 'POS Terminal', 'Enterprise Security'],
  },
  {
    heading: 'SUPPORT',
    links: ['Help Center', 'API Documentation', 'Priority Support'],
  },
]

function Icon({ name }: { name: IconName }) {
  switch (name) {
    case 'box':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
          <path d="M12 2 3 6.5V17.5L12 22l9-4.5V6.5L12 2Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M3 6.5 12 11l9-4.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M12 11v11" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      )
    case 'chart':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
          <path d="M4 19V5" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M4 19h16" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M7 16v-5" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M12 16V7" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M17 16v-3" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      )
    case 'receipt':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
          <path d="M7 2h10v20l-2-1-3 1-3-1-2 1V2Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M9 7h6" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M9 11h6" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      )
    case 'bolt':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
          <path d="M13 2 4 14h7l-1 8 10-14h-7l0-6Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      )
    case 'shield':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
          <path d="M12 2 4 5.5V12c0 5 3.5 9 8 10 4.5-1 8-5 8-10V5.5L12 2Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M9.5 12.2 11.2 14l3.3-3.6" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      )
    case 'link':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
          <path d="M10 13a4 4 0 0 1 0-6l1.2-1.2a4 4 0 0 1 5.6 5.6L16 12" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M14 11a4 4 0 0 1 0 6L12.8 18.2a4 4 0 1 1-5.6-5.6L8 12" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      )
    case 'key':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
          <path d="M7 14a5 5 0 1 1 4.7-3.2L21 11v3h-3v3h-3v-3h-4.3A5 5 0 0 1 7 14Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      )
    case 'cloud':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
          <path d="M7 18h10a4 4 0 0 0 .3-8A6 6 0 0 0 6.2 12 3.5 3.5 0 0 0 7 18Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      )
    case 'file':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
          <path d="M7 2h7l3 3v17H7V2Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M14 2v5h5" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M9 12h6" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      )
    case 'chat':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
          <path d="M4 5h16v10H7l-3 3V5Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M8 9h8" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      )
  }
}

function LandingPage({ navigate }: { navigate: NavigateFn }) {
  const heroStats = [
    { label: 'Branches Connected', value: '128' },
    { label: 'Daily SKU Events', value: '1.9M' },
    { label: 'Forecast Accuracy', value: '97.4%' },
  ]

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[var(--bg-canvas)] text-[var(--ink)]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 -top-24 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(22,163,74,0.32),rgba(22,163,74,0.02)_62%)] blur-2xl"></div>
        <div className="absolute right-[-8rem] top-[10rem] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle_at_55%_45%,rgba(245,158,11,0.26),rgba(245,158,11,0.03)_62%)] blur-2xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(248,250,252,0.75),rgba(248,250,252,0.95)_48%,rgba(248,250,252,1))]"></div>
      </div>

      <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[color:var(--glass)] backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <div className="flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className="h-7 w-7 rounded-xl bg-[radial-gradient(circle_at_30%_30%,#ffffff_0%,#14b8a6_38%,#0f766e_100%)] shadow-md"
            ></span>
            <span className="font-display text-sm font-semibold tracking-wide text-[var(--ink-strong)]">
              Inventory Automation System
            </span>
          </div>

          <nav className="hidden items-center gap-2 md:flex" aria-label="Primary">
            <a className="rounded-full px-3 py-1.5 text-xs font-semibold tracking-[0.12em] text-[var(--ink-soft)] transition hover:bg-white hover:text-[var(--ink-strong)]" href="#features">
              FEATURES
            </a>
            <a className="rounded-full px-3 py-1.5 text-xs font-semibold tracking-[0.12em] text-[var(--ink-soft)] transition hover:bg-white hover:text-[var(--ink-strong)]" href="#modules">
              MODULES
            </a>
            <a className="rounded-full px-3 py-1.5 text-xs font-semibold tracking-[0.12em] text-[var(--ink-soft)] transition hover:bg-white hover:text-[var(--ink-strong)]" href="#pricing">
              PRICING
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              className="rounded-full px-3 py-2 text-xs font-bold tracking-[0.12em] text-[var(--ink-soft)] transition hover:bg-white hover:text-[var(--ink-strong)]"
              href="/login"
              onClick={(e) => {
                e.preventDefault()
                navigate('/login')
              }}
            >
              LOGIN
            </a>
            <a
              className="rounded-full bg-[var(--action)] px-4 py-2 text-xs font-bold tracking-[0.12em] text-white shadow-lg shadow-emerald-800/15 transition hover:bg-[var(--action-hover)]"
              href="#request-demo"
            >
              Request Demo
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="scroll-mt-24 px-4 pb-16 pt-14 sm:px-6 sm:pt-18" aria-label="Hero">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="hero-rise">
              <p className="inline-flex rounded-full border border-emerald-200/80 bg-emerald-100/75 px-3 py-1 text-[11px] font-extrabold tracking-[0.16em] text-emerald-800">
                RETAIL COMMAND CENTER
              </p>
              <h1 className="font-display mt-5 text-4xl font-black leading-[0.92] tracking-[-0.03em] text-[var(--ink-strong)] sm:text-5xl lg:text-[4.15rem]">
                Control inventory flow.
                <span className="block text-[var(--accent-2)]">Scale every branch with confidence.</span>
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-[var(--ink-soft)] sm:text-base">
                Replace spreadsheets and fragmented tools with one real-time operations cockpit for inventory, finance, and branch execution.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a className="rounded-full bg-[var(--ink-strong)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--ink)]" href="#modules">
                  Explore Modules
                </a>
                <a
                  className="rounded-full border border-[var(--line)] bg-white px-5 py-3 text-sm font-semibold text-[var(--ink-strong)] transition hover:border-emerald-300 hover:bg-emerald-50"
                  href="#request-demo"
                >
                  Book Live Demo
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <article key={stat.label} className="rounded-2xl border border-[var(--line)] bg-white/95 p-4 shadow-[0_18px_38px_-28px_rgba(15,23,42,0.5)]">
                    <p className="font-display text-2xl font-extrabold text-[var(--ink-strong)]">{stat.value}</p>
                    <p className="mt-1 text-[11px] font-bold tracking-[0.12em] text-[var(--ink-soft)]">{stat.label}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="hero-rise-delayed relative overflow-hidden rounded-[1.8rem] border border-[var(--line)] bg-[linear-gradient(140deg,rgba(255,255,255,0.98),rgba(240,253,250,0.92))] p-6 shadow-[0_30px_60px_-35px_rgba(6,95,70,0.6)]">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-emerald-100 bg-white p-4">
                    <p className="text-[10px] font-black tracking-[0.14em] text-emerald-700">STOCK HEALTH</p>
                    <p className="font-display mt-2 text-2xl font-extrabold text-[var(--ink-strong)]">94.2%</p>
                    <p className="mt-1 text-xs text-[var(--ink-soft)]">Healthy SKUs this week</p>
                  </div>
                  <div className="rounded-2xl border border-amber-100 bg-white p-4">
                    <p className="text-[10px] font-black tracking-[0.14em] text-amber-700">AUTO REORDER</p>
                    <p className="font-display mt-2 text-2xl font-extrabold text-[var(--ink-strong)]">312</p>
                    <p className="mt-1 text-xs text-[var(--ink-soft)]">Triggered today</p>
                  </div>
                  <div className="col-span-2 rounded-2xl border border-[var(--line)] bg-white p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <p className="text-[10px] font-black tracking-[0.14em] text-[var(--ink-soft)]">LIVE MOVEMENT</p>
                      <span className="rounded-full bg-emerald-100 px-2 py-1 text-[10px] font-bold text-emerald-700">SYNCED</span>
                    </div>
                    <div className="grid gap-2">
                      <span className="h-2.5 w-10/12 rounded-full bg-emerald-100"></span>
                      <span className="h-2.5 w-8/12 rounded-full bg-emerald-200/75"></span>
                      <span className="h-2.5 w-11/12 rounded-full bg-amber-100"></span>
                      <span className="h-2.5 w-7/12 rounded-full bg-emerald-100"></span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="float-card absolute -left-2 bottom-4 rounded-2xl border border-emerald-200/80 bg-white px-3 py-2 shadow-lg">
                <p className="text-[10px] font-black tracking-[0.13em] text-emerald-700">PREDICTED SAVINGS</p>
                <p className="font-display text-lg font-black text-[var(--ink-strong)]">$208K</p>
              </div>

              <div className="float-card-delay absolute -right-2 top-4 rounded-2xl border border-amber-200/80 bg-white px-3 py-2 shadow-lg">
                <p className="text-[10px] font-black tracking-[0.13em] text-amber-700">OUT-OF-STOCK RISK</p>
                <p className="font-display text-lg font-black text-[var(--ink-strong)]">-38%</p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-10 w-full max-w-6xl rounded-2xl border border-[var(--line)] bg-white/95 px-4 py-4 sm:px-6">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[11px] font-bold tracking-[0.14em] text-[var(--ink-soft)] sm:justify-between">
              <span>POWERING MULTI-BRANCH RETAIL</span>
              <span>REAL-TIME EVENT PIPELINES</span>
              <span>FINANCE + INVENTORY IN ONE VIEW</span>
              <span>24/7 OPERATIONAL VISIBILITY</span>
            </div>
          </div>
        </section>

        <section id="modules" className="scroll-mt-24 px-4 py-16 sm:px-6">
          <div className="mx-auto w-full max-w-6xl">
            <h2 className="font-display text-center text-3xl font-extrabold tracking-tight text-[var(--ink-strong)] sm:text-4xl">
              A Modular Stack For Fast-Moving Retail Teams
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-[var(--ink-soft)] sm:text-base">
              Launch only what you need today, then scale operations, pricing, and forecasting as new branches come online.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {moduleCards.map((card, index) => (
                <article key={card.title} className="group rounded-3xl border border-[var(--line)] bg-white p-6 shadow-[0_20px_34px_-30px_rgba(15,23,42,0.75)] transition hover:-translate-y-1 hover:border-emerald-300/80 hover:shadow-[0_24px_46px_-28px_rgba(15,23,42,0.5)]" style={{ animationDelay: `${index * 90}ms` }}>
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800 transition group-hover:bg-emerald-200">
                    <Icon name={card.icon} />
                  </div>
                  <h3 className="font-display mt-4 text-lg font-bold text-[var(--ink-strong)]">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">{card.description}</p>
                  <p className="mt-4 text-xs font-bold tracking-[0.14em] text-emerald-700">VIEW MODULE</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="scroll-mt-24 border-y border-[var(--line)] bg-white/80 px-4 py-16 sm:px-6">
          <div className="mx-auto w-full max-w-6xl">
            <h2 className="font-display text-center text-3xl font-extrabold tracking-tight text-[var(--ink-strong)] sm:text-4xl">
              Built For Execution, Not Just Reporting
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-[var(--ink-soft)] sm:text-base">
              Move from insight to action faster with roles, sync, and automation designed for real operational pressure.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {featureCards.map((card) => (
                <article key={card.title} className="rounded-2xl border border-[var(--line)] bg-[linear-gradient(160deg,rgba(255,255,255,0.95),rgba(240,253,250,0.82))] p-5 shadow-[0_18px_30px_-30px_rgba(15,23,42,0.8)]">
                  <div className="flex items-start gap-3">
                    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800">
                      <Icon name={card.icon} />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-[var(--ink-strong)]">{card.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-[var(--ink-soft)]">{card.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="scroll-mt-24 px-4 py-16 sm:px-6" aria-label="Pricing">
          <div className="mx-auto w-full max-w-6xl">
            <h2 className="font-display text-center text-3xl font-extrabold tracking-tight text-[var(--ink-strong)] sm:text-4xl">
              Pick The Rollout Pace That Fits Your Team
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-[var(--ink-soft)] sm:text-base">
              Start with a branch pilot or deploy globally. Every plan includes core inventory intelligence and onboarding support.
            </p>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              <article className="rounded-3xl border border-[var(--line)] bg-white p-6">
                <p className="text-xs font-black tracking-[0.14em] text-[var(--ink-soft)]">STARTER</p>
                <h3 className="font-display mt-3 text-2xl font-extrabold text-[var(--ink-strong)]">$149/mo</h3>
                <p className="mt-2 text-sm text-[var(--ink-soft)]">For 1-2 branches</p>
                <a href="#request-demo" className="mt-5 inline-flex rounded-full border border-[var(--line)] px-4 py-2 text-xs font-bold tracking-[0.12em] text-[var(--ink-strong)] transition hover:bg-emerald-50">
                  START PILOT
                </a>
              </article>

              <article className="rounded-3xl border border-emerald-300 bg-[linear-gradient(180deg,rgba(236,253,245,0.9),rgba(255,255,255,1))] p-6 shadow-[0_22px_40px_-28px_rgba(6,95,70,0.75)]">
                <p className="text-xs font-black tracking-[0.14em] text-emerald-700">GROWTH</p>
                <h3 className="font-display mt-3 text-2xl font-extrabold text-[var(--ink-strong)]">$329/mo</h3>
                <p className="mt-2 text-sm text-[var(--ink-soft)]">For scaling retail networks</p>
                <a href="#request-demo" className="mt-5 inline-flex rounded-full bg-[var(--action)] px-4 py-2 text-xs font-bold tracking-[0.12em] text-white transition hover:bg-[var(--action-hover)]">
                  MOST POPULAR
                </a>
              </article>

              <article className="rounded-3xl border border-[var(--line)] bg-white p-6">
                <p className="text-xs font-black tracking-[0.14em] text-[var(--ink-soft)]">ENTERPRISE</p>
                <h3 className="font-display mt-3 text-2xl font-extrabold text-[var(--ink-strong)]">Custom</h3>
                <p className="mt-2 text-sm text-[var(--ink-soft)]">Dedicated integrations and SLA</p>
                <a href="#request-demo" className="mt-5 inline-flex rounded-full border border-[var(--line)] px-4 py-2 text-xs font-bold tracking-[0.12em] text-[var(--ink-strong)] transition hover:bg-emerald-50">
                  CONTACT SALES
                </a>
              </article>
            </div>
          </div>
        </section>

        <section id="request-demo" className="scroll-mt-24 px-4 pb-16 sm:px-6" aria-label="Call to action">
          <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-[1.9rem] border border-emerald-300/70 bg-[linear-gradient(140deg,#065f46,#0f766e,#115e59)] px-6 py-12 text-center text-white shadow-[0_30px_68px_-38px_rgba(6,95,70,0.9)] sm:px-12">
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Ready To Run Every Branch From One Intelligent Layer?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm text-emerald-100 sm:text-base">
              See a live walkthrough tailored to your current stack, branch structure, and inventory process.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-emerald-900 transition hover:bg-emerald-50" href="#start-demo">
                Start Free Demo
              </a>
              <a className="rounded-full border border-white/35 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20" href="#contact-sales">
                Talk To Specialist
              </a>
            </div>
          </div>
        </section>

        <footer className="border-t border-[var(--line)] bg-white/80 px-4 pb-8 pt-12 sm:px-6">
          <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <div className="flex items-center gap-2.5">
                <span
                  aria-hidden="true"
                  className="h-7 w-7 rounded-xl bg-[radial-gradient(circle_at_30%_30%,#ffffff_0%,#14b8a6_38%,#0f766e_100%)] shadow-sm"
                ></span>
                <span className="font-display text-sm font-semibold tracking-wide text-[var(--ink-strong)]">Inventory Automation System</span>
              </div>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--ink-soft)]">
                The operating layer for modern retail teams that need precision, speed, and confidence at scale.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {footerColumns.map((column) => (
                <div key={column.heading}>
                  <h3 className="text-xs font-extrabold tracking-[0.14em] text-[var(--ink-soft)]">{column.heading}</h3>
                  <div className="mt-3 space-y-2.5 text-sm text-[var(--ink-soft)]">
                    {column.links.map((link) => (
                      <a key={link} className="block transition hover:text-[var(--ink-strong)]" href="#0">
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-8 flex w-full max-w-6xl flex-col items-start justify-between gap-3 border-t border-[var(--line)] pt-5 text-xs text-[var(--ink-soft)] sm:flex-row sm:items-center">
            <span>Copyright 2026 Inventory Automation System. All rights reserved.</span>
            <div className="flex items-center gap-4">
              <a className="transition hover:text-[var(--ink-strong)]" href="#terms">
                Terms of Service
              </a>
              <a className="transition hover:text-[var(--ink-strong)]" href="#privacy">
                Privacy Policy
              </a>
              <a className="transition hover:text-[var(--ink-strong)]" href="#security">
                Security
              </a>
            </div>
          </div>
        </footer>
      </main>

      <a
        className="fixed bottom-5 right-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--action)] text-white shadow-lg shadow-emerald-800/30 transition hover:bg-[var(--action-hover)]"
        href="#support"
        aria-label="Support chat"
      >
        <Icon name="chat" />
      </a>
    </div>
  )
}

function LoginPage({ navigate }: { navigate: NavigateFn }) {
  const [showPassword, setShowPassword] = useState(false)

  const bgStyle = useMemo(
    () => ({
      backgroundImage: `linear-gradient(90deg, rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.22)), url(${heroBg})`,
    }),
    [],
  )

  return (
    <div className="grid min-h-screen bg-slate-100 lg:grid-cols-[1.2fr_1fr]">
      <section
        className="relative hidden overflow-hidden bg-cover bg-center p-8 text-white lg:grid lg:grid-rows-[auto_1fr_auto]"
        style={bgStyle}
        aria-label="Intro"
      >
        <a
          className="relative z-10 inline-flex w-fit items-center gap-2.5 rounded-full bg-white/10 px-3 py-2 text-sm font-semibold backdrop-blur"
          href="/"
          onClick={(e) => {
            e.preventDefault()
            navigate('/')
          }}
        >
          <span className="h-6 w-6 rounded-lg bg-[radial-gradient(circle_at_30%_30%,#ffffff_0%,#22d3ee_40%,#2563eb_100%)]"></span>
          Inventory Automation System
        </a>

        <div className="relative z-10 mt-12 self-center">
          <p className="text-xs font-black tracking-[0.18em] text-sky-200">PRECISION CURATED</p>
          <h1 className="mt-4 max-w-lg text-5xl font-black leading-tight tracking-tight">
            Master your inventory with surgical accuracy.
          </h1>
          <p className="mt-4 max-w-lg text-base text-slate-100/90">
            Join retailers who streamline replenishment, reduce stockouts, and improve margin visibility with one connected platform.
          </p>
        </div>

        <div className="relative z-10 flex max-w-xl items-start gap-4 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
          <div className="h-12 w-12 rounded-full bg-white/20"></div>
          <div>
            <p className="text-sm leading-relaxed text-white/95">
              "The move to OmniFlow reduced our stock errors by 42% in the first quarter."
            </p>
            <p className="mt-2 text-xs font-semibold tracking-wide text-sky-100">
              Marcus Thorne, Operations Director
            </p>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center px-4 py-10 sm:px-6" aria-label="Login">
        <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-8">
          <h2 className="text-2xl font-black tracking-tight text-slate-900">Welcome back</h2>
          <p className="mt-2 text-sm text-slate-600">Please enter your credentials to access your dashboard.</p>

          <form
            className="mt-6 space-y-5"
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
            <div>
              <label className="mb-2 block text-xs font-bold tracking-wider text-slate-500" htmlFor="login-email">
                USERNAME OR EMAIL
              </label>
              <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3">
                <span className="text-sm font-semibold text-slate-400" aria-hidden="true">
                  @
                </span>
                <input
                  id="login-email"
                  name="email"
                  type="text"
                  placeholder="name@company.com"
                  autoComplete="username"
                  className="h-11 w-full border-0 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
                />
              </div>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="text-xs font-bold tracking-wider text-slate-500" htmlFor="login-password">
                  PASSWORD
                </label>
                <a className="text-xs font-semibold text-sky-700 hover:text-sky-600" href="#forgot">
                  Forgot Password?
                </a>
              </div>

              <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3">
                <span className="text-slate-400" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="h-4 w-4">
                    <path d="M7 10V8a5 5 0 0 1 10 0v2" fill="none" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M6 10h12v10H6V10Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M12 14v3" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </span>
                <input
                  id="login-password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="........"
                  autoComplete="current-password"
                  className="h-11 w-full border-0 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
                />
                <button
                  type="button"
                  className="text-slate-500 transition hover:text-slate-700"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  onClick={() => setShowPassword((value) => !value)}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
                    <path d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </button>
              </div>
            </div>

            <label className="flex items-center gap-2 text-sm text-slate-600">
              <input type="checkbox" name="remember" className="h-4 w-4 rounded border-slate-300" />
              Keep me signed in for 30 days
            </label>

            <button
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 text-sm font-semibold text-white transition hover:bg-slate-800"
              type="submit"
            >
              Log In
              <span aria-hidden="true">{String.fromCharCode(8594)}</span>
            </button>

            <div className="relative py-1 text-center">
              <span className="relative z-10 bg-white px-3 text-[11px] font-bold tracking-[0.16em] text-slate-400">OR CONTINUE WITH</span>
              <span className="absolute left-0 top-1/2 h-px w-full bg-slate-200"></span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold text-slate-700 hover:bg-slate-100"
              >
                <span aria-hidden="true" className="font-black text-sky-700">
                  G
                </span>
                Google
              </button>
              <button
                type="button"
                className="inline-flex h-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold text-slate-700 hover:bg-slate-100"
                aria-label="Continue with provider"
              >
                Provider
              </button>
            </div>

            <p className="text-center text-sm text-slate-600">
              New to system?{' '}
              <a href="#create" className="font-semibold text-sky-700 hover:text-sky-600">
                Create an account
              </a>
            </p>
          </form>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-[11px] font-bold tracking-wider text-slate-400">
            <a href="#security" className="hover:text-slate-600">
              SECURITY
            </a>
            <a href="#privacy" className="hover:text-slate-600">
              PRIVACY POLICY
            </a>
            <a href="#help" className="hover:text-slate-600">
              HELP CENTER
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function App() {
  const [path, setPath] = useState<string>(() => window.location.pathname)

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPopState)

    return () => {
      window.removeEventListener('popstate', onPopState)
    }
  }, [])

  const navigate: NavigateFn = (to) => {
    if (window.location.pathname === to) {
      return
    }

    window.history.pushState({}, '', to)
    setPath(to)
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }

  if (path === '/login') {
    return <LoginPage navigate={navigate} />
  }

  return <LandingPage navigate={navigate} />
}
