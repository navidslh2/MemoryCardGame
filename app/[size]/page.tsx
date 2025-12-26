'use client'

import Cards from "@/component/Cards";
import GameHeader from "@/component/GameHeader";
import Modal from "@/component/ui/Modal";
import { bestScoreHnadler, createList } from "@/lib/finctions";
import { useChangeّImageHandler } from '@/lib/hooks/useChangeّImageHandler'
import { use, useState } from "react";








interface Props {
  params:Promise<{size:string}>
}
export default function GamePage ({params}:Props) {
    const {size} = use(params)  
    const gameSize = Number(size.split("*")[0]);
    const imageNumber = gameSize ** 2;
    const [idList] = useState(createList(imageNumber))
    const {numberOfMove, firstImage, secondImage, completeList, changeّImageHandler, duration, bestScore, isFinish,  showModal, closeModalHandler, restartHandler} = useChangeّImageHandler(imageNumber,gameSize)
    const  bestPoint = bestScoreHnadler(bestScore,gameSize)


  return (
    <div>
    <GameHeader numberOfMove={numberOfMove}  duration={duration} bestPoint={bestPoint} gameSize={gameSize} restartHandler={restartHandler} />
    <Cards gameSize={gameSize} idList={idList} changeّImageHandler={changeّImageHandler} firstImage={firstImage} secondImage={secondImage} completeList={completeList}/>
    <Modal isFinish={isFinish} numberOfMove={numberOfMove} duration={duration} bestPoint={bestPoint} size={size} restartHandler={restartHandler} closeModalHandler={closeModalHandler} showModal={showModal} />
    </div>
  )
}







