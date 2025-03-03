import React, { useState, useEffect } from "react";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Retrieve bookings from localStorage
    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(storedBookings);
  }, []);

  return (
    <main>
      <div className="container mx-auto p-4">
        <h1 className="mb-4 text-2xl font-bold">Booking List</h1>

        {/* Check if there are no bookings */}
        {bookings.length === 0 ? (
          <p>No bookings available.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>User Info</th>
                  <th>Studio Type</th>
                  <th>Location</th>
                  <th>Time & Date</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking, index) => (
                  <tr key={index}>
                    <td>
                      <p>Name: {booking.name}</p>
                      <p>Email: {booking.email}</p>
                    </td>
                    <td>{booking.sName}</td>
                    <td>{`${booking.city}, ${booking.area}`}</td>
                    <td>
                      <p>Date: {booking.date}</p>
                      <p>
                        Time:{" "}
                        {booking.time > 12
                          ? `${booking.time - 12} PM`
                          : `${booking.time} AM`}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
};

export default MyBookings;
