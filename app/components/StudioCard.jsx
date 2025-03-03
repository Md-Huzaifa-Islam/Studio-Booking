import React from "react";
import { Link } from "react-router";
import StudioModal from "./StudioModal";

export default function StudioCard({ studio }) {
  return (
    <div className="card bg-base-100 w-96 shadow-md">
      <div className="card-body">
        {/* Studio Name & Type */}
        <h2 className="card-title">{studio.Name}</h2>
        <p className="text-gray-600">{studio.Type}</p>

        {/* Location */}
        <p className="text-gray-500">
          📍 {studio.Location.City}, {studio.Location.Area}
        </p>
        <p className="text-sm text-gray-400">{studio.Location.Address}</p>

        {/* Amenities List */}
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

        {/* Booking Button */}
        <div className="card-actions justify-end">
          <StudioModal studio={studio} id={studio.Id} />
        </div>
      </div>
    </div>
  );
}
