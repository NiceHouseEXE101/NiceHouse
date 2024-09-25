import React from 'react';
import { FaStar } from 'react-icons/fa';
import image from '../../assets/carousels/1.png';

const CustomerReviewsSection: React.FC = () => {
  const reviews = [
    {
      name: 'John Doe',
      review: '“Amazing service and great experience! Highly recommend to everyone!”',
      image: image,
      rating: 5,
    },
    {
      name: 'Jane Smith',
      review: '“A delightful experience with top-notch customer service. Would love to come back!”',
      image: image,
      rating: 4,
    },
    {
      name: 'Emily Davis',
      review: '“Truly remarkable and unforgettable experience. Excellent hospitality!”',
      image: image,
      rating: 5,
    },
  ];

  return (
    <div style={{
      padding: '50px 20px',
      background: 'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(240,240,240,1) 100%)',
      textAlign: 'center',
    }}>
      <h2 style={{
        fontSize: '36px',
        color: '#333',
        marginBottom: '40px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '1.5px',
      }}>
        Customer Reviews
      </h2>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '30px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {reviews.map((review, index) => (
          <div
            key={index}
            style={{
              flex: '1 1 300px',
              position: 'relative',
              boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)',
              borderRadius: '20px',
              overflow: 'hidden',
              background: '#fff',
              transition: 'transform 0.4s ease, box-shadow 0.4s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 12px 20px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.1)';
            }}
          >
            {/* Customer Image */}
            <img
              src={review.image}
              alt={review.name}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                transition: 'filter 0.4s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.filter = 'brightness(0.8)'}
              onMouseLeave={(e) => e.currentTarget.style.filter = 'brightness(1)'}
            />
            
            {/* Review Content */}
            <div style={{
              padding: '20px',
              textAlign: 'left',
            }}>
              {/* Name */}
              <h3 style={{
                fontSize: '22px',
                marginBottom: '10px',
                color: '#444',
                fontWeight: '600',
              }}>
                {review.name}
              </h3>

              {/* Rating */}
              <div style={{
                marginBottom: '15px',
                display: 'flex',
              }}>
                {Array(review.rating).fill(0).map((_, starIndex) => (
                  <FaStar key={starIndex} style={{ color: '#FFD700', marginRight: '5px' }} />
                ))}
              </div>

              {/* Review Text */}
              <p style={{
                fontSize: '16px',
                color: '#777',
                lineHeight: '1.6',
              }}>
                {review.review}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviewsSection;
