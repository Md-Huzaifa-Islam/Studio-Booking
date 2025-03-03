import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function StudioModal({ studio, id }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const handleConfirmBooking = () => {
    const dateInMilliseconds = date.getTime();
    const timeInMilliseconds = time ? time.getTime() : null;

    const bookingData = {
      name,
      email,
      date: dateInMilliseconds,
      time: timeInMilliseconds,
      studio: id,
    };

    console.log("Booking Data:", bookingData);

    setTime(new Date());
    setDate(new Date());

    // Close the modal after confirming
    const modal = document.getElementById(`studio-modal-${id}`);
    modal.close();
  };

  return (
    <div>
      {/* Book Now Button */}
      <button
        className="btn btn-primary"
        onClick={() =>
          document.getElementById(`studio-modal-${id}`).showModal()
        }
      >
        Book Now
      </button>

      {/* Modal */}
      <dialog id={`studio-modal-${id}`} className="modal mx-auto w-3xl">
        <div className="modal-box w-full max-w-none">
          {/* Close button */}
          <form method="dialog">
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute top-2 right-2"
              onClick={() =>
                document.getElementById(`studio-modal-${id}`).close()
              }
            >
              ✕
            </button>
          </form>

          {/* Studio Information */}
          <h2 className="text-xl font-bold">{studio.Name}</h2>
          <p className="text-gray-600">{studio.Type}</p>
          <p className="mt-2 text-gray-500">
            📍 {studio.Location.City}, {studio.Location.Area}
          </p>
          <p className="text-sm text-gray-400">{studio.Location.Address}</p>

          <div className="mt-2">
            <h3 className="text-sm font-semibold">Amenities:</h3>
            <ul className="list-inside list-disc text-sm text-gray-600">
              {studio.Amenities.map((amenity, index) => (
                <li key={index}>{amenity}</li>
              ))}
            </ul>
          </div>

          <p className="mt-2 font-bold text-blue-500">
            💰 {studio.PricePerHour} {studio.Currency}/hr
          </p>
          <p className="text-yellow-500">⭐ {studio.Rating} / 5</p>

          <p className="mt-2 text-green-500">
            🕒 Available: {studio.Availability.Open} -{" "}
            {studio.Availability.Close}
          </p>

          {/* Booking Form */}
          <div className="mt-4">
            <h3 className="text-lg font-bold">Book a Slot</h3>

            <label className="mt-2 block text-sm">Name:</label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label className="mt-2 block text-sm">Email:</label>
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="mt-2 block text-sm">Select Date:</label>
            <DatePicker
              className="input input-bordered w-full"
              selected={date}
              onChange={(d) => setDate(d)}
            />

            <label className="mt-2 block text-sm">Select Time Slot:</label>
            <DatePicker
              className="input input-bordered w-full"
              selected={time}
              onChange={(t) => setTime(t)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={60}
              timeCaption="Time"
              dateFormat="h:mm aa"
            />

            <button
              type="button"
              className="btn btn-primary mt-4 w-full"
              onClick={handleConfirmBooking}
            >
              Confirm Booking
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
