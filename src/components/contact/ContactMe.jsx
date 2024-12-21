import contact from '/src/assets/images/contact-me.svg'
import { FaUser, FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './ContactMe.css'

function ContactMe() {
  return (
    <section id="contact" className='contact'>
      <h3 className='contact-heading'>Contact Me</h3>
      <div className="contact-img-wrapper">
        <img src={contact} alt="Contact" />
      </div>
      <form className="form-wrapper" name='contact' method='POST' data-netlify='true' netlify-honeypot='bot-field'>
        <input type="hidden" name='form-name' value='contact' />
        <div className="input-box">
          <label htmlFor="name">Name:</label> <br />
          <FaUser className='icon' />
          <input id="name" name="name" type="text" placeholder="Raghav Das" required />
        </div>
        
        <div className="input-box">
          <label htmlFor="email">Email:</label> <br />
          <MdEmail className='icon' />
          <input id="email" name="email" type="email" placeholder="raghuvardas24@gmail.com" required />
        </div>
        
        <div className="input-box">
          <label htmlFor="message">Message:</label> <br />
          <textarea id="message" name="message" type="text" placeholder='Write your message here...'  required></textarea>
        </div>

        <button className="submit-btn">
          <FaTelegramPlane className='icon' />
          Send Message
        </button>
      </form>
    </section>
  )
}

export default ContactMe