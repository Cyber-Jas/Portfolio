import { ArrowRight, Github, Linkedin } from 'lucide-react'

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-bg"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="tagline">Welcome to my portfolio</p>
            <h1>
              Hi, I'm an <span>IT Specialist</span>
            </h1>
            <p>
              Passionate about technology and solving complex problems. 
              I specialize in network administration, system management, 
              cloud solutions, and providing technical solutions that drive business success.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                Get in Touch
                <ArrowRight size={18} />
              </a>
              <a href="#projects" className="btn btn-secondary">
                View My Work
              </a>
            </div>
            <div className="social-links">
              <a href="https://github.com/Cyber-Jas" target="_blank" rel="noopener noreferrer" className="social-link">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/jasper-tibor-9b04203b5" target="_blank" rel="noopener noreferrer" className="social-link">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-avatar">
              <div className="hero-avatar-inner">
                <img src="/profile.png" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
