import React from "react";
import { useGallery } from "../../contexts/gallery-contextEx";
import propTypes from "prop-types";

const PhotoListEx = () => {
  const { photos } = useGallery();

  return (
    <div className="py-10 px-5">
      <div className="grid grid-cols-4 gap-5">
        {photos.length > 0 &&
          photos.map((item) => (
            <PhotoItem key={item.id} info={item}></PhotoItem>
          ))}
      </div>
    </div>
  );
};
const PhotoItem = ({ info: { url, isFavorite, id } }) => {
  const { toggleFavorite } = useGallery();
  console.log(isFavorite);
  return (
    <div className="relative  h-[300px] group cursor-pointer">
      <img className="h-full  w-full  object-cover" src={url} alt="" />
      <span
        className="absolute right-0 top-0 cursor-pointer invisible group-hover:opacity-100 group-hover:visible transition-all "
        onClick={() => toggleFavorite(id)}
      >
        <svg
          width="42"
          height="38"
          viewBox="0 0 42 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="max-w-full "
        >
          <path
            d="M0.166626 11.5C0.166108 8.47984 1.37993 5.58633 3.53499 3.47045C5.69005 1.35458 8.60534 0.19405 11.625 0.249979C15.2027 0.230979 18.6166 1.74826 21 4.41665C23.3833 1.74826 26.7972 0.230979 30.375 0.249979C33.3946 0.19405 36.3099 1.35458 38.4649 3.47045C40.62 5.58633 41.8338 8.47984 41.8333 11.5C41.8333 22.6583 28.5437 31.0833 21 37.75C13.4729 31.0271 0.166626 22.6666 0.166626 11.5Z"
            fill={`${isFavorite ? "#ff6bcb" : "#fff"}`}
          />
        </svg>
      </span>
      <button className="py-2 px-6 bg-white rounded-lg text-black absolute bottom-5 left-2/4 -translate-x-2/4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
        Add to cart{" "}
      </button>
    </div>
  );
};
PhotoItem.propTypes = {
  url: propTypes.string,
  id: propTypes.number,
  isFavorite: propTypes.bool,
};
export default PhotoListEx;
