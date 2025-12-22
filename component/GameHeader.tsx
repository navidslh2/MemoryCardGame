import Logo from "./ui/Logo"


interface Props {
    numberOfMove:number
    duration:number
    bestPoint:number | string
    gameSize:number
}

const GameHeader = ({numberOfMove, duration,bestPoint,gameSize}:Props) => {


  return (
    <div className='fixed top-5 left-5 right-5 h-15  px-4 md:px-10 xl:px-15 border border-gray-800 bg-gray-700  rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] flex items-center justify-between'>
      <div className="hidden sm:block"><Logo /></div>
      <div>
        <span>امتیاز: </span>
        {numberOfMove}
      </div>
      <div>
        <span>زمان: </span>
        {Math.floor(duration / 60000)}:{Math.floor(duration / 1000) % 60}
      </div>
      <div>
        <span>بهترین امتیاز: </span>
        {bestPoint}
      </div>
    </div>
  )
}

export default GameHeader
