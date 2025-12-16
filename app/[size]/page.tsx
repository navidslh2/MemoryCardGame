import Cards from "@/component/Cards";
import { createList } from "@/lib/finctions";
import { use, useState } from "react";

interface Props {
  params:Promise<{size:string}>
}
export default function GamePage ({params}:Props) {
    const {size} = use(params)  
    const gameSize = Number(size.split("*")[0]);
    const imageNumber = gameSize ** 2;
    const [idList] = useState(createList(imageNumber))
  return (
    <div>
        <Cards size={size}/>
    </div>
  )
}