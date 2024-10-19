
// export default ApartmentList;
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';
import { FaSortAmountDown, FaFilter, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// Container for the entire layout
const Container = styled.div`
  display: flex;
  padding: 20px;
  max-width: 1200px;
  margin: 100px auto 40px auto;  /* Ensure space at the top to avoid overlapping with the header */
  font-family: 'Brice Regular SemiExpanded', Helvetica, sans-serif;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`;

// Sidebar (Filter Section)
const Sidebar = styled.div`
  flex: 1;
  background-color: #f8f9fa;
  padding: 20px;
  margin-right: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 100px;  /* Adjusted for better stickiness behavior */
  height: fit-content; /* Ensure the sidebar resizes with content */
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

// Main content and sort area
const MainContent = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
`;

// Sort Bar styling
const SortBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

// Fade-in animation for the apartment list
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

const ApartmentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  animation: ${fadeIn} 0.5s ease forwards;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

// Pagination styled for better appearance
const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  align-items: center;

  button {
    background-color: #38b6ff;
    border: none;
    color: white;
    padding: 10px 15px;
    margin: 0 5px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }

    &:disabled {
      background-color: #cccccc;
      cursor: not-allowed;
    }
  }

  span {
    margin: 0 10px;
    font-size: 16px;
    color: #343a40;
  }
`;

const FilterSection = styled.div`
  margin-bottom: 20px;
`;

// Filter label with icon
const FilterLabel = styled.label`
  font-size: 16px;
  color: #343a40;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  font-family: 'Brice Regular SemiExpanded', sans-serif;
`;

// Filter input fields and dropdowns
const FilterInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  margin-bottom: 10px;
  font-family: Helvetica, sans-serif;
`;

const FilterSelect = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  margin-bottom: 10px;
  font-family: Helvetica, sans-serif;
`;

const FilterButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #343a40;
  color: white;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  font-family: Helvetica, sans-serif;
  font-size: 16px;

  &:hover {
    background-color: #FF8500;
  }
`;

// Apartment card style with smooth hover effect
const Card = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${fadeIn} 0.5s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

const ApartmentName = styled.h3`
  font-size: 20px;
  color: #343a40;
  margin-bottom: 8px;
  font-weight: 700;
  font-Family: Brice Regular SemiExpanded;
  margin-Top: 20px;
`;

const ApartmentPrice = styled.p`
  font-size: 18px;
  color: #343a40;
`;


