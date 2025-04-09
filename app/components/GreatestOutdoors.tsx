import Image from "next/image";
import Link from "next/link";

type GreatestOutdoorsProps = {
  img: string;
  title: string;
  desc: string;
  linkText: string;
};

const GreatestOutdoors = ({
  img,
  title,
  desc,
  linkText,
}: GreatestOutdoorsProps) => {
  return (
    <section>
      <div className="container relative cursor-pointer pt-6">
        <div className="relative h-96 min-w-[300px]">
          <Image
            src={img}
            alt="GreatestOutdoors-Img"
            fill
            className="object-cover rounded-2xl -z-10"
          />
        </div>
        <div className="absolute top-16 left-12 lg:top-23 lg:left-25">
          <h3 className="text-4xl mb-3 w-64">{title}</h3>
          <p>{desc}</p>
          <Link
            href="/"
            className="bg-gray-900 text-white text-sm py-2 px-4 mt-5 block w-fit rounded-lg"
          >
            {linkText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GreatestOutdoors;
