import React from 'react';
import { BsTiktok } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa'; // Facebook icon
import { SiZalo } from 'react-icons/si'; // Zalo icon

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContainer}>
        {/* Left Section: Company Info */}
        <div style={styles.companyInfoSection}>
          <div style={styles.logoContainer}>
            <img src="/src/assets/logo/logo-notext-white.png" alt="NICEHOUSE Logo" style={styles.logo} />
            <h3 style={styles.logoText}>NICEHOUSE</h3>
          </div>
          <p style={styles.companyDescription}>
            Hoạt động trong lĩnh vực cung cấp dịch vụ lưu trú giá cả hợp lí, tiện nghi, hiện đại. NiceHouse đặt mục tiêu trở thành nhà cung cấp được tin dùng hàng đầu tại Quy Nhơn.
          </p>
          <div style={styles.socialIcons}>
            <a href="https://www.facebook.com/NiceHouse7979" target="_blank" rel="noopener noreferrer">
              <FaFacebookF style={styles.icon} />
            </a>
            <a href="https://www.tiktok.com/@nice.house30?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer">
              <BsTiktok style={styles.icon} />
            </a>
          </div>
        </div>

        {/* Middle Section: Contact Info */}
        <div style={styles.contactSection}>
          <h4 style={styles.contactHeader}>NiceHouse</h4>
          <p style={styles.contactDetails}>Trường Đại học FPT Quy Nhơn.</p>
          <p style={styles.contactDetails}>Khu Đô thị mới An Phú Thịnh - Nhơn Bình, Quy Nhơn, Bình Định</p>
          <p style={styles.contactDetails}>0123456789</p>
          <p style={styles.contactDetails}>
            Email: <a href="mailto:nicehouse7979@gmail.com" style={styles.emailLink}>nicehouse7979@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#222',
    padding: '2rem 1rem',
    color: '#fff',
  },
  footerContainer: {
    display: 'flex',
    justifyContent: 'space-around', // Changed to 'space-around' for better spacing
    alignItems: 'center',
    flexWrap: 'wrap' as 'wrap',
  },
  companyInfoSection: {
    flex: '1',
    maxWidth: '300px',
    textAlign: 'left' as 'left', // Aligns text to the left
    marginBottom: '1rem',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '1rem',
  },
  logo: {
    width: '50px',
    height: 'auto',
  },
  logoText: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'Brice Regular SemiExpanded',
    marginTop: '20px'
  },
  companyDescription: {
    fontSize: '14px',
    lineHeight: '1.5',
    marginBottom: '1rem',
  },
  socialIcons: {
    display: 'flex',
    gap: '1rem',
  },
  icon: {
    fontSize: '30px',
    color: '#fff',
    transition: 'color 0.3s ease',
    cursor: 'pointer',
    border: '2px solid', // Set border style
    borderRadius: '50%', // Makes the border circular
    padding: '5px',      // Space between the icon and border
  },
  facebookIcon: {
    borderColor: '#3b5998', // Facebook color
  },
  tiktokIcon: {
    borderColor: '#69C9D0', // TikTok color
  },
  contactSection: {
    flex: '1',
    maxWidth: '300px',
    textAlign: 'left' as 'left', // Aligns text to the left
    marginBottom: '1rem',
  },
  contactHeader: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '0.75rem',
  },
  contactDetails: {
    fontSize: '14px',
    marginBottom: '0.5rem',
  },
  emailLink: {
    color: '#d6c600',
    textDecoration: 'none',
  },
};

export default Footer;
