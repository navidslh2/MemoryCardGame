
import { gridFunction } from "@/lib/finctions";
import Card from "./Card";


interface Props {
  gameSize: number
  idList: number[]
  changeّImageHandler: (imageId: number, index:number)=>void
  firstImage:{imageId:number, index: number} | null
  secondImage:{imageId:number, index: number} | null
  completeList:number[]
}

const Cards = ({ gameSize, idList, changeّImageHandler, firstImage, secondImage, completeList }: Props) => {
  const { gridStyle, cardStyle, cardsStyle } = gridFunction(gameSize);

  
  
  return ( 
    <div
      className={`pt-25 px-1  grid ${gridStyle} ${cardsStyle}  m-auto`}
    >
      {cardStyle  &&
        idList.map((id, index) => (
          <div
            className="col-span-1 flex items-center justify-center"
            key={index}
          >
            <Card
              imageId={id-1}
              cardStyle={cardStyle}
              changeّImageHandler={changeّImageHandler}
              firstImage={firstImage}
              index = {index}
              secondImage={secondImage}
              completeList={completeList}
            />
          </div>
        ))}
    </div>
  );
};

export default Cards;
