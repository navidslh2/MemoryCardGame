import { card } from "@/lib/data";
import { setImage } from "@/lib/finctions";

import Image from "next/image";

interface Props {
  imageId: number;
  cardStyle: string;
  changeّImageHandler:(imageId:number, index:number)=> void
  firstImage:{imageId:number, index: number}| null
  secondImage:{imageId:number, index: number}| null
  index: number
  completeList: number[]
}


const Card = ({ imageId, cardStyle, changeّImageHandler, firstImage, index, secondImage, completeList }: Props) => {
  let imageUrl = setImage(completeList, index, imageId, firstImage, secondImage)
  const isComplete = completeList.indexOf(index) >=0
 
  return (
    <div className={`relative ${cardStyle} ${!isComplete? "cursor-pointer" : ""} `}>
      <Image
        src={`/images/${imageUrl}`}
        fill
        alt={card[imageId].image}
        className="object-contain"
        onClick={!isComplete? () => changeّImageHandler(imageId, index): undefined}
      />
    </div>
  );
};

export default Card;
