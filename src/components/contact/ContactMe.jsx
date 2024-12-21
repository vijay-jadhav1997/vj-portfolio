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
      <form className="form-wrapper" name='contactUS' netlify>
        <div className="input-box">
          <label htmlFor="name">Name:</label> <br />
          <FaUser className='icon' />
          <input id="name" name="name" type="text" placeholder="Raghav Das" />
        </div>
        
        <div className="input-box">
          <label htmlFor="email">Email:</label> <br />
          <MdEmail className='icon' />
          <input id="email" name="email" type="email" placeholder="raghuvardas24@gmail.com" />
        </div>
        
        <div className="input-box">
          <label htmlFor="message">Message:</label> <br />
          <textarea id="message" name="message" type="text" ></textarea>
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