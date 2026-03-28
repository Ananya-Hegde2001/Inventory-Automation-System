import { useEffect, useMemo, useState } from 'react'
import './App.css'
import heroBg from './assets/hero.png'

type NavigateFn = (to: '/' | '/login') => void

function Icon({
  name,
}: {
  name:
    | 'box'
    | 'chart'
    | 'receipt'
    | 'bolt'
    | 'shield'
    | 'link'
    | 'key'
    | 'cloud'
    | 'file'
    | 'chat'
}) {
  switch (name) {
    case 'box':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2 3 6.5V17.5L12 22l9-4.5V6.5L12 2Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M3 6.5 12 11l9-4.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M12 11v11" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      )
    case 'chart':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 19V5" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M4 19h16" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M7 16v-5" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M12 16V7" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M17 16v-3" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      )
    case 'receipt':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 2h10v20l-2-1-3 1-3-1-2 1V2Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M9 7h6" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M9 11h6" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      )
    case 'bolt':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M13 2 4 14h7l-1 8 10-14h-7l0-6Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      )
    case 'shield':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2 4 5.5V12c0 5 3.5 9 8 10 4.5-1 8-5 8-10V5.5L12 2Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M9.5 12.2 11.2 14l3.3-3.6" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      )
    case 'link':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M10 13a4 4 0 0 1 0-6l1.2-1.2a4 4 0 0 1 5.6 5.6L16 12" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M14 11a4 4 0 0 1 0 6L12.8 18.2a4 4 0 1 1-5.6-5.6L8 12" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      )
    case 'key':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 14a5 5 0 1 1 4.7-3.2L21 11v3h-3v3h-3v-3h-4.3A5 5 0 0 1 7 14Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      )
    case 'cloud':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 18h10a4 4 0 0 0 .3-8A6 6 0 0 0 6.2 12 3.5 3.5 0 0 0 7 18Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      )
    case 'file':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 2h7l3 3v17H7V2Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M14 2v5h5" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M9 12h6" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      )
    case 'chat':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 5h16v10H7l-3 3V5Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M8 9h8" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      )
  }
}

