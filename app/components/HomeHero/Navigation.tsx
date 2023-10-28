import React from "react";
import { FcNext, FcPrevious } from "react-icons/fc";

interface IProps {
  imageIndex: number;
  setImageIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Navigation = ({ imageIndex, setImageIndex }: IProps) => {
  const prevImage = () => {
    if (imageIndex === 0) {
      setImageIndex(9);
    } else {
      setImageIndex((prev) => prev - 1);
    }
  };
  const nextImage = () => {
    if (imageIndex === 9) {
      setImageIndex(0);
    } else {
      setImageIndex((prev) => prev + 1);
    }
  };
  return (
    <div className="absolute z-20 top-[50%] w-full px-10 flex justify-between">
      <button
        onClick={prevImage}
        className="rounded-full transition-all hover:bg-primary-color hover:bg-opacity-30"
      >
        <FcPrevious size={40} />
      </button>

      <button
        onClick={nextImage}
        className="rounded-full transition-all hover:bg-primary-color hover:bg-opacity-30"
      >
        <FcNext size={40} />
      </button>
    </div>
  );
};

export default Navigation;
