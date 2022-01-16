import React from "react";
import { useParams } from "react-router-dom";
import Beluga from "./Beluga";
import Blue from "./Blue";

export default function Whale() {
  const { type } = useParams();
  // //donstruct 'search' out of the windows.location object
  // const { search } = useLocation();
  // const match = search.match(/type=(.*)/);
  // const type = match?.[1]; // ?. This will protect your component in instances where the search parameter is empty

  return (
    <>
      <h2>Whale</h2>
      {type === "beluga" && <Beluga />}
      {type === "blue" && <Blue />}
    </>
  );
}
