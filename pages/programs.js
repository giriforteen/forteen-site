import Head from 'next/head';
import Layout from '../components/Layout';

export default function Programs() {
  return (
    <Layout>
      <Head>
        <title>Programs - Forteen Learning Tracks</title>
        <meta name="description" content="Structured programs that blend behavioral science, real-world practice, and coaching feedback to build skills that last." />
      </Head>

      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>Programs</h1>
          <h2 className="page-hero-subtitle">Learning Tracks</h2>
          <p className="page-hero-text">
            Structured programs that blend behavioral science, real-world practice, and coaching feedback to build skills that last.
          </p>
        </div>
      </section>

      {/* Sales Excellence Program */}
      <section className="content-section">
        <div className="container">
          <div className="program-card">
            <h2>Sales Excellence Program</h2>
            <p className="program-description">
              A complete capability journey for technology professionals who want to evolve into trusted client partners.
            </p>
            
            <h3>Key Learning Outcomes</h3>
            <ul className="program-list">
              <li>Understanding client business drivers</li>
              <li>Structuring solution demos and value conversations</li>
              <li>Handling objections and negotiations</li>
              <li>Building account ownership and client trust</li>
            </ul>
            
            <p className="program-ideal">
              <strong>Ideal For:</strong> Sales engineers, account executives, and customer-facing consultants.
            </p>
          </div>
        </div>
      </section>

      {/* Active Listening Program */}
      <section className="content-section alt-bg">
        <div className="container">
          <div className="program-card">
            <h2>Active Listening Program</h2>
            <p className="program-description">
              Forteen's signature communication program. It turns everyday interactions into opportunities for trust-building and influence.
            </p>
            
            <h3>Key Learning Outcomes</h3>
            <ul className="program-list">
              <li>Operate at Attentive & Empathetic listening levels</li>
              <li>Master 5 techniques: Paraphrasing, Reflecting Emotions, Clarifying Questions, Summarizing, Reading Non-Verbal Cues</li>
              <li>Overcome barriers: Distractions, Emotional Triggers, Biases, Time Pressure, Solution-Driven Listening</li>
              <li>Build consistent habits that improve trust and influence</li>
            </ul>
            
            <div className="program-highlights">
              <h3>Program Highlights</h3>
              <p>70% of trust comes from feeling heard; 3× faster issue resolution; 93% of communication is non-verbal.</p>
            </div>
            
            <div className="program-delivery">
              <h3>Delivery Options</h3>
              <p>2-hour foundation or 1-day workshop; virtual, in-person, or blended; includes printable reference and coaching templates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Acceleration Program */}
      <section className="content-section">
        <div className="container">
          <div className="program-card">
            <h2>Leadership Acceleration Program</h2>
            <p className="program-description">
              Designed for emerging and mid-level leaders who want to lead with confidence, empathy, and clarity.
            </p>
            
            <h3>Key Learning Outcomes</h3>
            <ul className="program-list">
              <li>Executive presence and decision-making</li>
              <li>Leading with empathy and accountability</li>
              <li>Coaching and feedback conversations</li>
              <li>Driving motivation and culture</li>
            </ul>
            
            <p className="program-ideal">
              <strong>Ideal For:</strong> Team leads, department heads, and aspiring senior leaders.
            </p>
          </div>
        </div>
      </section>

    </Layout>
  );
}