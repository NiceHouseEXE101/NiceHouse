import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.column}>
        <img
          src="https://wp.ditsolution.net/royella-multipurpose/wp-content/uploads/2023/11/logo-1.png"
          alt="Logo"
          style={styles.logo}
        />
        <h3 style={styles.heading}>Contact Info</h3>
        <div style={styles.contactItem}>
          <i className="flaticon-call-answer" style={styles.icon}></i>
          <h2 style={styles.contactText}>+980 (1234) 567 220</h2>
        </div>
        <div style={styles.contactItem}>
          <i className="flaticon-mail" style={styles.icon}></i>
          <h2 style={styles.contactText}>example@yahoo.com</h2>
        </div>
        <div style={styles.contactItem}>
          <i className="flaticon-map" style={styles.icon}></i>
          <h2 style={styles.contactText}>
            102/B New Elephant <br />
            Rd Dhaka - 1212
          </h2>
        </div>
      </div>

      <div style={styles.column}>
        <h3 style={styles.heading}>USEFUL LINKS</h3>
        <ul style={styles.linkList}>
          <li style={styles.linkItem}>
            <a href="#" style={styles.link}>
              Home
            </a>
          </li>
          <li style={styles.linkItem}>
            <a href="#" style={styles.link}>
              About
            </a>
          </li>
          <li style={styles.linkItem}>
            <a href="#" style={styles.link}>
              Services
            </a>
          </li>
          <li style={styles.linkItem}>
            <a href="#" style={styles.link}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

// Inline styles object
const styles = {
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    backgroundColor: '#f8f9fa',
  },
  column: {
    flex: 1,
    padding: '10px',
  },
  logo: {
    width: '184px',
    height: '62px',
  },
  heading: {
    fontSize: '18px',
    marginBottom: '15px',
    fontWeight: 'bold',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  icon: {
    fontSize: '20px',
    marginRight: '10px',
  },
  contactText: {
    fontSize: '16px',
  },
  linkList: {
    listStyleType: 'none',
    padding: 0,
  },
  linkItem: {
    marginBottom: '10px',
  },
  link: {
    textDecoration: 'none',
    color: '#007bff',
  },
};

export default Footer;
