import Image from "next/image";
import { ListingItem } from "../types/app";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

type ListingCardProps = Omit<ListingItem, "long" | "lat">;

const ListingCard = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}: ListingCardProps) => {
  return (
    <div className="flex flex-col md:flex-row py-2 px-2 border-b border-gray-200 pr-4 hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t cursor-pointer">
      <div className="relative h-40 w-full md:h-52 md:w-80  flex-shrink-0">
        <Image
          src={img}
          alt="listing-card"
          fill
          className="object-cover rounded-2xl"
        />
      </div>
      <div className="flex flex-col flex-grow md:pl-5 mt-5 md:mt-0">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="border-b border-gray-200 w-10 pt-2" />
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
        <div className="pt-5 flex justify-between items-end">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>
          <div>
            <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
