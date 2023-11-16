import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const { picture, category, title, card_bg, category_bg, text_color, id } =
    data || {};

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
  };
  return (
    <Link to={`/details/${id}`}>
      <div style={dynamicStyle.cardBackground} className="card ">
        <figure>
          <img src={picture} alt="Donation" />
        </figure>
        <div className="card-body">
          <h1
            style={dynamicStyle.cateBack}
            className="card-title p-1 rounded w-24 h-11"
          >
            {category}
          </h1>
          <h1 style={dynamicStyle.title} className="text-2xl font-semibold">
            {title}
          </h1>
        </div>
      </div>
    </Link>
  );
};
Card.propTypes = {
  data: PropTypes.object,
};
export default Card;
