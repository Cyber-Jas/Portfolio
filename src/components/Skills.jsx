import { Server, Shield, Network, Cloud, Database, Settings } from 'lucide-react'

const Skills = () => {
  const skills = [
    {
      icon: <Network size={28} />,
      title: 'Network Administration',
      description: 'Designing, implementing, and maintaining network infrastructure for optimal performance and security.',
      tags: ['TCP/IP', 'DNS', 'DHCP', 'VPN', 'Firewall'],
    },
    {
      icon: <Server size={28} />,
      title: 'System Administration',
      description: 'Managing Windows and Linux servers, ensuring uptime, and implementing automation solutions.',
      tags: ['Windows Server', 'Linux', 'Active Directory', 'PowerShell'],
    },
    {
      icon: <Shield size={28} />,
      title: 'Cybersecurity',
      description: 'Implementing security measures, conducting vulnerability assessments, and ensuring compliance.',
      tags: ['Security Audits', 'Penetration Testing', 'SIEM', 'Compliance'],
    },
    {
      icon: <Cloud size={28} />,
      title: 'Cloud Solutions',
      description: 'Deploying and managing cloud infrastructure on AWS, Azure, and Google Cloud platforms.',
      tags: ['AWS', 'Azure', 'GCP', 'Cloud Migration'],
    },
    {
      icon: <Database size={28} />,
      title: 'Database Management',
      description: 'Administering database systems, optimizing performance, and ensuring data integrity.',
      tags: ['SQL Server', 'MySQL', 'PostgreSQL', 'MongoDB'],
    },
    {
      icon: <Settings size={28} />,
      title: 'IT Support',
      description: 'Providing technical support, troubleshooting issues, and training end-users effectively.',
      tags: ['Help Desk', 'Troubleshooting', 'Documentation', 'Training'],
    },
  ]

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">
          A comprehensive set of technical skills developed through years of experience 
          in the IT industry.
        </p>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
              <div className="skill-tags">
                {skill.tags.map((tag, tagIndex) => (
                  <span className="skill-tag" key={tagIndex}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
