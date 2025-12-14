import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Forteen Studios - Where Professionals Become Unforgettable</title>
        <meta name="description" content="Interactive learning experiences in executive presence and behavioral psychology." />
      </Head>

      <div className="home-container">
        {/* Two-Panel Hero Section */}
        <section className="two-panel-hero">
          {/* Left Panel - UNFORGETTABLE Episode 2 */}
          <div className="panel-left">
            <div className="panel-content">
              <p className="episode-label">Episode 2: Before You Speak</p>
              <h1 className="panel-title">Master first impressions and body language</h1>
              <p className="panel-description">
                20 interactive questions across 5 real-world scenarios. 10 minutes to transform your presence.
              </p>
              <a 
                href="https://giriforteen.github.io/unforgettable-forteen/" 
                className="btn btn-gradient"
                target="_blank"
                rel="noopener noreferrer"
              >
                ▶ Stream Now
              </a>
            </div>
          </div>

          {/* Right Panel - Mind Labs Episode 1 */}
          <div className="panel-right">
            <div className="panel-content">
              <p className="episode-label-light">EPISODE 1</p>
              <h2 className="panel-title-light">The Slot Machine Heart</h2>
              <p className="panel-tagline">Why unpredictability feels like love</p>
              <p className="panel-insight">
                The current was always there. You just learned to call it home.
              </p>
              <a 
                href="https://mindlabs.forteen.in/episodes/episode-1-full.html" 
                className="btn btn-waitlist"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Episode 1 →
              </a>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="products-section">
          <h2>Start Your First Sprint</h2>
          <div className="products-grid">
            {/* Listen Sprint */}
            <div className="product-card">
              <div className="product-header">
                <h3>Listen Sprint</h3>
                <span className="status-badge available">Available Now</span>
              </div>
              <p className="product-tagline">Master active listening in 60 seconds</p>
              <p className="product-description">
                Practice real workplace scenarios. Get instant feedback. Build the skill that powers every professional relationship.
              </p>
              <a href="https://giriforteen.github.io/listen-sprint" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                Launch Listen Sprint →
              </a>
            </div>

            {/* Presence Sprint */}
            <div className="product-card">
              <div className="product-header">
                <h3>Presence Sprint</h3>
                <span className="status-badge beta">Beta Available</span>
              </div>
              <p className="product-tagline">Build executive presence in 60 seconds</p>
              <p className="product-description">
                Learn to command attention in meetings, presentations, and high-stakes conversations with confidence.
              </p>
              <a 
                href="https://giriforteen.github.io/presence-sprint-teasers/" 
                className="btn btn-outline" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Take the Test →
              </a>
            </div>

            {/* Voice Sprint */}
            <div className="product-card">
              <div className="product-header">
                <h3>Voice Sprint</h3>
                <span className="status-badge coming">In Development</span>
              </div>
              <p className="product-tagline">Learn to speak up in 60 seconds</p>
              <p className="product-description">
                Find your voice in meetings. Contribute with confidence. Turn ideas into impact in any conversation.
              </p>
              <a href="mailto:girish@forteen.in?subject=Voice Sprint Waitlist" className="btn btn-outline">
                Join Waitlist →
              </a>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="how-it-works">
          <h2>How Forteen Sprints Work</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Quick</h3>
              <p>60 seconds to 5 minutes. Practice fits into your actual workday, not around it.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎮</div>
              <h3>Gamified</h3>
              <p>Badges, streaks, and levels keep you motivated. Progress you can see and share.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💼</div>
              <h3>Workplace-Ready</h3>
              <p>Real scenarios from IT, fintech, and tech. Skills you'll use the same day.</p>
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="personas-section">
          <h2>Who Are Forteen Sprints For?</h2>
          <div className="personas-grid">
            <div className="persona-card">
              <h3>The Junior Analyst</h3>
              <p>
                You're great with numbers but meetings feel different. Learn to present data confidently 
                and hold your own in client conversations.
              </p>
            </div>
            <div className="persona-card">
              <h3>The Meeting Participant</h3>
              <p>
                You have ideas but timing feels off. Master when to speak, how to contribute, 
                and how to make your voice heard without dominating.
              </p>
            </div>
            <div className="persona-card">
              <h3>The Aspiring Leader</h3>
              <p>
                You're ready for more responsibility. Build the executive presence and communication 
                skills that signal leadership potential.
              </p>
            </div>
            <div className="persona-card">
              <h3>The Cross-Cultural Communicator</h3>
              <p>
                You work across cultures and time zones. Navigate different communication styles 
                and build rapport in diverse teams.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="benefits-section">
          <h2>Why Forteen Sprints Work</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Micro-practice beats theory</h3>
              <p>1 minute of practice beats 10 minutes of reading. You learn by doing, not watching.</p>
            </div>
            <div className="benefit-card">
              <h3>Industry-specific scenarios</h3>
              <p>Built for your world: IT standups, fintech client calls, tech team meetings.</p>
            </div>
            <div className="benefit-card">
              <h3>Progressive difficulty</h3>
              <p>Start where you are. Each sprint builds on the last. Growth you can measure.</p>
            </div>
            <div className="benefit-card">
              <h3>Engaging, not exhausting</h3>
              <p>No video lectures. No endless modules. Just focused practice that sticks.</p>
            </div>
            <div className="benefit-card">
              <h3>Always accessible</h3>
              <p>No app to download. No login required. Works on any device, any time.</p>
            </div>
            <div className="benefit-card">
              <h3>Habit-forming design</h3>
              <p>Streaks and badges turn practice into routine. Small wins build momentum.</p>
            </div>
          </div>
        </section>

        {/* Founder Story */}
        <section className="founder-section">
          <div className="founder-content">
            <div className="founder-photo">
              <img src="/girish-photo.JPG" alt="Girish Vasudevan" />
            </div>
            <div className="founder-text">
              <h2>Built by Someone Who's Been There</h2>
              <p className="founder-intro">
                Hi, I'm Girish. I've spent 35+ years in marketing and sales—writing speeches for IBM CEOs, 
                developing marketing strategy for Apple Computer, and leading marketing communications for IBM India.
              </p>
              <p>
                I've seen brilliant technical minds struggle in meetings. Engineers with game-changing ideas 
                who couldn't get a word in. Analysts who knew the data cold but froze in presentations.
              </p>
              <p>
                Traditional training didn't help. Too long. Too generic. Too disconnected from real work.
              </p>
              <p>
                So I built Forteen Sprints: the fastest way to practice real workplace communication. 
                60-second exercises. Your scenarios. Your schedule.
              </p>
            </div>
          </div>
        </section>

        {/* Get Started */}
        <section className="get-started-section">
          <h2>Ready to Start?</h2>
          <div className="get-started-grid">
            <div className="get-started-card">
              <h3>For Individuals</h3>
              <p>Try Listen Sprint free. No signup required. Start building skills in 60 seconds.</p>
              <a href="https://giriforteen.github.io/listen-sprint" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Launch Listen Sprint
              </a>
            </div>
            <div className="get-started-card">
              <h3>For Teams</h3>
              <p>Bring Forteen Sprints to your organization. Custom programs for your industry.</p>
              <Link href="/services" className="btn btn-primary">
                Explore Team Solutions
              </Link>
            </div>
          </div>
        </section>

        {/* Corporate Services (De-emphasized) */}
        <section className="corporate-section">
          <div className="corporate-content">
            <h2>Team Solutions & Corporate Programs</h2>
            <p>
              Beyond our sprint products, we work with organizations to build communication capability 
              at scale. Custom programs for IT sales teams, professional development, and leadership acceleration.
            </p>
            <div className="corporate-services">
              <div className="service-icon">🎯</div>
              <div className="service-icon">💬</div>
              <div className="service-icon">🚀</div>
              <div className="service-icon">👥</div>
            </div>
            <Link href="/services" className="btn btn-secondary">
              Learn About Team Solutions
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}