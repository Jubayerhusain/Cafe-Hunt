import { useLoaderData, useParams } from "react-router-dom";
import Card from "../Card/Card";
import { useEffect, useState } from "react";

function CardCoffees() {
  const allCoffees = useLoaderData();
  const { category } = useParams();

  const [coffee, setCoffee] = useState([]);
  // const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    if (category) {
      const coffeeDatafilter = [...allCoffees].filter(
        (coffee) => coffee.category === category
      );
      setCoffee(coffeeDatafilter);
    } 
    // if (showAll) {
    //     setShowAll(allCoffees)
    // }
    else {
      setCoffee(allCoffees.slice(0, 6));
    }
  }, [allCoffees, category]);
  // const handleCount = () => {
  //    setShowAll(true)
  // };
  return (
    <div>
      <div className="grid grid-cols-3 w-10/12 mx-auto gap-10 my-10">
        {coffee.map((coffee) => (
          <Card key={coffee.id} coffee={coffee}></Card>
        ))}
      </div>
      <div className="text-center my-14">
        <button onClick={()=>setCoffee(allCoffees)} className="btn btn-error">See More</button>
      </div>
    </div>
  );
}

export default CardCoffees;
