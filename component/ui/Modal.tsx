import { AnimatePresence, easeInOut, motion } from "framer-motion";
import Logo from "./Logo";
import Link from "next/link";
import { IoCloseSharp } from "react-icons/io5";

interface Props {
  isFinish: boolean;
  numberOfMove: number;
  duration: number;
  bestPoint: number | string;
  size: string;
  gameRepeatHandler: () => void;
  closeModalHandler:() =>void
  showModal:boolean
}
const Modal = ({
  isFinish,
  numberOfMove,
  duration,
  bestPoint,
  size,
  gameRepeatHandler,
  closeModalHandler,
  showModal
}: Props) => {
  return (
    <AnimatePresence>

    {showModal &&  <motion.div
        className="fixed flex flex-col gap-15 w-3/4 max-w-200 right-1/2 translate-x-1/2 top-50 p-5 md:px-15 border rounded-md bg-stone-900/98 border-stone-800"
        initial={{ translateY: "-150%", scale: 0 }}
        animate={{ translateY: 0, scale: 1 }}
        exit={{ translateY: "-150%", scale: 0 }}
        transition={{ duration: 0.8, ease: easeInOut }}
      >
        <div className="m-auto">
          <Logo />
        </div>
        <div className="flex items-center justify-between">
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
        <div className="m-auto">شما موفق شدید بازی را به پایان برسانید</div>
        <div className="flex justify-around">
          <button onClick={gameRepeatHandler} className="bg-blue-400 p-2 rounded-md cursor-pointer hover:scale-105 hoverEffect ">تکرار بازی</button>
          <Link href="/" className="bg-blue-400 p-2 rounded-md cursor-pointer hover:scale-105 hoverEffect ">تغییر سایز بازی</Link>
        </div>
        <button className="absolute top-5 right-5 hover:text-green-900 hoverEffect cursor-pointer" onClick={closeModalHandler}>
          <IoCloseSharp />
        </button>
      </motion.div>}
    </AnimatePresence>
  );
};

export default Modal;