function LandingPage({ navigate }: { navigate: NavigateFn }) {
  return (
    <div className="page">
      <header className="nav">
        <div className="navInner">
          <div className="brand">
            <span className="brandMark" aria-hidden="true"></span>
            <span className="brandName">Inventory Automation System</span>
          </div>

          <nav className="navLinks" aria-label="Primary">
            <a href="#features">FEATURES</a>
            <a href="#modules">MODULES</a>
            <a href="#pricing">PRICING</a>
          </nav>

          <div className="navActions">
            <a
              className="linkButton"
              href="/login"
              onClick={(e) => {
                e.preventDefault()
                navigate('/login')
              }}
            >
              LOGIN
            </a>
            <a className="primaryButton" href="#request-demo">
              Request Demo
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" aria-label="Hero">
          <div className="container heroInner">
            <div className="heroCopy">
              <div className="pill">TRUSTED ENTERPRISE SOLUTIONS</div>
              <h1 className="heroTitle">
                Centralized
                <br />
                Retail
                <br />
                Operations
                <br />
                Control
              </h1>
              <p className="heroText">
                Manage inventory, revenue, and expenses across all branches from one
                powerful dashboard built for multi-branch retail businesses.
              </p>
              <div className="heroButtons">
                <a className="primaryButton large" href="#modules">
                  Get Started
                </a>
                <a className="secondaryButton large" href="#request-demo">
                  Request Demo
                </a>
              </div>
            </div>

            <div className="heroVisual" aria-label="Product preview">
              <div className="visualFrame">
                <div className="visualGlow" aria-hidden="true"></div>
                <div className="visualCard" aria-hidden="true">
                  <div className="visualTop">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                  </div>
                  <div className="visualBody">
                    <div className="line w70"></div>
                    <div className="line w55"></div>
                    <div className="line w85"></div>
                    <div className="line w60"></div>
                    <div className="line w75"></div>
                  </div>
                </div>

                <div className="statBadge topRight">
                  <div className="badgeIcon" aria-hidden="true"></div>
                  <div>
                    <div className="badgeLabel">REVENUE</div>
                    <div className="badgeValue">+24.8%</div>
                  </div>
                </div>

                <div className="statBadge bottomLeft">
                  <div className="badgeSquare" aria-hidden="true"></div>
                  <div>
                    <div className="badgeLabel">STOCK ANALYTICS</div>
                    <div className="badgeValue">42,850</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="modules" className="section">
          <div className="container">
            <h2 className="sectionTitle">Built for Multi-Branch Retail Operations</h2>
            <p className="sectionSubtitle">
              Scalable modules designed to streamline complex operations across your entire
              network.
            </p>

            <div className="cardGrid three">
              <article className="featureCard">
                <div className="featureIcon">
                  <Icon name="box" />
                </div>
                <h3>Inventory Management</h3>
                <p>
                  SKU-level precise tracking, real-time stock checks, and automated low stock
                  alerts for optimized supply chain.
                </p>
              </article>
              <article className="featureCard">
                <div className="featureIcon">
                  <Icon name="chart" />
                </div>
                <h3>Financial Intelligence</h3>
                <p>
                  Multi-branch sales reports and product-level profit analysis driven by
                  seasonal AI forecasting.
                </p>
              </article>
              <article className="featureCard">
                <div className="featureIcon">
                  <Icon name="receipt" />
                </div>
                <h3>Expenditure Tracking</h3>
                <p>
                  Smart expense categories and vendor cost optimization with digital audit-ready
                  financial reports.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="features" className="section alt">
          <div className="container">
            <h2 className="sectionTitle">Powerful Features for Retail Businesses</h2>
            <p className="sectionSubtitle">
              Everything you need to manage a high-growth retail empire with centralized
              precision and security.
            </p>

            <div className="cardGrid two">
              <article className="miniCard">
                <div className="miniIcon">
                  <Icon name="link" />
                </div>
                <div>
                  <h3>Multi-branch support</h3>
                  <p>Centralized control for hundreds of locations with localized settings.</p>
                </div>
              </article>
              <article className="miniCard">
                <div className="miniIcon">
                  <Icon name="bolt" />
                </div>
                <div>
                  <h3>Real-time stock updates</h3>
                  <p>Instant inventory sync across all terminals and storage units.</p>
                </div>
              </article>
              <article className="miniCard">
                <div className="miniIcon">
                  <Icon name="shield" />
                </div>
                <div>
                  <h3>POS integration</h3>
                  <p>Seamless connection with modern point-of-sale hardware and software.</p>
                </div>
              </article>
              <article className="miniCard">
                <div className="miniIcon">
                  <Icon name="key" />
                </div>
                <div>
                  <h3>Role-based access</h3>
                  <p>Granular permissions for branch managers, cashiers, and admins.</p>
                </div>
              </article>
              <article className="miniCard">
                <div className="miniIcon">
                  <Icon name="cloud" />
                </div>
                <div>
                  <h3>Cloud system</h3>
                  <p>Secure, always-on access from any device, anywhere in the world.</p>
                </div>
              </article>
              <article className="miniCard">
                <div className="miniIcon">
                  <Icon name="file" />
                </div>
                <div>
                  <h3>Reports</h3>
                  <p>One-click export to PDF, Excel, and CSV for accounting compliance.</p>
                </div>
              </article>
            </div>

            <div className="centerLink">
              <a className="inlineLink" href="#features">
                View all features →
              </a>
            </div>
          </div>
        </section>

        <section className="section" aria-label="Visibility">
          <div className="container split">
            <div className="splitVisual" aria-hidden="true">
              <div className="panel big"></div>
              <div className="panel chart"></div>
              <div className="panel small"></div>
            </div>

            <div className="splitCopy">
              <h2 className="splitTitle">Real-time Visibility Across Your Network</h2>
              <p className="splitText">
                Our dashboard provides a unified view of your entire business. Drill down from
                regional performance to individual SKU levels in seconds.
              </p>
              <ul className="checkList">
                <li>Consolidated financial snapshots</li>
                <li>Automated inventory reordering</li>
                <li>Zero-latency data synchronization</li>
              </ul>
            </div>
          </div>
        </section>

        <div id="pricing" aria-hidden="true"></div>

        <section id="request-demo" className="cta" aria-label="Call to action">
          <div className="container ctaInner">
            <h2>Run All Your Branch Operations from One System</h2>
            <p>
              Built for growing retail businesses with multiple locations. Replace guesswork with
              real-time data and automated scaling.
            </p>
            <div className="ctaButtons">
              <a className="primaryButton large light" href="#start-demo">
                Start Free Demo
              </a>
              <a className="secondaryButton large onBlue" href="#contact-sales">
                Contact Sales
              </a>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container footerInner">
            <div className="footerBrand">
              <div className="brand small">
                <span className="brandMark" aria-hidden="true"></span>
                <span className="brandName">Inventory Automation System</span>
              </div>
              <p>
                The intelligent operating system for modern retail. Manage inventory, revenue, and
                expense control for high-growth enterprises.
              </p>
            </div>

            <div className="footerCols">
              <div className="footerCol">
                <h3>PRODUCT</h3>
                <a href="#inventory-control">Inventory Control</a>
                <a href="#financial-analysis">Financial Analysis</a>
                <a href="#global-pricing">Global Pricing</a>
              </div>
              <div className="footerCol">
                <h3>SOLUTIONS</h3>
                <a href="#real-time-sync">Real-time Sync</a>
                <a href="#pos">POS Terminal</a>
                <a href="#security">Enterprise Security</a>
              </div>
              <div className="footerCol">
                <h3>SUPPORT</h3>
                <a href="#help">Help Center</a>
                <a href="#api">API Documentation</a>
                <a href="#priority">Priority Support</a>
              </div>
            </div>
          </div>

          <div className="container footerBottom">
            <span>© 2026 Inventory Automation System. All rights reserved.</span>
            <div className="footerLinks">
              <a href="#terms">Terms of Service</a>
              <a href="#privacy">Privacy Policy</a>
              <a href="#security">Security</a>
            </div>
          </div>
        </footer>
      </main>

      <a className="chatFab" href="#support" aria-label="Support chat">
        <Icon name="chat" />
      </a>
    </div>
  )
}

