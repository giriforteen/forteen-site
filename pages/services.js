import Head from 'next/head';
import Layout from '../components/Layout';

export default function Services() {
  return (
    <Layout>
      <Head>
        <title>Corporate Training Services - Forteen</title>
        <meta name="description" content="Structured learning programs for organizations. IT Sales Training, Professional Communication, Leadership Development, and Talent Acquisition services." />
      </Head>

      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <h1>Corporate Training & Consulting</h1>
          <p className="services-hero-subtitle">
            Structured learning programs for organizations seeking comprehensive communication and leadership development.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-detail-section">
        <div className="container">
          
          {/* IT Sales Training */}
          <div className="service-detail-card">
            <div className="service-icon-large">💻</div>
            <h2>IT Sales Training</h2>
            <p className="service-description">
              Equip your sales teams with the skills to sell complex technology solutions. Our training covers consultative 
              selling, technical demos, objection handling, and negotiation strategies specific to IT sales.
            </p>
            <h3>What We Cover:</h3>
            <ul className="service-features-list">
              <li>Consultative selling methodology</li>
              <li>Technical product demonstrations</li>
              <li>Value proposition development</li>
              <li>Objection handling for technical sales</li>
              <li>Negotiation and closing strategies</li>
              <li>Account management and upselling</li>
            </ul>
            <p className="service-ideal-for">
              <strong>Ideal for:</strong> Software companies, SaaS businesses, IT services firms, and technology vendors
            </p>
          </div>

          {/* Professional Communication */}
          <div className="service-detail-card">
            <div className="service-icon-large">💬</div>
            <h2>Professional Communication</h2>
            <p className="service-description">
              Build clear, confident communicators across your organization. From active listening to executive presentations, 
              we help your teams communicate with clarity, impact, and professionalism.
            </p>
            <h3>What We Cover:</h3>
            <ul className="service-features-list">
              <li>Active listening and comprehension</li>
              <li>Clear and concise messaging</li>
              <li>Business writing and emails</li>
              <li>Meeting effectiveness and participation</li>
              <li>Presentation skills and storytelling</li>
              <li>Cross-cultural communication</li>
            </ul>
            <p className="service-ideal-for">
              <strong>Ideal for:</strong> Growing teams, remote organizations, global companies, and early-career professional development programs
            </p>
          </div>

          {/* Leadership Development */}
          <div className="service-detail-card">
            <div className="service-icon-large">👥</div>
            <h2>Leadership Development</h2>
            <p className="service-description">
              Develop leaders at every level of your organization. Our programs build executive presence, strategic thinking, 
              and the communication skills that inspire teams and drive results.
            </p>
            <h3>What We Cover:</h3>
            <ul className="service-features-list">
              <li>Executive presence and gravitas</li>
              <li>Strategic communication</li>
              <li>Coaching and feedback delivery</li>
              <li>Influence without authority</li>
              <li>Change management communication</li>
              <li>Building high-performing teams</li>
            </ul>
            <p className="service-ideal-for">
              <strong>Ideal for:</strong> Emerging leaders, mid-level managers, senior executives, and succession planning programs
            </p>
          </div>

          {/* Talent Acquisition */}
          <div className="service-detail-card">
            <div className="service-icon-large">🎯</div>
            <h2>Talent Acquisition</h2>
            <p className="service-description">
              Strengthen your hiring process with structured interviewing, assessment techniques, and leadership hiring strategies. 
              We help you identify, attract, and select top talent.
            </p>
            <h3>What We Cover:</h3>
            <ul className="service-features-list">
              <li>Structured behavioral interviewing</li>
              <li>Competency-based assessment</li>
              <li>Leadership hiring frameworks</li>
              <li>Interview panel training</li>
              <li>Candidate experience optimization</li>
              <li>Reducing hiring bias</li>
            </ul>
            <p className="service-ideal-for">
              <strong>Ideal for:</strong> HR teams, hiring managers, recruiting leaders, and organizations scaling rapidly
            </p>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta-section">
        <div className="container">
          <h2>Ready to Build Your Team's Capabilities?</h2>
          <p>Let's discuss how Forteen can support your organization's learning and development goals.</p>
          <a href="/contact" className="btn btn-primary">Get in Touch →</a>
        </div>
      </section>

    </Layout>
  );
}