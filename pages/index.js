import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Forteen - Master Workplace Communication Through Microlearning</title>
        <meta name="description" content="60-second sprints that build real workplace skills for early-career professionals." />
      </Head>

      <div className="home-container">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1>Master workplace communication. One sprint at a time.</h1>
            <p className="hero-subtitle">
              60-second sprints that build real workplace skills for early-career professionals. 
              Built for IT professionals, fintech analysts, tech teams, and emerging leaders.
            </p>
            <div className="hero-cta">
              <a href="https://giriforteen.github.io/listen-sprint" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Try Listen Sprint Free
              </a>
              <Link href="/programs" className="btn btn-secondary">
                Explore All Products
              </Link>
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
                Launch Listen Sprint &rarr;
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
                Take the Test &rarr;
              </a>
            </div>

            {/* Voice Sprint */}
            <div className="product-card">
              <div className="product-header">
                <h3>Voice Sprint</h3>
                <span className="status-badge available">Available Now</span>
              </div>
              <p className="product-tagline">Learn to speak up in 60 seconds</p>
              <p className="product-description">
                Find your voice in meetings. Contribute with confidence. Turn ideas into impact in any conversation.
              </p>
              <a 
                href="https://giriforteen.github.io/voice-sprint-mvp/" 
                className="btn btn-outline" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Launch Voice Sprint &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="how-it-works">
          <h2>How Forteen Sprints Work</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">&#9889;</div>
              <h3>Quick</h3>
              <p>60 seconds to 5 minutes. Practice fits into your actual workday, not around it.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">&#127918;</div>
              <h3>Gamified</h3>
              <p>Badges, streaks, and levels keep you motivated. Progress you can see and share.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">&#128188;</div>
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
            <h2>Team Solutions &amp; Corporate Programs</h2>
            <p>
              Beyond our sprint products, we work with organizations to build communication capability 
              at scale. Custom programs for IT sales teams, professional development, and leadership acceleration.
            </p>
            <div className="corporate-services">
              <div className="service-icon">&#127919;</div>
              <div className="service-icon">&#128172;</div>
              <div className="service-icon">&#128640;</div>
              <div className="service-icon">&#128101;</div>
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
