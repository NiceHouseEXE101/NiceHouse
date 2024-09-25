import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from '../../assets/logo/logo-white.png';

const Footer = () => {
  return (
    <footer style={styles.footerContainer}>
      <div style={styles.leftColumn}>
        <h3 style={styles.contactHeader}>Contact Us</h3>
        <form style={styles.contactForm}>
          <input type="text" placeholder="Your Name" style={styles.inputField} />
          <input type="email" placeholder="Email Address" style={styles.inputField} />
          <button style={styles.subscribeButton}>Subscribe</button>
        </form>
      </div>
      <div style={styles.rightColumn}>
        <div style={styles.logoSection}>
          <img src={logo} alt="NICEHOUSE Logo" style={styles.logo} />
          <h2 style={styles.companyName}>NICEHOUSE</h2>
        </div>
        <p style={styles.companyInfo}>
          Your go-to platform for comfortable living. Contact us for support or subscribe for updates!
        </p>
        <div style={styles.socialSection}>
          <h3 style={styles.socialHeader}>Follow Us</h3>
          <div style={styles.socialIcons}>
            <FaFacebookF style={styles.icon} />
            <FaTwitter style={styles.icon} />
            <FaInstagram style={styles.icon} />
          </div>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#343a40',
    color: '#fff',
    padding: '2rem 4rem',
    flexWrap: 'wrap' as 'wrap',
    alignItems: 'center',
  },
  leftColumn: {
    flex: '1',
    maxWidth: '300px',
    margin: '1rem',
    textAlign: 'left' as 'left',
  },
  rightColumn: {
    flex: '2',
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '1rem',
    textAlign: 'center' as 'center',
  },
  logoSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1rem',
  },
  logo: {
    width: '100px',
  },
  companyName: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#007bff',
  },
  companyInfo: {
    fontSize: '1rem',
    lineHeight: '1.5',
    color: '#ccc',
    marginBottom: '1rem',
  },
  contactHeader: {
    fontSize: '1.2rem',
    marginBottom: '1rem',
    color: '#007bff',
  },
  contactForm: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    gap: '0.75rem',
  },
  inputField: {
    padding: '0.75rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%',
  },
  subscribeButton: {
    padding: '0.75rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  socialSection: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
  },
  socialHeader: {
    fontSize: '1.2rem',
    marginBottom: '0.75rem',
    color: '#007bff',
  },
  socialIcons: {
    display: 'flex',
    gap: '1rem',
  },
  icon: {
    fontSize: '1.5rem',
    color: '#fff',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  },
  '@media (hover: hover)': {
    icon: {
      ':hover': {
        transform: 'scale(1.2)',
        color: '#007bff',
      },
    },
  },
};

export default Footer;
