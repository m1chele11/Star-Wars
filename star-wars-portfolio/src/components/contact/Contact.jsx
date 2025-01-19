import './contact.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id='contact'>
    <div className="contact-section">
      <h2>Send a Transmission</h2>
      <p>Reach out to me through the Force or a quick message!</p>

      <form className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Transmission</button>
      </form>

      <div className="contact-icons">
        <a href="mailto:michelebarrantes@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="contact-icon" />
        </a>
        <a href="https://www.linkedin.com/in/michele-barrantes-455206255/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="contact-icon" />
        </a>
        <a href="https://github.com/m1chele11" target="_blank" rel="noopener noreferrer">
          <FaGithub className="contact-icon" />
        </a>
      </div>
    </div>
    </section>
  );
};

export default Contact;
