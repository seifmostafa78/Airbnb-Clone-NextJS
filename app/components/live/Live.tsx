import { getLive } from "@/app/utils/api";
import MainHeading from "../MainHeading";
import { LiveData } from "@/app/types/app";
import LiveCard from "./LiveCard";

const Explore = async () => {
  const liveData: LiveData = await getLive();
  return (
    <section className="pt-6">
      <div className="container">
        <MainHeading title="Live Anywhere" />
        <div className="flex space-x-3 overflow-scroll p-3 no-scrollbar">
          {liveData.map(({ img, title}, index) => (
            <LiveCard
              key={index}
              img={img}
              title={title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
