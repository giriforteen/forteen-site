import Layout from "@/components/Layout"
import Link from "next/link"

export default function Home(){
  return (
    <Layout title="Forteen Consulting — Leadership, Sales, and Communication Training for Global Teams"
            description="From Bengaluru to the world, Forteen Consulting strengthens performance through IT Sales Training, Professional Communication, Leadership Development, and Talent Acquisition.">
      <section className="hero">
        <div className="container">
          <span className="badge">Forteen Consulting</span>
          <h1>Great People. Great Outcomes.</h1>
          <p>From Bengaluru to the world, Forteen Consulting strengthens performance through IT Sales Training, Professional Communication Development, Leadership Development, and Talent Acquisition.</p>
          <div className="cta">
            <Link className="btn btn-white" href="/services">Explore Services</Link>
            <Link className="btn btn-outline" href="/contact">Contact Us</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>About Snapshot</h2>
          <p className="lead">We help organizations build people capability through structured learning programs that deliver measurable performance improvement.</p>
        </div>
      </section>

      <section className="section" style={{background:"var(--bg)"}}>
        <div className="container">
          <h2>Core Services</h2>
          <div className="grid cols-4">
            {[
              {t:'IT Sales Training',d:'Consultative selling, demos, negotiation, and account ownership.'},
              {t:'Professional Communication',d:'Written and spoken clarity, storytelling, and meeting impact.'},
              {t:'Leadership Development',d:'Executive presence, decision-making, coaching, and influence.'},
              {t:'Talent Acquisition',d:'Leadership hiring, structured interviews, and onboarding support.'},
            ].map((s, i)=>(
              <div className="card" key={i}><div className="body"><h3>{s.t}</h3><p>{s.d}</p></div></div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
