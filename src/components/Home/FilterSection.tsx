import React from "react";
import { Box, Button, Typography, Select, MenuItem, FormControl, InputLabel, Slider } from "@mui/material";
import { keyframes } from "@mui/system";

// Keyframe animation for fade-in-up
const fadeInUpKeyframes = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50%);
  }
  100% {
    opacity: 1;
    transform: translateY(-50%);
  }
`;

const styles = {
  container: {
    position: "absolute",
    bottom: "-30px",
    left: "50%",
    transform: "translateX(-50%)",
    padding: "20px 30px",
    backgroundColor: "#fff", // Background trắng
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
    zIndex: 3,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "18px",
    maxWidth: "600px",
    width: "85%",
    textAlign: "center",
    backdropFilter: "blur(6px)",
    animation: `${fadeInUpKeyframes} 1.5s ease`,
  },
  formControl: {
    minWidth: 150,
    width: "100%",
    "& .MuiInputBase-root": {
      height: "42px",
      backgroundColor: "transparent",
      color: "#007bff", // Text màu xanh
      border: "1px solid rgba(0, 123, 255, 0.5)",
      borderRadius: "10px",
      padding: "5px 10px",
    },
    "& .MuiInputLabel-root": {
      color: "#007bff", // Màu chữ xanh cho label
      fontSize: "1rem",
    },
    "& .MuiSelect-icon": {
      color: "#007bff", // Icon select màu xanh
    },
  },
  sliderBox: {
    width: "100%",
    color: "#007bff", // Màu xanh cho slider text
  },
  slider: {
    color: "#007bff", // Màu slider chính
    "& .MuiSlider-thumb": {
      backgroundColor: "#007bff", // Màu trỏ slider
    },
    "& .MuiSlider-track": {
      backgroundColor: "#007bff", // Màu thanh slider
    },
    "& .MuiSlider-rail": {
      backgroundColor: "#38b6ff", // Màu rail slider khi hover
    },
  },
  filterButton: {
    backgroundColor: "#007bff", // Nút màu xanh
    color: "#fff", // Text trắng
    fontWeight: "bold",
    padding: "10px 24px",
    fontSize: "1rem",
    borderRadius: "8px",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#38b6ff", // Màu hover xanh nhạt
    },
    boxShadow: "0 8px 15px rgba(0, 123, 255, 0.3)", // Shadow của nút
  },
  heading: {
    color: "#007bff", // Tiêu đề màu xanh
    fontWeight: "700",
    fontSize: "26px",
    marginBottom: "10px",
    textTransform: "uppercase",
    letterSpacing: "1.2px",
  },
};

const FilterSection = () => {
  const [location, setLocation] = React.useState("");
  const [rooms, setRooms] = React.useState("");
  const [priceRange, setPriceRange] = React.useState([100, 1000]);

  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
  };

  return (
    <Box sx={styles.container}>
      <Typography variant="h4" sx={styles.heading}>
        Filter Your Stay
      </Typography>

      {/* Location Select */}
      <FormControl sx={styles.formControl}>
        <InputLabel id="location-label">Location</InputLabel>
        <Select
          labelId="location-label"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <MenuItem value={"paris"}>Paris</MenuItem>
          <MenuItem value={"new-york"}>New York</MenuItem>
          <MenuItem value={"tokyo"}>Tokyo</MenuItem>
          <MenuItem value={"london"}>London</MenuItem>
        </Select>
      </FormControl>

      {/* Rooms Select */}
      <FormControl sx={styles.formControl}>
        <InputLabel id="rooms-label">Rooms</InputLabel>
        <Select
          labelId="rooms-label"
          value={rooms}
          onChange={(e) => setRooms(e.target.value)}
        >
          <MenuItem value={"1"}>1 Room</MenuItem>
          <MenuItem value={"2"}>2 Rooms</MenuItem>
          <MenuItem value={"3"}>3 Rooms</MenuItem>
          <MenuItem value={"4"}>4 Rooms</MenuItem>
          <MenuItem value={"5"}>5+ Rooms</MenuItem>
        </Select>
      </FormControl>

      {/* Price Range Slider */}
      <Box sx={styles.sliderBox}>
        <Typography gutterBottom color="#007bff" fontSize="1rem">
          Price Range
        </Typography>
        <Slider
          value={priceRange}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          min={50}
          max={2000}
          sx={styles.slider}
        />
      </Box>

      {/* Filter Button */}
      <Button sx={styles.filterButton} variant="contained">
        Apply Filter
      </Button>
    </Box>
  );
};

export default FilterSection;
