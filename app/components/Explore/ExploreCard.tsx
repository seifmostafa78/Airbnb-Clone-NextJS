import { ExploreItem } from "@/app/types/app";
import Image from "next/image";

type ExploreCardProps = ExploreItem;
const ExploreCard = ({ img, location, distance }: ExploreCardProps) => {
  return (
    <div className="flex items-center space-x-4 m-2 mt-6 card-hover-effect cursor-pointer">
      <div className="relative h-16 w-16">
        <Image src={img} alt="explore-img" fill className="rounded-[5px]" />
      </div>
      <div>
        <p>{location}</p>
        <p className="text-gray-500">{distance}</p>
      </div>
    </div>
  );
};

export default ExploreCard;
