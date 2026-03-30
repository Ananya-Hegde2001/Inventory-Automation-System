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
  return (
    <div className="min-h-screen text-slate-700">
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-slate-50/80 backdrop-blur-lg">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <div className="flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className="h-7 w-7 rounded-xl bg-[radial-gradient(circle_at_30%_30%,#ffffff_0%,#38bdf8_35%,#2563eb_100%)] shadow-sm"
            ></span>
            <span className="text-sm font-semibold tracking-wide text-slate-900">Inventory Automation System</span>
          </div>

          <nav className="hidden items-center gap-2 md:flex" aria-label="Primary">
            <a className="rounded-full px-3 py-1.5 text-xs font-semibold tracking-wider text-slate-500 hover:bg-sky-100/80 hover:text-slate-800" href="#features">
              FEATURES
            </a>
            <a className="rounded-full px-3 py-1.5 text-xs font-semibold tracking-wider text-slate-500 hover:bg-sky-100/80 hover:text-slate-800" href="#modules">
              MODULES
            </a>
            <a className="rounded-full px-3 py-1.5 text-xs font-semibold tracking-wider text-slate-500 hover:bg-sky-100/80 hover:text-slate-800" href="#pricing">
              PRICING
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              className="rounded-full px-3 py-2 text-xs font-bold tracking-wider text-slate-500 hover:bg-slate-200/70 hover:text-slate-800"
              href="/login"
              onClick={(e) => {
                e.preventDefault()
                navigate('/login')
              }}
            >
              LOGIN
            </a>
            <a
              className="rounded-full bg-sky-600 px-4 py-2 text-xs font-bold tracking-wide text-white shadow-lg shadow-sky-600/20 transition hover:bg-sky-500"
              href="#request-demo"
            >
              Request Demo
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden scroll-mt-24 px-4 pb-16 pt-14 sm:px-6" aria-label="Hero">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -left-12 -top-8 h-72 w-72 rounded-full bg-sky-300/25 blur-3xl"></div>
            <div className="absolute right-0 top-20 h-64 w-64 rounded-full bg-indigo-300/25 blur-3xl"></div>
          </div>

          <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-black tracking-[0.16em] text-sky-700">
                TRUSTED ENTERPRISE SOLUTIONS
              </p>
              <h1 className="mt-5 text-4xl font-black leading-[0.95] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Centralized Retail Operations Control
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                Manage inventory, revenue, and expenses across all branches from one platform designed for high-growth retail teams.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800" href="#modules">
                  Get Started
                </a>
                <a
                  className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                  href="#request-demo"
                >
                  Request Demo
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-4/3 overflow-hidden rounded-3xl border border-slate-200 bg-white/90 shadow-2xl shadow-slate-200/60 backdrop-blur">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(56,189,248,0.25),transparent_48%),radial-gradient(circle_at_75%_75%,rgba(59,130,246,0.2),transparent_48%)]"></div>
                <div className="absolute inset-6 rounded-2xl border border-slate-200 bg-white/90">
                  <div className="flex h-10 items-center gap-2 border-b border-slate-100 px-4">
                    <span className="h-2 w-2 rounded-full bg-slate-300"></span>
                    <span className="h-2 w-2 rounded-full bg-slate-300"></span>
                    <span className="h-2 w-2 rounded-full bg-slate-300"></span>
                  </div>
                  <div className="grid gap-3 p-5">
                    <span className="h-2.5 w-8/12 rounded-full bg-slate-200"></span>
                    <span className="h-2.5 w-5/12 rounded-full bg-slate-200"></span>
                    <span className="h-2.5 w-10/12 rounded-full bg-slate-200"></span>
                    <span className="h-2.5 w-7/12 rounded-full bg-slate-200"></span>
                  </div>
                </div>
              </div>

              <div className="absolute right-3 top-3 rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-lg">
                <p className="text-[10px] font-bold tracking-wider text-slate-400">REVENUE</p>
                <p className="text-sm font-extrabold text-slate-900">+24.8%</p>
              </div>

              <div className="absolute -bottom-2 left-3 rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-lg">
                <p className="text-[10px] font-bold tracking-wider text-slate-400">STOCK ANALYTICS</p>
                <p className="text-sm font-extrabold text-slate-900">42,850</p>
              </div>
            </div>
          </div>
        </section>

        <section id="modules" className="scroll-mt-24 px-4 py-16 sm:px-6">
          <div className="mx-auto w-full max-w-6xl">
            <h2 className="text-center text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Built for Multi-Branch Retail Operations
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-slate-600 sm:text-base">
              Modular tools that simplify complex branch workflows and help your team scale with confidence.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {moduleCards.map((card) => (
                <article key={card.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                    <Icon name={card.icon} />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-slate-900">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="scroll-mt-24 border-y border-slate-200/90 bg-white/80 px-4 py-16 sm:px-6">
          <div className="mx-auto w-full max-w-6xl">
            <h2 className="text-center text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Powerful Features for Retail Teams
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-slate-600 sm:text-base">
              Centralized precision, role-based access, and highly visible insights from stock to settlement.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {featureCards.map((card) => (
                <article key={card.title} className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5">
                  <div className="flex items-start gap-3">
                    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                      <Icon name={card.icon} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">{card.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{card.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6" aria-label="Visibility">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-2">
            <div className="relative h-80">
              <div className="absolute left-0 top-10 h-44 w-10/12 rounded-3xl border border-slate-200 bg-linear-to-b from-sky-100 to-white shadow-md"></div>
              <div className="absolute left-[18%] top-0 h-36 w-7/12 rounded-3xl border border-slate-200 bg-linear-to-b from-slate-100 to-white shadow-md"></div>
              <div className="absolute bottom-0 left-2 h-28 w-5/12 rounded-3xl border border-slate-200 bg-linear-to-b from-indigo-100 to-white shadow-md"></div>
            </div>

            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Real-time visibility across your network
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                Drill down from branch-level performance to SKU-level movement in seconds and act on issues before they become losses.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3 text-sm font-medium text-slate-700">
                  <span className="mt-0.5 h-5 w-5 rounded-full border border-sky-200 bg-sky-100"></span>
                  Consolidated financial snapshots
                </li>
                <li className="flex items-start gap-3 text-sm font-medium text-slate-700">
                  <span className="mt-0.5 h-5 w-5 rounded-full border border-sky-200 bg-sky-100"></span>
                  Automated inventory reordering
                </li>
                <li className="flex items-start gap-3 text-sm font-medium text-slate-700">
                  <span className="mt-0.5 h-5 w-5 rounded-full border border-sky-200 bg-sky-100"></span>
                  Zero-latency data synchronization
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div id="pricing" className="scroll-mt-24" aria-hidden="true"></div>

        <section id="request-demo" className="scroll-mt-24 px-4 pb-16 sm:px-6" aria-label="Call to action">
          <div className="mx-auto w-full max-w-6xl rounded-3xl bg-linear-to-br from-sky-700 via-blue-700 to-indigo-700 px-6 py-12 text-center text-white shadow-2xl shadow-blue-900/20 sm:px-12">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Run all branch operations from one system
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm text-sky-100 sm:text-base">
              Built for growing retail businesses. Replace manual coordination with one shared source of truth.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100" href="#start-demo">
                Start Free Demo
              </a>
              <a className="rounded-full border border-white/35 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20" href="#contact-sales">
                Contact Sales
              </a>
            </div>
          </div>
        </section>

        <footer className="border-t border-slate-200 bg-white/80 px-4 pb-8 pt-12 sm:px-6">
          <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <div className="flex items-center gap-2.5">
                <span
                  aria-hidden="true"
                  className="h-7 w-7 rounded-xl bg-[radial-gradient(circle_at_30%_30%,#ffffff_0%,#38bdf8_35%,#2563eb_100%)] shadow-sm"
                ></span>
                <span className="text-sm font-semibold tracking-wide text-slate-900">Inventory Automation System</span>
              </div>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600">
                The intelligent operating system for modern retail. Centralize inventory, revenue, and operational control from one dashboard.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {footerColumns.map((column) => (
                <div key={column.heading}>
                  <h3 className="text-xs font-extrabold tracking-[0.14em] text-slate-500">{column.heading}</h3>
                  <div className="mt-3 space-y-2.5 text-sm text-slate-600">
                    {column.links.map((link) => (
                      <a key={link} className="block hover:text-slate-900" href="#0">
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-8 flex w-full max-w-6xl flex-col items-start justify-between gap-3 border-t border-slate-200 pt-5 text-xs text-slate-500 sm:flex-row sm:items-center">
            <span>Copyright 2026 Inventory Automation System. All rights reserved.</span>
            <div className="flex items-center gap-4">
              <a className="hover:text-slate-900" href="#terms">
                Terms of Service
              </a>
              <a className="hover:text-slate-900" href="#privacy">
                Privacy Policy
              </a>
              <a className="hover:text-slate-900" href="#security">
                Security
              </a>
            </div>
          </div>
        </footer>
      </main>

      <a
        className="fixed bottom-5 right-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-sky-600 text-white shadow-lg shadow-sky-700/30 transition hover:bg-sky-500"
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
