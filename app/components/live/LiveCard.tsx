import { LiveItem } from "@/app/types/app";
import Image from "next/image";

type LiveCardProps = LiveItem;
const ExploreCard = ({ img, title }: LiveCardProps) => {
  return (
    <div className=" card-hover-effect cursor-pointer">
      <div className="relative h-80 w-80">
        <Image src={img} alt="live-img" fill className="rounded-[5px]" />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
};

export default ExploreCard;

