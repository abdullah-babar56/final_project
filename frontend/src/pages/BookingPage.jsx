import React, { useState } from "react";
import { useParams } from "react-router-dom";

const BookingPage = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    fetch(`http://localhost:5000/api/bookings`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, listingId: id }),
    })
      .then((res) => res.json())
      .then((data) => alert(data.message));
  };

  return (
    <div>
      <h2>Booking Form</h2>
      <input
        type="date"
        name="checkIn"
        value={formData.checkIn}
        onChange={handleChange}
      />
      <input
        type="date"
        name="checkOut"
        value={formData.checkOut}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Confirm Booking</button>
    </div>
  );
};

export default BookingPage;
