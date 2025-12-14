import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

export default function Layout({ title, description, children }){
  const { pathname } = useRouter()
  const isActive = (p) => pathname === p ? "active" : ""
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/twitter-card.png" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      
      <header className="header">
        <div className="container nav">
          <Link href="/" className="brand">
            <img 
              src="/Forteen_Logo.svg" 
              alt="Forteen" 
              style={{ height: '48px', width: 'auto' }}
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul>
              <li>
                <a href="https://studios.forteen.in/unforgettable_episode2_before_you_speak.html" target="_blank" rel="noopener noreferrer">
                  Studios
                </a>
              </li>
              <li>
                <a href="https://mindlabs.forteen.in/episodes/episode-1-full.html" target="_blank" rel="noopener noreferrer">
                  Mind Labs
                </a>
              </li>
              <li 
                className="dropdown-parent"
                onMouseEnter={() => setActiveDropdown('sprints')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span className="dropdown-trigger">
                  Sprints <span className="dropdown-arrow">▼</span>
                </span>
                <div className={`dropdown-menu ${activeDropdown === 'sprints' ? 'active' : ''}`}>
                  <a href="https://giriforteen.github.io/listen-sprint" target="_blank" rel="noopener noreferrer" className="dropdown-item">
                    <span className="dropdown-icon">👂</span>
                    <div>
                      <div className="dropdown-item-title">Listen Sprint</div>
                      <div className="dropdown-item-desc">Active listening mastery</div>
                    </div>
                  </a>
                  <a href="https://giriforteen.github.io/voice-sprint-mvp/" target="_blank" rel="noopener noreferrer" className="dropdown-item">
                    <span className="dropdown-icon">🎤</span>
                    <div>
                      <div className="dropdown-item-title">Voice Sprint</div>
                      <div className="dropdown-item-desc">Speak up with confidence</div>
                    </div>
                  </a>
                  <a href="https://giriforteen.github.io/presence-sprint-teasers/" target="_blank" rel="noopener noreferrer" className="dropdown-item">
                    <span className="dropdown-icon">⭐</span>
                    <div>
                      <div className="dropdown-item-title">Presence Sprint</div>
                      <div className="dropdown-item-desc">Command any room</div>
                    </div>
                  </a>
                </div>
              </li>
              <li 
                className="dropdown-parent"
                onMouseEnter={() => setActiveDropdown('company')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span className="dropdown-trigger">
                  Company <span className="dropdown-arrow">▼</span>
                </span>
                <div className={`dropdown-menu ${activeDropdown === 'company' ? 'active' : ''}`}>
                  <Link href="/about" className="dropdown-item">
                    <span className="dropdown-icon">ℹ️</span>
                    <div>
                      <div className="dropdown-item-title">About Forteen</div>
                      <div className="dropdown-item-desc">Our mission & story</div>
                    </div>
                  </Link>
                  <Link href="/services" className="dropdown-item">
                    <span className="dropdown-icon">💼</span>
                    <div>
                      <div className="dropdown-item-title">Corporate Solutions</div>
                      <div className="dropdown-item-desc">Training for teams</div>
                    </div>
                  </Link>
                  <Link href="/contact" className="dropdown-item">
                    <span className="dropdown-icon">📧</span>
                    <div>
                      <div className="dropdown-item-title">Contact</div>
                      <div className="dropdown-item-desc">Get in touch</div>
                    </div>
                  </Link>
                </div>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-section">
            <a href="https://studios.forteen.in/unforgettable_episode2_before_you_speak.html" target="_blank" rel="noopener noreferrer" className="mobile-nav-item">
              <span className="mobile-icon">🎬</span> Studios
            </a>
            <a href="https://mindlabs.forteen.in/episodes/episode-1-full.html" target="_blank" rel="noopener noreferrer" className="mobile-nav-item">
              <span className="mobile-icon">🧠</span> Mind Labs
            </a>
          </div>
          
          <div className="mobile-nav-section">
            <div className="mobile-section-title">Sprints</div>
            <a href="https://giriforteen.github.io/listen-sprint" target="_blank" rel="noopener noreferrer" className="mobile-nav-item indent">
              <span className="mobile-icon">👂</span> Listen Sprint
            </a>
            <a href="https://giriforteen.github.io/voice-sprint-mvp/" target="_blank" rel="noopener noreferrer" className="mobile-nav-item indent">
              <span className="mobile-icon">🎤</span> Voice Sprint
            </a>
            <a href="https://giriforteen.github.io/presence-sprint-teasers/" target="_blank" rel="noopener noreferrer" className="mobile-nav-item indent">
              <span className="mobile-icon">⭐</span> Presence Sprint
            </a>
          </div>

          <div className="mobile-nav-section">
            <div className="mobile-section-title">Company</div>
            <Link href="/about" className="mobile-nav-item indent" onClick={() => setMobileMenuOpen(false)}>
              <span className="mobile-icon">ℹ️</span> About Forteen
            </Link>
            <Link href="/services" className="mobile-nav-item indent" onClick={() => setMobileMenuOpen(false)}>
              <span className="mobile-icon">💼</span> Corporate Solutions
            </Link>
            <Link href="/contact" className="mobile-nav-item indent" onClick={() => setMobileMenuOpen(false)}>
              <span className="mobile-icon">📧</span> Contact
            </Link>
          </div>
        </div>
      </header>
      
      <main>{children}</main>
      
      <footer className="footer">
        <div className="container wrap">
          <div className="grid cols-4">
            <div>
              <div className="badge">ABOUT</div>
              <p>Forteen strengthens performance through interactive learning experiences that build real communication skills.</p>
            </div>
            <div>
              <div className="badge">CONTACT</div>
              <p><a href="mailto:girish@forteen.in">girish@forteen.in</a><br/>Bengaluru, India</p>
            </div>
            <div>
              <div className="badge">PRODUCTS</div>
              <p>
                <a href="https://giriforteen.github.io/unforgettable-forteen/" target="_blank" rel="noopener noreferrer">Studios</a> · 
                <a href="https://mindlabs.forteen.in" target="_blank" rel="noopener noreferrer">Mind Labs</a> · 
                <a href="https://giriforteen.github.io/listen-sprint" target="_blank" rel="noopener noreferrer">Listen</a> · 
                Voice · Presence
              </p>
            </div>
            <div>
              <div className="badge">SOCIAL</div>
              <p>
                <a href="https://www.linkedin.com/company/forteen-consulting" target="_blank" rel="noopener noreferrer">LinkedIn</a> · 
                <a href="https://instagram.com/forteen.consulting" target="_blank" rel="noopener noreferrer">Instagram</a>
              </p>
            </div>
          </div>
          <div className="footer-meta">© {new Date().getFullYear()} Forteen Consulting Pvt. Ltd.</div>
        </div>
      </footer>
    </>
  )
}