function LoginPage({ navigate }: { navigate: NavigateFn }) {
  const [showPassword, setShowPassword] = useState(false)

  const bgStyle = useMemo(
    () => ({
      backgroundImage: `linear-gradient(90deg, rgba(11,18,32,0.65), rgba(11,18,32,0.20)), url(${heroBg})`,
    }),
    [],
  )

  return (
    <div className="auth">
      <section className="authLeft" style={bgStyle} aria-label="Intro">
        <div className="authLeftTop">
          <a
            className="authBrand"
            href="/"
            onClick={(e) => {
              e.preventDefault()
              navigate('/')
            }}
          >
            <span className="authBrandIcon" aria-hidden="true"></span>
            <span>Inventory automation System</span>
          </a>
        </div>

        <div className="authLeftBody">
          <div className="authKicker">PRECISION CURATED</div>
          <h1 className="authHeadline">
            Master your inventory
            <br />
            with surgical accuracy.
          </h1>
          <p className="authSubtext">
            Join thousands of retailers optimizing their supply chain through our Digital Curator
            intelligence.
          </p>
        </div>

        <div className="authTestimonial" aria-label="Testimonial">
          <div className="avatar" aria-hidden="true"></div>
          <div>
            <p className="quote">“The move to OmniFlow reduced our stock errors by 42% in the first quarter.”</p>
            <div className="byline">
              <span className="name">Marcus Thorne</span>, <span className="role">Operations Director</span>
            </div>
          </div>
        </div>
      </section>

      <section className="authRight" aria-label="Login">
        <div className="authCard">
          <h2 className="authTitle">Welcome back</h2>
          <p className="authHint">Please enter your credentials to access your dashboard.</p>

          <form
            className="authForm"
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
            <div className="field">
              <label className="label" htmlFor="login-email">
                Username or Email
              </label>
              <div className="inputWrap">
                <span className="inputIcon" aria-hidden="true">
                  @
                </span>
                <input id="login-email" name="email" type="text" placeholder="name@company.com" autoComplete="username" />
              </div>
            </div>

            <div className="field">
              <div className="labelRow">
                <label className="label" htmlFor="login-password">
                  Password
                </label>
                <a className="forgot" href="#forgot">
                  Forgot Password?
                </a>
              </div>

              <div className="inputWrap">
                <span className="inputIcon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M7 10V8a5 5 0 0 1 10 0v2" fill="none" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M6 10h12v10H6V10Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M12 14v3" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </span>
                <input
                  id="login-password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••••"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="eye"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  onClick={() => setShowPassword((v) => !v)}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </button>
              </div>
            </div>

            <label className="checkRow">
              <input type="checkbox" name="remember" />
              <span>Keep me signed in for 30 days</span>
            </label>

            <button className="submit" type="submit">
              Log In
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </button>

            <div className="divider">
              <span>OR CONTINUE WITH</span>
            </div>

            <div className="socialRow">
              <button type="button" className="social">
                <span className="g" aria-hidden="true">G</span>
                Google
              </button>
              <button type="button" className="social" aria-label="Continue with provider"></button>
            </div>

            <p className="signup">
              New to system? <a href="#create">Create an account</a>
            </p>
          </form>

          <div className="authLinks">
            <a href="#security">SECURITY</a>
            <a href="#privacy">PRIVACY POLICY</a>
            <a href="#help">HELP CENTER</a>
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
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const navigate: NavigateFn = (to) => {
    if (window.location.pathname === to) return
    window.history.pushState({}, '', to)
    setPath(to)
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }

  if (path === '/login') {
    return <LoginPage navigate={navigate} />
  }

  return <LandingPage navigate={navigate} />
}
