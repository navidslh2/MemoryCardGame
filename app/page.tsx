import Link from "next/link";

const size = ["4*4", "8*8", "16*16"];

const HomePage = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-start pt-60 gap-30">
      <h1 className="text-2xl text-green-600">
        برای شروع بازی ابتدا سایز را مشخص کنید
      </h1>
      <div className="flex gap-3">
        {size.map((item) => (
          <Link
            key={item}
            href={`memorycard/${item}`}
            className="bg-blue-700 w-15 h-10 flex items-center justify-center rounded-md shadow-md shadow-gray-700 hover:bg-green-800 hover:-translate-y-0.5 hover:shadow-xl hoverEffect"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage