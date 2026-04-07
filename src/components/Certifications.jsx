import { Award, ExternalLink } from 'lucide-react'

const Certifications = () => {
  const certifications = [
    {
      title: 'Open Source Foundations',
      issuer: 'IBM',
      date: 'Issued Mar 2026',
      credentialUrl: 'https://www.credly.com/badges/7cf558f8-7b94-4ab3-901e-213365468a48/linked_in_profile',
    },
    {
      title: 'Google Analytics Certification',
      issuer: 'Google',
      date: 'Issued Mar 2026',
      credentialUrl: 'https://skillshop.credential.net/fe46e41d-01f4-41d6-98dc-c8119940f73d#acc.qxAEdcKF',
    },
    {
      title: 'Generative AI Fundamentals',
      issuer: 'LinkedIn',
      date: 'Issued Mar 2026',
      credentialUrl: 'https://www.linkedin.com/learning/certificates/9506a637a1941af987b5a9a8d592a44fe0a02723e6e368cc4fba6861b42bf6cf',
    },
    {
      title: 'A2 English for Developers',
      issuer: 'freeCodeCamp',
      date: 'Issued Mar 2026',
      credentialUrl: 'https://www.freecodecamp.org/certification/justjas/a2-english-for-developers',
    },
  ]

  return (
    <section className="certifications" id="certifications">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">
          Professional certifications and credentials that validate my expertise.
        </p>
        
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <a 
              href={cert.credentialUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="certification-card" 
              key={index}
            >
              <div className="certification-icon">
                <Award size={32} />
              </div>
              <div className="certification-content">
                <h3>{cert.title}</h3>
                <p className="certification-issuer">{cert.issuer}</p>
                <p className="certification-date">{cert.date}</p>
              </div>
              <div className="certification-link">
                <ExternalLink size={18} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
