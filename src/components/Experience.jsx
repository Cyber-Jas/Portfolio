const Experience = () => {
  const experiences = [
    {
      date: '2026',
      title: 'On the Job Trainee',
      company: 'Thy Web Development Inc.',
      description: 'Gaining hands-on experience in web development, collaborating with senior developers, and contributing to real-world projects.',
    },
    {
      date: '2022 - 2025',
      title: 'BSIT Student',
      company: 'State University of Northern Negros',
      description: 'Pursuing Bachelor of Science in Information Technology, developing strong foundations in programming, networking, and IT systems.',
    },
  ]

  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          My professional journey in the IT industry, showcasing growth and 
          expertise across various roles.
        </p>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-date">{exp.date}</span>
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
