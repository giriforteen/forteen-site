import Head from 'next/head';
import Layout from '../components/Layout';

export default function MindLabs() {
  return (
    <Layout>
      <Head>
        <title>Mind Labs - Understanding Human Behavior Through Story</title>
        <meta name="description" content="Premium micro-learning series exploring behavioral psychology through storytelling, metaphor, and reverse psychology. The Radiolab of professional development." />
      </Head>

      {/* Hero Section */}
      <section className="mindlabs-hero">
        <div className="container">
          <div className="mindlabs-hero-badge">🧠 FORTEEN MIND LABS</div>
          <h1>Understanding Behavior Through Story</h1>
          <p className="mindlabs-hero-subtitle">
            Premium micro-learning that explores human behavioral patterns through indirect storytelling, 
            metaphor, dark humor, and reverse psychology. The truths we discover ourselves stick harder.
          </p>
          <div className="mindlabs-quote">
            <p>"The current was always there. You just learned to call it home."</p>
          </div>
        </div>
      </section>

      {/* Featured Episode */}
      <section className="featured-episode">
        <div className="container">
          <div className="episode-feature-card">
            <div className="episode-label">EPISODE 1 • NOW STREAMING</div>
            <h2>The Slot Machine Heart</h2>
            <p className="episode-subtitle">Internal Codename: THE UNDERTOW</p>
            
            <p className="episode-intro">
              Why do we stay in relationships that hurt us? Why do inconsistent rewards hook us harder 
              than consistent ones? What makes emotional turbulence feel like home?
            </p>

            <p className="episode-story">
              Through the metaphor of slot machines, undertows, and intermittent reinforcement, 
              this episode explores attachment patterns and why we're drawn to chaos. 
              No psychology jargon. Just a story that makes you think.
            </p>

            <div className="episode-details">
              <div className="detail-item">
                <span className="detail-label">Duration</span>
                <span className="detail-value">12 minutes</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Format</span>
                <span className="detail-value">Interactive Story</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Access</span>
                <span className="detail-value">Free</span>
              </div>
            </div>

            <a 
              href="https://mindlabs.forteen.in/episodes/episode-1-full.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary btn-large"
            >
              Start Episode 1 →
            </a>
          </div>
        </div>
      </section>

      {/* The Approach */}
      <section className="mindlabs-approach">
        <div className="container">
          <h2>The Mind Labs Approach</h2>
          <p className="approach-tagline">
            Rather than directly addressing psychological concepts, Mind Labs masks insights within 
            compelling narratives that allow audiences to discover truths for themselves.
          </p>

          <div className="approach-methods">
            <div className="method-card">
              <div className="method-icon">🎭</div>
              <h3>Trojan Horse Content</h3>
              <p>Entertains and intrigues first, transforms second. The insight sneaks in while you're absorbed in the story.</p>
            </div>

            <div className="method-card">
              <div className="method-icon">💡</div>
              <h3>Indirect Illumination</h3>
              <p>Never tells, always shows. You draw your own conclusions, making them more powerful and personal.</p>
            </div>

            <div className="method-card">
              <div className="method-icon">😏</div>
              <h3>Dark Humor</h3>
              <p>Sugar that helps the medicine go down. Uncomfortable truths become digestible through wit.</p>
            </div>

            <div className="method-card">
              <div className="method-icon">🔄</div>
              <h3>Reverse Psychology</h3>
              <p>Let the audience argue themselves into the truth. The best insights are the ones we resist first.</p>
            </div>

            <div className="method-card">
              <div className="method-icon">🎨</div>
              <h3>Metaphor-First</h3>
              <p>Create safe distance to see clearly. Slot machines, undertows, currents—metaphors that make patterns visible.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Explore */}
      <section className="mindlabs-topics">
        <div className="container">
          <h2>What You'll Explore</h2>
          
          <div className="topics-grid">
            <div className="topic-card">
              <h3>Attachment Patterns</h3>
              <p>Why we're drawn to familiar chaos. How intermittent reinforcement hooks harder than consistency. The undertow that feels like home.</p>
              <span className="topic-status">✓ Episode 1</span>
            </div>

            <div className="topic-card upcoming">
              <h3>Cognitive Biases</h3>
              <p>The mental shortcuts that trip us up. Confirmation bias, sunk cost fallacy, anchoring—told through stories, not textbooks.</p>
              <span className="topic-status">Coming Soon</span>
            </div>

            <div className="topic-card upcoming">
              <h3>Decision-Making</h3>
              <p>Why smart people make dumb choices. The gap between knowing and doing. The science of self-sabotage.</p>
              <span className="topic-status">Coming Soon</span>
            </div>

            <div className="topic-card upcoming">
              <h3>Social Dynamics</h3>
              <p>Groupthink, social proof, and the invisible rules we follow. How we conform without noticing.</p>
              <span className="topic-status">Coming Soon</span>
            </div>

            <div className="topic-card upcoming">
              <h3>Behavioral Economics</h3>
              <p>Loss aversion, mental accounting, and why we're irrational with money. Economics meets psychology.</p>
              <span className="topic-status">Coming Soon</span>
            </div>

            <div className="topic-card upcoming">
              <h3>Habit Formation</h3>
              <p>Why some behaviors stick and others don't. The architecture of addiction and the science of change.</p>
              <span className="topic-status">Coming Soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="mindlabs-principles">
        <div className="container">
          <h2>What Makes Mind Labs Different</h2>

          <div className="principles-content">
            <div className="principle-item">
              <h3>Story Over Lecture</h3>
              <p>
                No PowerPoint slides. No bullet points. Just compelling narratives that make you think. 
                You remember stories. You forget facts.
              </p>
            </div>

            <div className="principle-item">
              <h3>Discovery Over Teaching</h3>
              <p>
                We don't tell you what to think. We create conditions for you to discover insights yourself. 
                The "aha" moment is yours, not ours.
              </p>
            </div>

            <div className="principle-item">
              <h3>Micro Over Marathon</h3>
              <p>
                12-15 minute episodes. One concept at a time. Deep enough to matter, short enough to finish. 
                Respect for your time is built into the format.
              </p>
            </div>

            <div className="principle-item">
              <h3>Applicable Over Academic</h3>
              <p>
                Every episode connects to real life. Professional relationships. Personal decisions. 
                Workplace dynamics. Theory only matters if it changes behavior.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="mindlabs-audience">
        <div className="container">
          <h2>Who Mind Labs Is For</h2>

          <div className="audience-grid">
            <div className="audience-card">
              <h3>The Curious Professional</h3>
              <p>
                You're good at your job but fascinated by why people do what they do. 
                You want to understand patterns, not just execute tasks.
              </p>
            </div>

            <div className="audience-card">
              <h3>The Reflective Leader</h3>
              <p>
                You manage people and want to understand what drives them. 
                Better insights into behavior make you a better coach.
              </p>
            </div>

            <div className="audience-card">
              <h3>The Self-Aware Individual</h3>
              <p>
                You're working on yourself. Understanding behavioral patterns helps you 
                recognize your own. Awareness is the first step to change.
              </p>
            </div>

            <div className="audience-card">
              <h3>The Story Lover</h3>
              <p>
                You don't want another dry psychology course. You want compelling narratives 
                that happen to teach you something profound.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mindlabs-cta">
        <div className="container">
          <h2>Start with The Slot Machine Heart</h2>
          <p>
            No signup. No commitment. Just 12 minutes and a story that might change 
            how you see relationships, patterns, and yourself.
          </p>
          <a 
            href="https://mindlabs.forteen.in/episodes/episode-1-full.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary btn-large"
          >
            Begin Episode 1 →
          </a>
        </div>
      </section>

    </Layout>
  );
}