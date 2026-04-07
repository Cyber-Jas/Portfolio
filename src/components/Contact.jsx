import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactMethods = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'jasper.yahoo.co@gmail.com',
      href: 'mailto:jasper.yahoo.co@gmail.com',
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '0915 324 8036',
      href: 'tel:+639153248036',
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Cadiz City',
      href: null,
    },
  ]

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>
              Let's Work <span>Together</span>
            </h2>
            <p>
              Have a project in mind or need IT consultation? I'd love to hear from you. 
              Feel free to reach out through any of the following channels.
            </p>
            
            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <div className="contact-method" key={index}>
                  <div className="contact-method-icon">{method.icon}</div>
                  <div className="contact-method-content">
                    <h4>{method.label}</h4>
                    {method.href ? (
                      <a href={method.href}>{method.value}</a>
                    ) : (
                      <p>{method.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Inquiry"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
              />
            </div>
            
            <button type="submit" className="btn btn-primary">
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
