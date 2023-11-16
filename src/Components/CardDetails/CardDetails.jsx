import { useLoaderData, useParams } from "react-router-dom";
import Details from "../Details/Details";

const CardDetails = () => {
  const allData = useLoaderData();
  const getData = [...allData];
  const { id } = useParams();
  const matchCard = getData.find((data) => data.id == id);

  return (
    <div>
      <Details matchCard={matchCard}></Details>
    </div>
  );
};

export default CardDetails;
