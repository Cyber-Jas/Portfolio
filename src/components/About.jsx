import { Award, Briefcase, Users, CheckCircle } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: <Briefcase size={24} />, value: '4+', label: 'Years Experience' },
    { icon: <Award size={24} />, value: '10+', label: 'Projects Completed' },
    { icon: <Users size={24} />, value: '3+', label: 'Happy Clients' },
  ]

  const highlights = [
    'Network Administration',
    'System Configuration',
    'Cybersecurity',
    'Technical Support',
    'Cloud Solutions',
    'IT Infrastructure',
  ]

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image">
            <div className="about-image-wrapper">
              <div className="about-image-inner">
                {stats.map((stat, index) => (
                  <div className="stat-box" key={index}>
                    <div className="stat-icon">{stat.icon}</div>
                    <div className="stat-content">
                      <h4>{stat.value}</h4>
                      <p>{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="about-content">
            <h2>
              About <span>Me</span>
            </h2>
            <p>
              I'm a dedicated IT Specialist with a passion for technology and problem-solving. 
              With extensive experience in network administration, system management, and 
              cybersecurity, I help organizations optimize their IT infrastructure and 
              achieve their technological goals.
            </p>
            <p>
              My approach combines technical expertise with strong communication skills to 
              deliver solutions that are both effective and user-friendly. I stay current 
              with the latest technologies and best practices to provide cutting-edge 
              solutions for my clients.
            </p>
            
            <div className="about-highlights">
              {highlights.map((item, index) => (
                <div className="highlight-item" key={index}>
                  <CheckCircle size={20} className="highlight-icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
