import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router";

export default function StudioPage() {
  const { id } = useParams();

  // Fetch studio details from the mock API
  const fetchStudios = async () => {
    const { data } = await axios.get(
      "https://gist.githubusercontent.com/rash3dul-islam/88e1565bea2dd1ff9180ff733617a565/raw/684afa147a8e726d7a5e4fdeb390f2d48b35051d/studio-mock-api,json",
    );

    const dataSet = data.Studios;
    const desiredStudio = dataSet.filter((p) => p.Id == id);

    return desiredStudio[0];
  };

  // Use React Query to fetch data
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["studios", id],
    queryFn: fetchStudios,
  });

  // Handling loading and error states
  if (isPending) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="text-center text-xl text-red-500">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className="studio-details mx-auto max-w-4xl p-6">
      {data && (
        <>
          <div className="flex flex-col items-center justify-between md:flex-row">
            {/* Studio Name and Type */}
            <div>
              <h2 className="text-3xl font-bold">{data.Name}</h2>
              <p className="text-lg text-gray-600">{data.Type}</p>
            </div>
            {/* Rating */}
            <div className="mt-2 flex items-center space-x-2 md:mt-0">
              <span className="text-xl text-yellow-500">
                ⭐ {data.Rating} / 5
              </span>
            </div>
          </div>

          {/* Studio Location */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Location:</h3>
            <p className="text-gray-500">
              📍 {data.Location.City}, {data.Location.Area}
            </p>
            <p className="text-sm text-gray-400">{data.Location.Address}</p>
          </div>

          {/* Studio Description */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Description:</h3>
            <p className="text-gray-700">{data.Description}</p>
          </div>

          {/* Amenities List */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Amenities:</h3>
            <ul className="list-inside list-disc text-sm text-gray-600">
              {data.Amenities.map((amenity, index) => (
                <li key={index}>{amenity}</li>
              ))}
            </ul>
          </div>

          {/* Pricing and Availability */}
          <div className="mt-4">
            <p className="font-bold text-blue-500">
              💰 {data.PricePerHour} {data.Currency}/hr
            </p>
            <p className="mt-1 text-green-500">
              🕒 Available: {data.Availability.Open} - {data.Availability.Close}
            </p>
          </div>

          {/* Images */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold">Studio Images:</h3>
            <div className="mt-2 grid grid-cols-2 gap-4">
              {data.Images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Studio Image ${index + 1}`}
                  className="h-64 w-full rounded-md object-cover"
                />
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold">Contact Info:</h3>
            <p className="text-sm text-gray-600">
              📞 Phone: {data.Contact.Phone}
            </p>
            <p className="text-sm text-gray-600">
              📧 Email: {data.Contact.Email}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
