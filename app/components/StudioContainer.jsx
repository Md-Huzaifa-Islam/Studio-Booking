import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import StudioCard from "./StudioCard";
const fetchStudios = async () => {
  const { data } = await axios.get(
    "https://gist.githubusercontent.com/rash3dul-islam/88e1565bea2dd1ff9180ff733617a565/raw/684afa147a8e726d7a5e4fdeb390f2d48b35051d/studio-mock-api,json",
  );
  return data.Studios;
};
export default function StudioContainer() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["studios"],
    queryFn: fetchStudios,
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  const places = new Set();

  data &&
    data.forEach((d) => {
      if (d.Location && d.Location.Area) {
        places.add(d.Location.Area);
      }
    });

  const uniquePlaces = [...places];

  console.log(uniquePlaces);

  return (
    <div>
      {data &&
        data.map((studio) => <StudioCard key={studio.Id} studio={studio} />)}
    </div>
  );
}
