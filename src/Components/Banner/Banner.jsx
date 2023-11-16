const Banner = () => {
  return (
    <div
      className="hero h-[500px]"
      style={{
        backgroundImage: "url(https://i.ibb.co/QdffgWT/bg.png)",
      }}
    >
      <div className="hero-overlay bg-opacity-60 bg-[#fffffff2]"></div>
      <div className="hero-content text-center text-neutral-content flex flex-col items-center justify-between">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-[#0B0B0B]">
            I Grow By Helping People In Need
          </h1>
        </div>
        <div>
          <input
            className="bg-[#FFF] py-3 px-8 outline-none rounded-lg text-black font-medium border"
            placeholder="search here.."
            type="text"
          />
          <button className="py-3 px-5 rounded my-1 text-white font-semibold bg-[#FF444A]">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
