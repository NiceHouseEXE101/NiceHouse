// components/Rooms.tsx
import { Card, CardContent, CardMedia, Grid, Typography, Button } from '@mui/material';

const rooms = [
  {
    name: 'Luxury Suite',
    image: '/path-to-room1.jpg',
    description: 'A spacious suite with a beautiful sea view.',
    price: '$300/night',
  },
  {
    name: 'Deluxe Room',
    image: '/path-to-room2.jpg',
    description: 'Comfort and luxury combined.',
    price: '$200/night',
  },
  // Add more rooms here
];

const Rooms = () => {
  return (
    <div style={{ padding: '40px' }}>
      <Typography variant="h4" style={{ marginBottom: '30px', textAlign: 'center' }}>
        Our Rooms
      </Typography>
      <Grid container spacing={4}>
        {rooms.map((room, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardMedia component="img" alt={room.name} height="200" image={room.image} />
              <CardContent>
                <Typography variant="h6">{room.name}</Typography>
                <Typography>{room.description}</Typography>
                <Typography style={{ fontWeight: 'bold' }}>{room.price}</Typography>
                <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Rooms;
