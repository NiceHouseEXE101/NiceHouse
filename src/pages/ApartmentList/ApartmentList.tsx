// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import styled from 'styled-components';

// const Container = styled.div`
//   display: flex;
//   padding: 20px;
//   max-width: 1200px;
//   margin: 0 auto;
//   @media (max-width: 768px) {
//     flex-direction: column;
//     padding: 10px;
//   }
// `;

// const Sidebar = styled.div`
//   flex: 1;
//   background-color: #f8f9fa;
//   padding: 20px;
//   margin-right: 20px;
//   border-radius: 8px;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
//   @media (max-width: 768px) {
//     margin-right: 0;
//     margin-bottom: 20px;
//   }
// `;

// const MainContent = styled.div`
//   flex: 3;
//   display: flex;
//   flex-direction: column;
// `;

// const SortBar = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 20px;
// `;

// const ApartmentGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 20px;
//   @media (max-width: 992px) {
//     grid-template-columns: repeat(2, 1fr);
//   }
//   @media (max-width: 768px) {
//     grid-template-columns: repeat(1, 1fr);
//   }
// `;

// const Pagination = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: 20px;
// `;

// const FilterSection = styled.div`
//   margin-bottom: 20px;
// `;

// const FilterLabel = styled.label`
//   font-size: 16px;
//   color: #343a40;
//   margin-bottom: 10px;
//   display: block;
//   font-family: 'Helvetica', sans-serif;
// `;

// const FilterInput = styled.input`
//   width: 100%;
//   padding: 10px;
//   border: 1px solid #ced4da;
//   border-radius: 4px;
//   margin-bottom: 10px;
//   font-family: 'Helvetica', sans-serif;
// `;

// const FilterSelect = styled.select`
//   width: 100%;
//   padding: 10px;
//   border: 1px solid #ced4da;
//   border-radius: 4px;
//   margin-bottom: 10px;
//   font-family: 'Helvetica', sans-serif;
// `;

// const Card = styled.div`
//   background-color: #ffffff;
//   border-radius: 8px;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
//   padding: 20px;
//   text-align: center;
//   transition: transform 0.3s ease;

//   &:hover {
//     transform: scale(1.05);
//   }
// `;

// const Image = styled.img`
//   width: 100%;
//   height: 200px;
//   object-fit: cover;
//   border-radius: 8px;
// `;

// const ApartmentName = styled.h3`
//   font-size: 20px;
//   color: #007bff;
// `;

// const ApartmentPrice = styled.p`
//   font-size: 18px;
//   color: #343a40;
// `;

// const ApartmentList: React.FC = () => {
//   const [apartments, setApartments] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [filters, setFilters] = useState({ price: '', bedrooms: '', area: '' });
//   const [filterOptions, setFilterOptions] = useState({ areas: [], bedrooms: [] });
//   const [sort, setSort] = useState('price');
//   const [currentPage, setCurrentPage] = useState(1);
//   const apartmentsPerPage = 9;

//   // Fetch filter options from API
//   useEffect(() => {
//     const fetchFilterOptions = async () => {
//       try {
//         const response = await axios.get('https://your-api-url.com/filters'); // API to get filter options
//         setFilterOptions({
//           areas: response.data.areas,
//           bedrooms: response.data.bedrooms,
//         });
//       } catch (err) {
//         console.error('Error fetching filter options:', err);
//       }
//     };
//     fetchFilterOptions();
//   }, []);

//   // Fetch apartments with filters, sorting, and pagination
//   useEffect(() => {
//     const loadApartments = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get('https://your-api-url.com/apartments', {
//           params: {
//             page: currentPage,
//             limit: apartmentsPerPage,
//             sort,
//             ...filters,
//           },
//         });
//         setApartments(response.data.apartments); // Assuming the API response contains a "apartments" field
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to load apartments');
//         setLoading(false);
//       }
//     };
//     loadApartments();
//   }, [filters, sort, currentPage]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <Container>
//       <Sidebar>
//         {/* Filters */}
//         <FilterSection>
//           <FilterLabel>Bedrooms</FilterLabel>
//           <FilterSelect
//             value={filters.bedrooms}
//             onChange={(e) => setFilters({ ...filters, bedrooms: e.target.value })}
//           >
//             <option value="">Any</option>
//             {filterOptions.bedrooms.map((bedroom: string, index: number) => (
//               <option key={index} value={bedroom}>
//                 {bedroom} Bedrooms
//               </option>
//             ))}
//           </FilterSelect>
//         </FilterSection>
//         <FilterSection>
//           <FilterLabel>Max Price</FilterLabel>
//           <FilterInput
//             type="number"
//             value={filters.price}
//             onChange={(e) => setFilters({ ...filters, price: e.target.value })}
//             placeholder="Enter max price"
//           />
//         </FilterSection>
//         <FilterSection>
//           <FilterLabel>Area</FilterLabel>
//           <FilterSelect
//             value={filters.area}
//             onChange={(e) => setFilters({ ...filters, area: e.target.value })}
//           >
//             <option value="">Any</option>
//             {filterOptions.areas.map((area: string, index: number) => (
//               <option key={index} value={area}>
//                 {area}
//               </option>
//             ))}
//           </FilterSelect>
//         </FilterSection>
//       </Sidebar>

//       <MainContent>
//         {/* Sort */}
//         <SortBar>
//           <FilterLabel>Sort by</FilterLabel>
//           <FilterSelect value={sort} onChange={(e) => setSort(e.target.value)}>
//             <option value="price">Price: Low to High</option>
//             <option value="price-desc">Price: High to Low</option>
//             <option value="newest">Newest Listings</option>
//           </FilterSelect>
//         </SortBar>

