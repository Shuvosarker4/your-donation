import PropTypes from "prop-types";
import swal from "sweetalert";
const Details = ({ matchCard }) => {
  const { picture, category, description, price, text_color, id } = matchCard;

  const dynamicStyles = {
    back: {
      backgroundColor: text_color,
    },
  };

  const handleDonate = () => {
    const itemArray = [];
    const getItem = JSON.parse(localStorage.getItem("cards"));
    if (!getItem) {
      itemArray.push(matchCard);
      localStorage.setItem("cards", JSON.stringify(itemArray));
      swal("Good job!", "You donated", "success");
    } else {
      const isExist = getItem.find((data) => data.id == id);
      if (!isExist) {
        itemArray.push(...getItem, matchCard);
        localStorage.setItem("cards", JSON.stringify(itemArray));
        swal("Good job!", "You donated", "success");
      } else {
        swal("Choose another one!!", "You already donated", "error");
      }
    }
  };
  return (
    <div className="card ">
      <div>
        <figure>
          <img
            className=" w-[400px] h-[350px] md:w-[900px] md:h-[500px] lg:w-[900px] lg:h-[500px]"
            src={picture}
            alt="Donation"
          />
        </figure>
        <div className="w-[335px] top-[265px] md:w-[610px] lg:w-[900px] rounded bg-[#0b0b0b80] absolute lg:top-[388px] lg:right-[123px] lg:h-[110px] md:top-[388px] md:right-[8px] md:h-[110px]">
          <button
            onClick={() => handleDonate(matchCard)}
            style={dynamicStyles.back}
            className=" mt-6 ms-8 px-8 py-4 rounded-lg font-bold text-white"
          >
            Donate ${price}
          </button>
        </div>
      </div>
      <div className="card-body md:ms-28 lg:ms-28">
        <h1 className="card-title p-1 rounded w-24 h-11 text-2xl font-extrabold">
          {category}
        </h1>
        <p>{description}</p>
      </div>
    </div>
  );
};
Details.propTypes = {
  matchCard: PropTypes.object,
};

export default Details;
