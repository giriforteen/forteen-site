import Head from 'next/head';
import Layout from '../components/Layout';

export default function Studios() {
  return (
    <Layout>
      <Head>
        <title>Forteen Studios - Interactive Executive Presence Training</title>
        <meta name="description" content="Master executive presence, active listening, and workplace communication through interactive scenarios. The Apple TV of professional development." />
      </Head>

      {/* Hero Section */}
      <section className="studios-hero">
        <div className="container">
          <div className="studios-hero-badge">🎬 FORTEEN STUDIOS</div>
          <h1>Where Professionals Become Unforgettable</h1>
          <p className="studios-hero-subtitle">
            Interactive training reimagined. Beautiful scenarios. Instant feedback. 
            The skills that separate good professionals from unforgettable ones.
          </p>
        </div>
      </section>

      {/* Featured Series: UNFORGETTABLE */}
      <section className="featured-series">
        <div className="container">
          <div className="series-header">
            <h2>Featured Series: UNFORGETTABLE</h2>
            <p className="series-tagline">Master executive presence through real-world VIP encounters</p>
          </div>

          <div className="episodes-grid">
            {/* Episode 1 - Pilot */}
            <div className="episode-card">
              <div className="episode-number">EPISODE 1</div>
              <h3>The Spotlight Test</h3>
              <p className="episode-type">Pilot Episode</p>
              <p className="episode-description">
                You're backstage with Deepika Padukone, chatting with Sundar Pichai, 
                managing a TV crisis, and meeting Ratan Tata. How do you show up?
              </p>
              <div className="episode-meta">
                <span>⏱️ 7 minutes</span>
                <span>🎯 4 scenarios</span>
                <span>⭐ Free</span>
              </div>
              <a 
                href="https://studios.forteen.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Play Episode 1 →
              </a>
            </div>

            {/* Episode 2 */}
            <div className="episode-card featured">
              <div className="episode-number">EPISODE 2</div>
              <h3>Before You Speak</h3>
              <p className="episode-type">Latest Episode</p>
              <p className="episode-description">
                Master first impressions and body language. The seven seconds that determine 
                how people perceive you—before you say a word.
              </p>
              <div className="episode-meta">
                <span>⏱️ 15 minutes</span>
                <span>🎯 6 scenarios</span>
                <span>⭐ Free</span>
              </div>
              <a 
                href="https://studios.forteen.in/unforgettable_episode2_before_you_speak.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                ▶ Stream Now
              </a>
            </div>

            {/* Coming Soon */}
            <div className="episode-card coming-soon">
              <div className="episode-number">EPISODES 3-6</div>
              <h3>Releasing Shortly</h3>
              <p className="episode-type">Executive Essentials</p>
              <ul className="episode-list">
                <li>Command Without Speaking (Body Language)</li>
                <li>Wardrobe Intelligence (Style Context)</li>
                <li>The Voice of Authority (Vocal Presence)</li>
                <li>Meeting Mastery (Client Engagement)</li>
              </ul>
              <a 
                href="mailto:girish@forteen.in?subject=UNFORGETTABLE Season 1 Waitlist" 
                className="btn btn-secondary"
              >
                Join Waitlist
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sprint Products */}
      <section className="sprint-products">
        <div className="container">
          <h2>Master Specific Skills in 60-Second Sprints</h2>
          <p className="section-intro">
            Quick, focused practice sessions that build real workplace communication skills. 
            No lectures. No fluff. Just practice that sticks.
          </p>

          <div className="sprints-grid">
            {/* Listen Sprint */}
            <div className="sprint-card">
              <div className="sprint-icon">👂</div>
              <h3>Listen Sprint</h3>
              <div className="sprint-status available">✓ Available Now</div>
              <p>
                Master active listening in 60-second scenarios. Practice paraphrasing, 
                reflecting emotions, and reading non-verbal cues in real workplace situations.
              </p>
              <div className="sprint-features">
                <span>⚡ 60-second scenarios</span>
                <span>🎯 Instant feedback</span>
                <span>📊 Track progress</span>
              </div>
              <a 
                href="https://giriforteen.github.io/listen-sprint" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Launch Listen Sprint →
              </a>
            </div>

            {/* Voice Sprint */}
            <div className="sprint-card">
              <div className="sprint-icon">🎤</div>
              <h3>Voice Sprint</h3>
              <div className="sprint-status available">✓ Available Now</div>
              <p>
                Learn to speak up in meetings without over-apologizing. Practice asking 
                for clarity, contributing ideas, and managing upward communication.
              </p>
              <div className="sprint-features">
                <span>⚡ 90-second scenarios</span>
                <span>🎯 4-dimension feedback</span>
                <span>📊 Confidence tracking</span>
              </div>
              <a 
                href="https://giriforteen.github.io/voice-sprint-mvp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Launch Voice Sprint →
              </a>
            </div>

            {/* Presence Sprint */}
            <div className="sprint-card">
              <div className="sprint-icon">⭐</div>
              <h3>Presence Sprint</h3>
              <div className="sprint-status beta">Beta Testing</div>
              <p>
                Build executive presence in 60-second exercises. Command attention in 
                presentations, client meetings, and high-stakes conversations.
              </p>
              <div className="sprint-features">
                <span>⚡ 60-second scenarios</span>
                <span>🎯 Presence scoring</span>
                <span>📊 Leadership metrics</span>
              </div>
              <a 
                href="https://giriforteen.github.io/presence-sprint-teasers/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Try Beta Version →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Master */}
      <section className="studios-benefits">
        <div className="container">
          <h2>What You'll Master at Forteen Studios</h2>
          
          <div className="benefits-showcase">
            <div className="benefit-item">
              <div className="benefit-icon">🎯</div>
              <h3>Executive Presence</h3>
              <p>Walk into any room and command attention before you speak. Master the body language, tone, and gravitas of confident leaders.</p>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">👂</div>
              <h3>Active Listening</h3>
              <p>Build trust and influence through listening. Master paraphrasing, emotional reflection, and non-verbal reading in client conversations.</p>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">🎤</div>
              <h3>Speaking Up</h3>
              <p>Contribute with confidence in meetings. Ask clarifying questions, challenge ideas respectfully, and manage upward without apologizing.</p>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">💼</div>
              <h3>Professional Polish</h3>
              <p>Master the small details that separate good from unforgettable: wardrobe intelligence, vocal presence, and situational awareness.</p>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">🎬</div>
              <h3>Real-World Practice</h3>
              <p>No passive videos. Interactive scenarios with instant feedback. Practice in 60 seconds what others take hours to learn.</p>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">📈</div>
              <h3>Measurable Growth</h3>
              <p>Track your progress across scenarios. See your scores improve. Build streaks. Earn badges. Growth you can actually measure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Studios Works */}
      <section className="studios-approach">
        <div className="container">
          <div className="approach-content">
            <h2>Why Studios Works</h2>
            <p className="approach-intro">
              Traditional training has a 23% completion rate. Forteen Studios has 85%+. 
              Here's why people actually finish what they start:
            </p>

            <div className="approach-grid">
              <div className="approach-item">
                <h3>Interactive, Not Passive</h3>
                <p>You don't watch training—you practice it. Every scenario requires decisions, not just attention.</p>
              </div>

              <div className="approach-item">
                <h3>Instant Feedback</h3>
                <p>See exactly what worked and what didn't. Learn from each choice immediately, not days later.</p>
              </div>

              <div className="approach-item">
                <h3>Respects Your Time</h3>
                <p>60-second sprints fit into coffee breaks. 15-minute episodes fit into lunch. No 4-hour webinars.</p>
              </div>

              <div className="approach-item">
                <h3>Built for You</h3>
                <p>Real IT standups. Actual fintech client calls. Your industry, your scenarios, your challenges.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="studios-cta">
        <div className="container">
          <h2>Start Your First Episode Free</h2>
          <p>No signup. No credit card. Just you and 7 minutes of real practice.</p>
          <div className="cta-buttons">
            <a 
              href="https://studios.forteen.in/unforgettable_episode2_before_you_speak.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary btn-large"
            >
              ▶ Stream Episode 2: Before You Speak
            </a>
            <a 
              href="https://studios.forteen.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary btn-large"
            >
              Or Start with the Pilot
            </a>
          </div>
        </div>
      </section>

    </Layout>
  );
}