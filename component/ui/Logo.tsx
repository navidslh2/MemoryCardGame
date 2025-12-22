import Image from "next/image";
import Link from "next/link";



const Logo = () => {
  return (
    <Link className="group flex items-center font-bold gap-3 relative" href={"/"}>
      <div>
        <Image src={"/images/favicon.png"}  alt="logo" width={30} height={30}/>
      </div>
      <span className="bg-gradient-to-l from-[#818f30] via-[#7aa596] to-[#80858a] bg-clip-text text-transparent  hoverEffect">
        نوید صالحی
      </span>
      {/* <span className="hidden group-hover:block absolute -bottom-7.5 left-1/2 bg-white text-black p-1 whitespace-nowrap font-thin text-sm rounded-xs">صفحه اصلی</span> */}
    </Link>
  );
};

export default Logo;
