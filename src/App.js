import React from "react";
import "./App.css";

function App() {
  const hotels = [
    {
      name: "The Grand Royal",
      location: "Mumbai, India",
      price: "₹5,500/night",
      image: "https://source.unsplash.com/featured/?hotel",
    },
    {
      name: "Ocean Breeze Resort",
      location: "Goa, India",
      price: "₹4,200/night",
      image: "https://source.unsplash.com/featured/?resort",
    },
    {
      name: "Mountain View Stay",
      location: "Manali, India",
      price: "₹3,800/night",
      image: "https://source.unsplash.com/featured/?mountain,hotel",
    },
  ];

  return (
    <div className="app">
      <header className="header">
        <h1>Hotel Booking</h1>
      </header>

      <section className="hero">
        <h2>Find Your Perfect Stay</h2>
        <p>Explore top hotels and resorts across India</p>
      </section>

      <section className="hotels">
        {hotels.map((hotel, index) => (
          <div className="hotel-card" key={index}>
            <img src={hotel.image} alt={hotel.name} />
            <div className="hotel-info">
              <h3>{hotel.name}</h3>
              <p>{hotel.location}</p>
              <p className="price">{hotel.price}</p>
              <button>Book Now</button>
            </div>
          </div>
        ))}
      </section>

      <footer className="footer">
        © 2025 HotelStay. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
