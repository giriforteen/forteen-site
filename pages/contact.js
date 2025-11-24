import Head from 'next/head';
import Layout from '../components/Layout';

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact Forteen - Let's Talk</title>
        <meta name="description" content="Tell us about your goals. We'll come back with a focused plan for your team." />
      </Head>

      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>Contact</h1>
          <h2 className="page-hero-subtitle">Partner With Us</h2>
          <p className="page-hero-text">
            Tell us about your goals. We'll come back with a focused plan for your team.
          </p>
        </div>
      </section>

      {/* Google Form Section */}
      <section className="content-section">
        <div className="container">
          <div className="cta-card">
            <h2>Get In Touch</h2>
            <p>Fill out our inquiry form and we'll get back to you within 24 hours</p>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSewgv7aAK6anOcKXUlVm5YmkdX_JEiidxOQtY6w4f5EO-sDsw/viewform" 
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              📋 Open Inquiry Form
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="content-section alt-bg">
        <div className="container">
          <div className="contact-info-grid">
            <div className="contact-info-card">
              <div className="contact-icon">📧</div>
              <h3>Email</h3>
              <p><a href="mailto:girish@forteen.in">girish@forteen.in</a></p>
            </div>
            
            <div className="contact-info-card">
              <div className="contact-icon">📍</div>
              <h3>Location</h3>
              <p>Bengaluru, India</p>
            </div>
            
            <div className="contact-info-card">
              <div className="contact-icon">💼</div>
              <h3>Social</h3>
              <p>
                <a href="https://www.linkedin.com/company/forteen-consulting" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                {' · '}
                <a href="https://www.instagram.com/forteen.consulting" target="_blank" rel="noopener noreferrer">Instagram</a>
              </p>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}