/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";
import { useState } from "react";

function Coffees() {
  const allCoffee = useLoaderData();
  //   console.log(allCoffee);
  const [coffees, setCoffees] = useState(allCoffee)
  const hundleShort = (shortby) => {
    if (shortby == 'popularity') {
      const sortedCoffees = [...allCoffee].sort((a, b) => b.popularity - a.popularity);
      setCoffees(sortedCoffees);
    } 
    else if (shortby == 'rating') {
      const sortedCoffees = [...allCoffee].sort((a, b) => b.rating - a.rating);
      setCoffees(sortedCoffees);
    }
  };
  

  return (
    <div className="min-h-[600px] w-10/12 mx-auto">
      <div className="flex justify-end space-x-3">
        <button onClick={()=>hundleShort('popularity')} className="btn btn-primary">Popularity</button>
        <button onClick={()=>hundleShort('rating')} className="btn btn-primary">Rating</button>
      </div>
      <div className="grid grid-cols-3 w-12/12 mx-auto gap-10 my-10">
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee}></Card>
        ))}
      </div>
    </div>
  );
}

export default Coffees;
