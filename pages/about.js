import Head from 'next/head';
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About Forteen - Our Mission & Approach</title>
        <meta name="description" content="Forteen Consulting is a Bengaluru-based people development company helping organizations improve performance through skill-based, measurable learning interventions." />
      </Head>

      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>About</h1>
          <h2 className="page-hero-subtitle">Who We Are</h2>
          <p className="page-hero-text">
            Forteen Consulting is a Bengaluru-based people development company helping organizations 
            improve performance through skill-based, measurable learning interventions.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="content-section">
        <div className="container">
          <div className="content-card">
            <h2>Mission</h2>
            <p className="content-text">
              To empower individuals and organizations to achieve excellence through structured learning, 
              purposeful leadership, and effective communication.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="content-section alt-bg">
        <div className="container">
          <div className="content-card">
            <h2>Our Approach</h2>
            <p className="content-text">
              We believe in practical learning that delivers visible results. Our programs blend behavioral science, 
              real-world business context, and personalized coaching to help participants perform better from day one.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Note Section */}
      <section className="content-section">
        <div className="container">
          <div className="content-card featured">
            <h2>Leadership Note</h2>
            <p className="content-text">
              Communication, listening, and presence are not just workplace skills, they're life skills that shape who we become. 
              At Forteen, we believe these abilities can transform individuals into confident global leaders who inspire, 
              influence, and create real change.
            </p>
            <p className="signature-text">
              — <strong>Girish Vasudevan</strong>, Founder & CEO
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="content-section alt-bg">
        <div className="container">
          <h2 className="section-title">What Makes Us Different</h2>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🤝</div>
              <h3>Blended Approach</h3>
              <p>Combination of consulting, coaching, and capability building</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">💼</div>
              <h3>Deep Specialization</h3>
              <p>Deep specialization in IT sales, leadership, and communication for technical professionals</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">📚</div>
              <h3>Structured Learning</h3>
              <p>Structured learning journeys instead of one-off workshops</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">🌍</div>
              <h3>Global Reach</h3>
              <p>Global reach with clients across time zones</p>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}