//         {/* Apartment List */}
//         <ApartmentGrid>
//           {apartments.map((apartment) => (
//             <Card key={apartment.id}>
//               <Image src={apartment.image} alt={apartment.name} />
//               <ApartmentName>{apartment.name}</ApartmentName>
//               <ApartmentPrice>${apartment.price}/month</ApartmentPrice>
//               <p>{apartment.bedrooms} Bedrooms</p>
//               <p>{apartment.area}</p>
//             </Card>
//           ))}
//         </ApartmentGrid>

//         {/* Pagination */}
//         <Pagination>
//           <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
//             Previous
//           </button>
//           <span> Page {currentPage} </span>
//           <button
//             onClick={() => setCurrentPage(currentPage + 1)}
//             disabled={apartments.length < apartmentsPerPage}
//           >
//             Next
//           </button>
//         </Pagination>
//       </MainContent>
//     </Container>
//   );
// };

// export default ApartmentList;
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaSortAmountDown, FaFilter, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import image from '../../assets/carousels/3.png';

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
  background-color: #38b6ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: Helvetica, sans-serif;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
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
  color: #38b6ff;
  margin-bottom: 8px;
`;

const ApartmentPrice = styled.p`
  font-size: 18px;
  color: #343a40;
`;

// Sample data for apartments
const sampleApartments = [
  { id: 1, name: 'Apartment A', price: '5,500,000', bedrooms: 2, area: 'Downtown', image: image },
  { id: 2, name: 'Apartment B', price: '7,500,000', bedrooms: 3, area: 'Uptown', image: 'https://via.placeholder.com/400x300' },
  { id: 3, name: 'Apartment C', price: '4,500,000', bedrooms: 1, area: 'Suburb', image: 'https://via.placeholder.com/400x300' },
   { id: 4, name: 'Apartment A', price: '5,500,000', bedrooms: 2, area: 'Downtown', image: image },
  { id: 5, name: 'Apartment B', price: '7,500,000', bedrooms: 3, area: 'Uptown', image: 'https://via.placeholder.com/400x300' },
  { id: 6, name: 'Apartment C', price: '4,500,000', bedrooms: 1, area: 'Suburb', image: 'https://via.placeholder.com/400x300' },
   { id: 7, name: 'Apartment A', price: '5,500,000', bedrooms: 2, area: 'Downtown', image: image },
  { id: 8, name: 'Apartment B', price: '7,500,000', bedrooms: 3, area: 'Uptown', image: 'https://via.placeholder.com/400x300' },
  { id: 9, name: 'Apartment C', price: '4,500,000', bedrooms: 1, area: 'Suburb', image: 'https://via.placeholder.com/400x300' },
   { id: 10, name: 'Apartment A', price: '5,500,000', bedrooms: 2, area: 'Downtown', image: image },
  { id: 11, name: 'Apartment B', price: '7,500,000', bedrooms: 3, area: 'Uptown', image: 'https://via.placeholder.com/400x300' },
  { id: 12, name: 'Apartment C', price: '4,500,000', bedrooms: 1, area: 'Suburb', image: 'https://via.placeholder.com/400x300' },
   { id: 13, name: 'Apartment A', price: '5,500,000', bedrooms: 2, area: 'Downtown', image: image },
  { id: 14, name: 'Apartment B', price: '7,500,000', bedrooms: 3, area: 'Uptown', image: 'https://via.placeholder.com/400x300' },
  { id: 15, name: 'Apartment C', price: '4,500,000', bedrooms: 1, area: 'Suburb', image: 'https://via.placeholder.com/400x300' },
  // Add more sample apartments here
];

// Main component
const ApartmentList: React.FC = () => {
  const [apartments, setApartments] = useState(sampleApartments);
  const [filters, setFilters] = useState({ price: '', bedrooms: '', area: '' });
  const [sort, setSort] = useState('price');
  const [currentPage, setCurrentPage] = useState(1);
  const apartmentsPerPage = 9;

  // Sorting logic
  useEffect(() => {
    let sortedApartments = [...sampleApartments];
    if (sort === 'price') {
      sortedApartments.sort((a, b) => parseInt(a.price.replace(/,/g, '')) - parseInt(b.price.replace(/,/g, '')));
    } else if (sort === 'price-desc') {
      sortedApartments.sort((a, b) => parseInt(b.price.replace(/,/g, '')) - parseInt(a.price.replace(/,/g, '')));
    } else if (sort === 'newest') {
      sortedApartments.reverse();
    }
    setApartments(sortedApartments);
  }, [sort]);

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
        <SortBar>
          <div>
            <FaSortAmountDown style={{ marginRight: '8px' }} />
            Sắp xếp theo:
          </div>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="price">Giá tăng dần</option>
            <option value="price-desc">Giá giảm dần</option>
            <option value="newest">Mới nhất</option>
          </select>
        </SortBar>

        {/* Apartment List */}
        <ApartmentGrid>
          {currentApartments.map((apartment) => (
            <Card key={apartment.id}>
              <Image src={apartment.image} alt={apartment.name} />
              <ApartmentName>{apartment.name}</ApartmentName>
              <ApartmentPrice>{apartment.price} VND</ApartmentPrice>
              <p>{apartment.bedrooms} phòng ngủ</p>
              <p>{apartment.area}</p>
            </Card>
          ))}
        </ApartmentGrid>

        {/* Pagination */}
        <Pagination>
          <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
            <FaArrowLeft />
          </button>
          <span>Trang {currentPage}</span>
          <button onClick={() => setCurrentPage(currentPage + 1)} disabled={indexOfLastApartment >= apartments.length}>
            <FaArrowRight />
          </button>
        </Pagination>
      </MainContent>
    </Container>
  );
};

export default ApartmentList;
