import { Github, Linkedin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">Portfolio</div>
          
          <p className="footer-text">
            © {currentYear} IT Specialist. All rights reserved.
          </p>
          
          <div className="footer-social">
            <a href="https://github.com/Cyber-Jas" target="_blank" rel="noopener noreferrer" className="social-link">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/jasper-tibor-9b04203b5" target="_blank" rel="noopener noreferrer" className="social-link">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
