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
        {/* Mission Strip with Product Grid */}
        <section className="mission-strip">
          <div className="container">
            <p className="mission-heading">
              Welcome to your complete toolkit for mastering modern communication—professional and personal, safe and effective.
            </p>
            <div className="product-grid">
              <a href="/studios" className="product-item">
                <div className="icon">🎬</div>
                <div className="name">Forteen Studios</div>
                <div className="desc">Interactive executive presence training</div>
              </a>
              <a href="/mindlabs" className="product-item">
                <div className="icon">🧠</div>
                <div className="name">Mind Labs</div>
                <div className="desc">Behavioral psychology insights</div>
              </a>
              <a href="https://giriforteen.github.io/listen-sprint" target="_blank" rel="noopener noreferrer" className="product-item">
                <div className="icon">👂</div>
                <div className="name">Listen Sprint</div>
                <div className="desc">Active listening mastery</div>
              </a>
              <a href="https://giriforteen.github.io/voice-sprint-mvp/" target="_blank" rel="noopener noreferrer" className="product-item">
                <div className="icon">🎤</div>
                <div className="name">Voice Sprint</div>
                <div className="desc">Speak up with confidence</div>
              </a>
              <a href="https://giriforteen.github.io/presence-sprint-teasers/" target="_blank" rel="noopener noreferrer" className="product-item">
                <div className="icon">⭐</div>
                <div className="name">Presence Sprint</div>
                <div className="desc">Command any room</div>
              </a>
            </div>
          </div>
        </section>

        {/* Dual Hero - Studios + Mind Labs Split Screen */}
        <section className="dual-hero">
          <div className="dual-hero-panel studios-panel">
            <div className="dual-hero-content">
              <div className="panel-eyebrow">EPISODE 2: BEFORE YOU SPEAK</div>
              <h2 className="panel-title">Master first impressions and body language</h2>
              <p className="panel-description">
                20 interactive questions across 5 real-world scenarios. 10 minutes to transform your presence.
              </p>
              <a href="https://studios.forteen.in/unforgettable_episode2_before_you_speak.html" target="_blank" rel="noopener noreferrer" className="panel-cta">
                ▶ Stream Now
              </a>
            </div>
          </div>
          
          <div className="dual-hero-panel mindlabs-panel">
            <div className="dual-hero-content">
              <div className="panel-eyebrow">EPISODE 1</div>
              <h2 className="panel-title">The Slot Machine Heart</h2>
              <p className="panel-subtitle">Why unpredictability feels like love</p>
              <blockquote className="panel-quote">
                The current was always there. You just learned to call it home.
              </blockquote>
              <a href="https://mindlabs.forteen.in/episodes/episode-1-full.html" target="_blank" rel="noopener noreferrer" className="panel-cta">
                Start Episode 1 →
              </a>
            </div>
          </div>
        </section>

       {/* Pollinator Series Showcase */}
        <section className="pollinator-showcase">
          <div className="container">
            <h2 className="section-title">The Pollinator Series</h2>
            <p className="section-subtitle">Interactive episodes exploring attention and presence</p>
            
            <div className="pollinator-episodes">
              <div className="episode-card">
                <div className="episode-icon">🐝</div>
                <h3>The Pollinator's Return</h3>
                <p>A Nevada desert story about restoration, attention, and what happens when you remove the pollinators.</p>
                <a href="https://pollinator.forteen.in" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                  Experience Episode 1 →
                </a>
              </div>
              
              <div className="episode-card">
                <div className="episode-icon">🌸</div>
               <h3>The Cultivated Heart</h3>
                <p>The cultivated heart knows when to speak and when silence serves better.</p>
                <a href="https://pollinator.forteen.in/episode2.html" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                  Experience Episode 2 →
                </a>
              </div>
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