// Main component
const ApartmentList: React.FC = () => {
  const [apartments, setApartments] = useState<any[]>([]);
  const [filters, setFilters] = useState({ price: '', bedrooms: '', area: '' });
  const [sort, setSort] = useState('price');
  const [currentPage, setCurrentPage] = useState(1);
  const apartmentsPerPage = 9;

  useEffect(() => {
    // Fetch all apartments from the API
    const fetchAllApartments = async () => {
      try {
        const response = await axios.get('https://nicehouse-api.azurewebsites.net/api/hotel/all');
        setApartments(response.data);
      } catch (error) {
        console.error('Error fetching apartments:', error);
      }
    };
    fetchAllApartments();
  }, []);

  // Sorting logic
  // useEffect(() => {
  //   let sortedApartments = [...sampleApartments];
  //   if (sort === 'price') {
  //     sortedApartments.sort((a, b) => parseInt(a.price.replace(/,/g, '')) - parseInt(b.price.replace(/,/g, '')));
  //   } else if (sort === 'price-desc') {
  //     sortedApartments.sort((a, b) => parseInt(b.price.replace(/,/g, '')) - parseInt(a.price.replace(/,/g, '')));
  //   } else if (sort === 'newest') {
  //     sortedApartments.reverse();
  //   }
  //   setApartments(sortedApartments);
  // }, [sort]);

  // Pagination logic
  const indexOfLastApartment = currentPage * apartmentsPerPage;
  const indexOfFirstApartment = indexOfLastApartment - apartmentsPerPage;
  const currentApartments = apartments.slice(indexOfFirstApartment, indexOfLastApartment);

  return (
    <Container>
      <Sidebar>
        {/* Filter Section */}
        <FilterSection>
          <FilterLabel>
            <FaFilter style={{ marginRight: '8px' }} />
            Số phòng ngủ
          </FilterLabel>
          <FilterSelect value={filters.bedrooms} onChange={(e) => setFilters({ ...filters, bedrooms: e.target.value })}>
            <option value="">Bất kỳ</option>
            <option value="1">1 phòng ngủ</option>
            <option value="2">2 phòng ngủ</option>
            <option value="3">3 phòng ngủ</option>
          </FilterSelect>
        </FilterSection>

        <FilterSection>
          <FilterLabel>
            <FaFilter style={{ marginRight: '8px' }} />
            Giá tối đa
          </FilterLabel>
          <FilterInput
            type="number"
            value={filters.price}
            onChange={(e) => setFilters({ ...filters, price: e.target.value })}
            placeholder="Nhập giá tối đa"
          />
        </FilterSection>

        <FilterSection>
          <FilterLabel>
            <FaFilter style={{ marginRight: '8px' }} />
            Khu vực
          </FilterLabel>
          <FilterSelect value={filters.area} onChange={(e) => setFilters({ ...filters, area: e.target.value })}>
            <option value="">Bất kỳ</option>
            <option value="Downtown">Downtown</option>
            <option value="Uptown">Uptown</option>
            <option value="Suburb">Suburb</option>
          </FilterSelect>
        </FilterSection>

        <FilterButton>Áp dụng bộ lọc</FilterButton>
      </Sidebar>

      <MainContent>
        <SortBar style={{
          display: 'flex',
          alignItems: 'center',
          padding: '10px',
          backgroundColor: '#f8f9fa',
          borderRadius: '10px',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#343a40'
          }}>
            <FaSortAmountDown style={{ marginRight: '8px', color: '#495057' }} />
            Sắp xếp theo:
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            style={{
              marginLeft: '12px',
              padding: '8px 12px',
              borderRadius: '7px',
              border: '1px solid #ced4da',
              backgroundColor: '#fff',
              color: '#495057',
              fontSize: '14px',
              cursor: 'pointer'
            }}
          >
            <option value="price">Giá tăng dần</option>
            <option value="price-desc">Giá giảm dần</option>
            <option value="newest">Mới nhất</option>
          </select>
        </SortBar>


        {/* Apartment List */}
        <ApartmentGrid>
          {currentApartments.map((apartment) => (
            <Card key={apartment.hotelId}>
              <Image src={apartment.images[0]?.path ?? ''} alt={apartment.name} />
              <ApartmentName>{apartment.name}</ApartmentName>
              <ApartmentPrice>{apartment.rent} VND</ApartmentPrice>
              <p>{apartment.rooms} phòng ngủ</p>
              <p>{apartment.address}</p>
            </Card>
          ))}
        </ApartmentGrid>

        {/* Pagination */}
        <Pagination>
          {/* <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}> */}

          <button
            onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}
            style={{
              backgroundColor: '#343a40',
              color: '#ffffff', // White text for contrast
              border: 'none',   // Remove default border
              padding: '10px 15px', // Add some padding
              borderRadius: '4px', // Rounded corners
              cursor: currentPage === 1 ? 'not-allowed' : 'pointer', // Change cursor based on disabled state
              opacity: currentPage === 1 ? 0.6 : 1 // Slightly transparent when disabled
            }}

            onMouseEnter={(e) => {
              if (indexOfFirstApartment < apartments.length) {
                e.currentTarget.style.backgroundColor = '#FF8500'; // Darker shade on hover
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#343a40'; // Reset to original color
            }}
          >
            <FaArrowLeft />
          </button>
          <span>Trang {currentPage}</span>
          {/* <button onClick={() => setCurrentPage(currentPage + 1)} disabled={indexOfLastApartment >= apartments.length}> */}

          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={indexOfLastApartment >= apartments.length}
            style={{
              backgroundColor: '#343a40', // Dark background
              color: '#ffffff', // White text for contrast
              border: 'none', // Remove default border
              padding: '10px 15px', // Add padding for better touch target
              borderRadius: '4px', // Rounded corners
              cursor: indexOfLastApartment >= apartments.length ? 'not-allowed' : 'pointer', // Change cursor based on disabled state
              opacity: indexOfLastApartment >= apartments.length ? 0.6 : 1, // Slightly transparent when disabled
              transition: 'background-color 0.3s, transform 0.2s', // Smooth transitions for hover effects
            }}
            onMouseEnter={(e) => {
              if (indexOfLastApartment < apartments.length) {
                e.currentTarget.style.backgroundColor = '#FF8500'; // Darker shade on hover
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#343a40'; // Reset to original color
            }}
          >
            <FaArrowRight />
          </button>
        </Pagination>
      </MainContent>
    </Container>
  );
};

export default ApartmentList;
