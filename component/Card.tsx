import { card } from "@/lib/data";
import { setImage } from "@/lib/finctions";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

interface Props {
  imageId: number;
  cardStyle: string;
  changeّImageHandler: (imageId: number, index: number) => void;
  firstImage: { imageId: number; index: number } | null;
  secondImage: { imageId: number; index: number } | null;
  index: number;
  completeList: number[];
}

const Card = ({
  imageId,
  cardStyle,
  changeّImageHandler,
  firstImage,
  index,
  secondImage,
  completeList,
}: Props) => {
  let imageUrl = setImage(
    completeList,
    index,
    imageId,
    firstImage,
    secondImage
  );
  const isComplete = completeList.indexOf(index) >= 0;

  return (
    <div
      className={`relative aspect-square rounded-md ${cardStyle} ${
        !isComplete ? "cursor-pointer" : ""
      } `}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={imageUrl}
          className="absolute inset-0"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Image
            src={`/images/${imageUrl}`}
            fill
            alt={card[imageId].image}
            className="object-contain rounded-md "
            onClick={
              !isComplete
                ? () => changeّImageHandler(imageId, index)
                : undefined
            }
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Card;
