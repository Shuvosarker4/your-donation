import { useState } from "react";
import DonationCard from "../../../Components/DonationCard/DonationCard";

const Donation = () => {
  const [isShow, setIsShow] = useState(false);
  // console.log(isShow);
  const getItem = JSON.parse(localStorage.getItem("cards"));
  console.log(getItem.length);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {isShow
          ? getItem.map((data, index) => (
              <DonationCard key={index} data={data}></DonationCard>
            ))
          : getItem
              .slice(0, 4)
              .map((data, index) => (
                <DonationCard key={index} data={data}></DonationCard>
              ))}
      </div>
      <div className="flex items-center justify-center my-3">
        {getItem.length > 2 && (
          <button
            onClick={() => setIsShow(!isShow)}
            className="btn btn-success text-white text-xl font-semibold"
          >
            {isShow ? "Show Less" : " Show More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Donation;
