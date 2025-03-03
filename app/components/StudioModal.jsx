import React from "react";

export default function StudioModal({ studio }) {
  return (
    <div>
      {/* Open the modal */}
      <button
        className="btn btn-primary"
        onClick={() => document.getElementById("studio_modal").showModal()}
      >
        Book Now
      </button>

      <dialog id="studio_modal" className="modal">
        <div className="modal-box">
          {/* Studio Name & Type */}
          <h2 className="text-xl font-bold">{studio.Name}</h2>
          <p className="text-gray-600">{studio.Type}</p>

          {/* Location */}
          <p className="mt-2 text-gray-500">
            📍 {studio.Location.City}, {studio.Location.Area}
          </p>
          <p className="text-sm text-gray-400">{studio.Location.Address}</p>

          {/* Amenities */}
          <div className="mt-2">
            <h3 className="text-sm font-semibold">Amenities:</h3>
            <ul className="list-inside list-disc text-sm text-gray-600">
              {studio.Amenities.map((amenity, index) => (
                <li key={index}>{amenity}</li>
              ))}
            </ul>
          </div>

          {/* Price & Rating */}
          <p className="mt-2 font-bold text-blue-500">
            💰 {studio.PricePerHour} {studio.Currency}/hr
          </p>
          <p className="text-yellow-500">⭐ {studio.Rating} / 5</p>

          {/* Availability */}
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
            />

            <label className="mt-2 block text-sm">Email:</label>
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
            />

            <label className="mt-2 block text-sm">Select Date:</label>
            <input type="date" className="input input-bordered w-full" />

            <label className="mt-2 block text-sm">Select Time Slot:</label>
            <input type="time" className="input input-bordered w-full" />

            {/* Submit Button */}
            <button className="btn btn-primary mt-4 w-full">
              Confirm Booking
            </button>
          </div>
        </div>

        {/* Close Modal */}
        <form method="dialog" className="modal-backdrop">
          <button className="btn">Close</button>
        </form>
      </dialog>
    </div>
  );
}
