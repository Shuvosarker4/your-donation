import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const DonationCard = ({ data }) => {
  const { picture, title, price, card_bg, category_bg, text_color, id } = data;

  const dynamicStyle = {
    cardBackground: {
      backgroundColor: card_bg,
    },
    cateBack: {
      backgroundColor: category_bg,
      color: text_color,
    },
    title: {
      color: text_color,
    },
    detail: {
      backgroundColor: text_color,
    },
  };
  return (
    <div style={dynamicStyle.cardBackground} className=" rounded flex gap-8 ">
      <div className="">
        <img className="h-full" src={picture} alt="" />
      </div>
      <div className="py-1">
        <h3
          style={dynamicStyle.cateBack}
          className="px-2 py-2 w-[100px] rounded text-xl"
        >
          category
        </h3>
        <h1 className="text-2xl font-semibold my-2">{title}</h1>
        <p style={dynamicStyle.title} className="my-1 text-xl font-semibold">
          ${price}
        </p>
        <Link to={`/details/${id}`}>
          <button style={dynamicStyle.detail} className="btn text-white">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};
DonationCard.propTypes = {
  data: PropTypes.object,
};

export default DonationCard;
