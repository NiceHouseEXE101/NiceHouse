import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaBed, FaMapMarkerAlt, FaRulerCombined, FaSwimmingPool } from 'react-icons/fa';

// Sample Data
const sampleData = {
  title: "Luxury Apartment in City Center",
  price: 1200,
  description: "A beautiful luxury apartment located in the heart of the city. Close to all major attractions and transport links.",
  mainImage: "https://via.placeholder.com/800x500.png?text=Main+Image",
  subImages: [
    "https://via.placeholder.com/100x100.png?text=Sub+Image+1",
    "https://via.placeholder.com/100x100.png?text=Sub+Image+2",
    "https://via.placeholder.com/100x100.png?text=Sub+Image+3",
    "https://via.placeholder.com/100x100.png?text=Sub+Image+4",
    "https://via.placeholder.com/100x100.png?text=Sub+Image+5",
        "https://via.placeholder.com/100x100.png?text=Sub+Image+6",
    "https://via.placeholder.com/100x100.png?text=Sub+Image+7",
        "https://via.placeholder.com/100x100.png?text=Sub+Image+8",
    "https://via.placeholder.com/100x100.png?text=Sub+Image+9",
  ],
  videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  bedrooms: 2,
  location: "City Center",
  area: "85m²",
  amenities: ["Gym", "Pool", "Parking"],
};

// Styling components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 1200px;
  margin: 60px auto 0;  /* Adds space between the header and content */
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  animation: ${fadeIn} 0.5s ease;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  position: relative;
`;

const MainImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 8px;
`;

const Video = styled.video`
  width: 100%;
  height: 500px;
  border-radius: 8px;
`;

// Sub-images are now horizontally scrollable
const SubImageGrid = styled.div`
  display: flex;
  overflow-x: auto;
  margin-top: 10px;
  padding-bottom: 10px;
  gap: 10px;
  scroll-snap-type: x mandatory;  /* Adds snapping effect */
  
  @media (max-width: 768px) {
    justify-content: center;
  }

  &::-webkit-scrollbar {
    height: 8px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: #cccccc;
    border-radius: 8px;
  }
`;

const SubImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const DetailsSection = styled.div`
  flex: 1.5;
  margin-left: 40px;
  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 20px;
  }
`;

const Title = styled.h1`
  font-family: 'Brice Regular SemiExpanded', sans-serif;
  color: #343a40;
  font-size: 36px;
  margin-bottom: 10px;
`;

const Price = styled.p`
  font-size: 28px;
  font-weight: bold;
  color: #38bff;
  margin-top: 10px;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #343a40;
  margin-top: 20px;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;

  p {
    font-size: 18px;
    margin-left: 10px;
    color: #343a40;
  }

  svg {
    color: #38bff;
    font-size: 24px;
  }
`;

const fetchApartmentDetails = async (id: number) => {
  // Replace with actual API request or sample data
  return sampleData;
};

const ApartmentDetail: React.FC<{ id: number }> = ({ id }) => {
  const [apartment, setApartment] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isVideo, setIsVideo] = useState<boolean>(false);

  useEffect(() => {
    // Fetch apartment details from API or sample data
    fetchApartmentDetails(id).then((data) => {
      setApartment(data);
      setSelectedImage(data.mainImage);
    });
  }, [id]);

  if (!apartment) return <p>Loading...</p>;

  return (
    <Container>
      <MainContent>
        {/* Main Image or Video */}
        <ImageSection>
          {isVideo ? (
            <Video controls>
              <source src={apartment.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </Video>
          ) : (
            <MainImage src={selectedImage || apartment.mainImage} alt={apartment.title} />
          )}

          {/* Scrollable Sub-Images */}
          <SubImageGrid>
            <SubImage
              src={apartment.mainImage}
              alt="Main Image"
              onClick={() => {
                setSelectedImage(apartment.mainImage);
                setIsVideo(false);
              }}
            />
            <SubImage
              src="https://via.placeholder.com/100x100.png?text=Video"
              alt="Video"
              onClick={() => setIsVideo(true)}
            />
            {apartment.subImages.slice(0, 3).map((image: string, index: number) => (
              <SubImage
                key={index}
                src={image}
                alt={`Sub Image ${index + 1}`}
                onClick={() => {
                  setSelectedImage(image);
                  setIsVideo(false);
                }}
              />
            ))}
          </SubImageGrid>
        </ImageSection>

        {/* Details Section */}
        <DetailsSection>
          <Title>{apartment.title}</Title>
          <Price>${apartment.price}/month</Price>
          <Description>{apartment.description}</Description>

          {/* Apartment Details with Icons */}
          <InfoRow>
            <FaBed />
            <p>{apartment.bedrooms} Bedrooms</p>
          </InfoRow>
          <InfoRow>
            <FaMapMarkerAlt />
            <p>{apartment.location}</p>
          </InfoRow>
          <InfoRow>
            <FaRulerCombined />
            <p>{apartment.area}</p>
          </InfoRow>
          <InfoRow>
            <FaSwimmingPool />
            <p>Amenities: {apartment.amenities.join(", ")}</p>
          </InfoRow>
        </DetailsSection>
      </MainContent>
    </Container>
  );
};

export default ApartmentDetail;
