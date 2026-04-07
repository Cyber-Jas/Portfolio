import { ExternalLink } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'AImmersive Mobile Interface Simulation',
      description: 'An immersive mobile interface simulation powered by AI, delivering interactive and intelligent user experiences.',
      image: '📱',
      tech: ['AI', 'Mobile', 'Simulation', 'Interactive'],
      liveUrl: 'https://neo3.onrender.com',
    },
    {
      title: 'AutoVision: Interactive Automotive Brand Showroom',
      description: 'An interactive virtual showroom experience for automotive brands, featuring stunning visuals and engaging user interactions.',
      image: '🚗',
      tech: ['3D', 'Interactive', 'Showroom', 'Web'],
      liveUrl: 'https://autovision.onrender.com/',
    },
  ]

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A showcase of key projects and implementations that demonstrate my technical 
          expertise and problem-solving abilities.
        </p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                {project.image}
                <div className="project-overlay">
                  <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span className="tech-tag" key={techIndex}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
