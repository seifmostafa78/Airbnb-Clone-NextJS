import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[450px] ">
      <Image
        src="https://images.unsplash.com/photo-1562832135-14a35d25edef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1245&q=80"
        alt="banner-img"
        className="object-cover object-left"
        fill
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect</p>
        <button type="button" className="bg-white px-10 py-4 rounded-full text-purple-500 shadow-md my-3 hover:shadow-xl font-bold cursor-pointer active:scale-90 transition duration-150">
          I am flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
