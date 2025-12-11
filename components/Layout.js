import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"

export default function Layout({ title, description, children }){
  const { pathname } = useRouter()
  const isActive = (p) => pathname === p ? "active" : ""
  
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
        <link 
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Inter:wght@300;400;600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
      </Head>
      
      <header className="header">
        <div className="container nav">
          <Link href="/" className="brand">
            <img 
              src="/Forteen_Logo.svg" 
              alt="Forteen Consulting" 
              style={{ height: '48px', width: 'auto' }}
            />
          </Link>
          <nav>
            <ul>
              <li><Link className={isActive("/")} href="/">Home</Link></li>
              <li><Link className={isActive("/about")} href="/about">About</Link></li>
              <li><Link className={isActive("/services")} href="/services">Services</Link></li>
              <li><Link className={isActive("/programs")} href="/programs">Programs</Link></li>
              <li><Link className={isActive("/contact")} href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main>{children}</main>
      
      <footer className="footer">
        <div className="container wrap">
          <div className="grid cols-4">
            <div>
              <div className="badge">ABOUT</div>
              <p>Forteen Consulting strengthens performance through Sales, Communication, Leadership, and Talent services.</p>
            </div>
            <div>
              <div className="badge">CONTACT</div>
              <p><a href="mailto:girish@forteen.in">girish@forteen.in</a><br/>Bengaluru, India</p>
            </div>
            <div>
              <div className="badge">NAVIGATION</div>
              <p><Link href="/">Home</Link> · <Link href="/about">About</Link> · <Link href="/services">Services</Link> · <Link href="/programs">Programs</Link> · <Link href="/contact">Contact</Link></p>
            </div>
            <div>
              <div className="badge">SOCIAL</div>
              <p><a href="https://www.linkedin.com" target="_blank">LinkedIn</a> · <a href="https://instagram.com/forteen.consulting" target="_blank">Instagram</a></p>
            </div>
          </div>
          <div className="footer-meta">Â© {new Date().getFullYear()} Forteen Consulting Pvt. Ltd.</div>
        </div>
      </footer>
    </>
  )
}