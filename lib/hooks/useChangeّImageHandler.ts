"use client";
import { use, useEffect, useState } from "react";
import type { BestScore } from "../type";

export const useChangeّImageHandler = (
  imageNumber: number,
  gameSize: number
) => {
  const [numberOfMove, setNumberOfMove] = useState(0);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [firstImage, setFirstImage] = useState<{
    imageId: number;
    index: number;
  } | null>(null);
  const [secondImage, setSecondImage] = useState<{
    imageId: number;
    index: number;
  } | null>(null);
  const [completeList, setCompleteList] = useState<number[]>([]);
  const [isFinish, setIsFinish] = useState(false);
  const [duration, setDuration] = useState(0);
  const [bestScore, setBestScore] = useState<BestScore[]>(()=>{
    const local = localStorage.getItem('score')
    return local? JSON.parse(local) : []
  });

  const changeّImageHandler = (imageId: number, index: number) => {
    if (isFinish) return;
    if (startTime === null && !isFinish) {
      setStartTime(Date.now());
    }

    setNumberOfMove((prev) => prev + 1);
    if (firstImage === null) {
      setFirstImage({ imageId: imageId, index: index });
      return;
    }
    setSecondImage({ imageId: imageId, index: index });
    if (firstImage.imageId !== imageId) {
      setTimeout(() => {
        setFirstImage(null);
        setSecondImage(null);
      }, 1000);
      return;
    }

    if (firstImage.imageId === imageId) {
      setCompleteList((prev) => [...prev, index, firstImage.index]);
      setFirstImage(null);
      setSecondImage(null);
    }
   
  };

  useEffect(()=>{
     if (completeList.length === imageNumber) {
      setIsFinish(true);
      setBestScore((prev) => [
        ...prev,
        { gameSize: gameSize, numberOfMove: numberOfMove, duration: duration },
      ]);
    }
  },[completeList])

  useEffect(() => {
    if (startTime === null || isFinish) return;
    const interval = setInterval(() => {
      setDuration(Date.now() - startTime);
    }, 100);
    return () => clearInterval(interval);
  }, [startTime, isFinish]);

  useEffect(()=>{
    const score = JSON.stringify(bestScore)
    localStorage.setItem('score',score)
  },[bestScore])
  

  return {
    numberOfMove,
    startTime,
    firstImage,
    secondImage,
    completeList,
    changeّImageHandler,
    isFinish,
    duration,
    bestScore,
    setIsFinish
  };
};
