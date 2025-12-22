import { card } from "./data";
import type { BestScore } from "./type";

export const gridFunction = (gameSize: Number) => {
  let gridStyle
  let cardsStyle
  let cardStyle
  switch (gameSize) {
    case 4:
      gridStyle = "grid-cols-4";
      cardsStyle = "w-[500px] sm:w-[500px] md:[850px] gap-1 md:gap-3 xl:gap-5"
      cardStyle = "w-18 h-18 sm:w-25 sm:h-25 md:w-35 md:h-35"
      break
    case 8:
      gridStyle = "grid-cols-8";
       cardsStyle = "w-[500px] sm:w-[700px] md:[850px] gap-0.5"
      cardStyle = "w-12 h-12 sm:w-17 sm:h-17 md:w-20 md:h-20 "
      break
    case 16:
      gridStyle = "grid-cols-16";
      cardsStyle = "w-[550px] sm:w-[600px] md:[850px] gap-1"
      cardStyle = "w-5 h-5 sm:w-9.5 sm:h-9.5 md:w-11 md:h-11"
      break
  }
  return {gridStyle, cardStyle, cardsStyle}
};

export const createList = (imageNumber: number) => {
  let idList = []
  for (let i = 1; i <= imageNumber / 2; i++) {
    let number = Math.floor(Math.random()*8 + 1)
    idList.push(number);
    idList.push(number);
  }
  idList.sort((a, b) => (Math.random() < 0.5 ? -1 : 1));
  return idList
};

export const setImage =(completeList:number[], index:number, imageId:number, firstImage:{imageId:number, index: number}| null, secondImage:{imageId:number, index: number}| null )=>{
  if(completeList.indexOf(index) >=0){
    return card[imageId].image
  }else if(firstImage && firstImage.index === index || secondImage && secondImage.index === index){
    return card[imageId].image
  }else{
     return "empty.jpg"
  }
}

export const bestScoreHnadler = (bestScore:BestScore[],gameSize:number) =>{
  const sizeFilter = bestScore.filter(score => score.gameSize === gameSize)
  if(sizeFilter.length === 0) return 'امتیازی ثبت نشده است'
  return Math.min(...sizeFilter.map(sc => sc.numberOfMove))
}