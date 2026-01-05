import React from 'react';
import Card from 'react-bootstrap/Card';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card style={{ width: '18rem', margin: '15px', borderRadius: '15px', border: 'none', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}>
      <Card.Img 
        variant="top" 
        src={imageUrl} 
        style={{ height: '350px', objectFit: 'cover', borderRadius: '15px 15px 0 0' }} 
      />
      <Card.Body style={{ textAlign: 'center' }}>
        <Card.Title style={{ fontWeight: 'bold', color: '#2c3e50' }}>{name}</Card.Title>
        <Card.Text>
          <div style={{ fontSize: '0.9rem', color: '#555' }}>
            <strong>Team:</strong> {team} <br />
            <strong>Nationality:</strong> {nationality} <br />
            <strong>Number:</strong> {jerseyNumber} <br />
            <strong>Age:</strong> {age}
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.defaultProps = {
  name: "Unknown Player",
  team: "Club Name",
  nationality: "Country",
  jerseyNumber: 0,
  age: "N/A",
  imageUrl: "https://via.placeholder.com/150"
};


export default Player;