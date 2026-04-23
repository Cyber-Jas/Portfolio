import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import emailjs from '@emailjs/browser'

// Initialize EmailJS (you'll need to set this up)
emailjs.init('uiKBflwh3cL6IR0gm')

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await emailjs.send('service_w452pnd', 'template_wtlbcwd', {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'jasper.yahoo.co@gmail.com',
      })
      alert('Thank you! Your message has been sent successfully.')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Email error:', error)
      alert('Failed to send message. Please try again.')
    } finally {
      setIsLoading(false)
    }
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
            
            <button type="submit" className="btn btn-primary" disabled={isLoading}>
              <Send size={18} />
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
