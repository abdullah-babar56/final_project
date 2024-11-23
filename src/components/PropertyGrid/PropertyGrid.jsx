import React from "react";
import "./PropertyGrid.css";

const PropertyGrid = () => {
  const properties = [
    {
      location: "Rome, Italy",
      host: "Stay with Sergio",
      date: "Dec 19 – 24",
      price: "$86 night",
      rating: 4.86,
      image:
        "https://a0.muscache.com/im/pictures/miso/Hosting-53562546/original/65f14cb8-c8a9-4b6e-b731-876acaba9c79.jpeg",
    },
    {
      location: "Kuta Utara, Indonesia",
      host: "Stay with Jojo",
      date: "Jan 17 – 22",
      price: "$47 night",
      rating: 4.99,
      image:
        "https://a0.muscache.com/im/pictures/miso/Hosting-53580458/original/07d41354-4b6f-4ef1-8cb7-f31e3fa8de5e.jpeg",
    },
    // Add more properties as needed
  ];

  return (
    <div className="property-grid">
      {properties.map((property, index) => (
        <div key={index} className="property-card">
          <img src={property.image} alt={property.location} className="property-image" />
          <div className="property-info">
            <div className="property-location">{property.location}</div>
            <div className="property-host">{property.host}</div>
            <div className="property-date">{property.date}</div>
            <div className="property-footer">
              <div className="property-price">{property.price}</div>
              <div className="property-rating">⭐ {property.rating}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyGrid;
