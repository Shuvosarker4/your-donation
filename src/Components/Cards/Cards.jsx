import { useContext } from "react";
import Card from "../Card/Card";
import { DataContext } from "../UseContext/Use";

const Cards = () => {
  const cardData = useContext(DataContext);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {cardData.map((data, index) => (
        <Card key={index} data={data}></Card>
      ))}
    </div>
  );
};

export default Cards;
