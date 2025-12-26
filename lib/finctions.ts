import { card } from "./data";
import type { BestScore } from "./type";

export const gridFunction = (gameSize: Number) => {
  let gridStyle
  let cardsStyle
  let cardStyle
  switch (gameSize) {
    case 4:
      gridStyle = "grid-cols-4";
      cardsStyle = "w-[350px] sm:w-[500px] md:[600px] gap-3 xl:gap-5"
      cardStyle = "w-18 h-18 sm:w-25 sm:h-25 md:w-30 md:h-30"
      break
    case 8:
      gridStyle = "grid-cols-8";
       cardsStyle = "w-[450px] sm:w-[600px] md:w-[700px] xl:w-[810px] gap-2"
      cardStyle = "w-12 h-12 sm:w-17 sm:h-17 md:w-18 md:h-18 xl:w-23 xl:h-23"
      break
    case 16:
      gridStyle = "grid-cols-16";
      cardsStyle = "w-[450px] sm:w-[600px] md:w-[750px] xl:w-[850px]  gap-1"
      cardStyle = "w-5 h-5 sm:w-8 sm:h-8 md:w-9 md:h-9 xl:w-12 xl:h-12"
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