import Link from "next/link";

const links = [
  {
    title: "ABOUT",
    links: [
      "How Airbnb works",
      "Newsroom",
      "Investors",
      "Airbnbn Plus",
      "Airbnb Luxe",
    ],
  },
  {
    title: "COMMUNITY",
    links: [
      "Accessbility",
      "This is not a real site",
      "Its a pretty awesome clone",
      "Referrals accepted",
      "Papafam",
    ],
  },
  {
    title: "HOST",
    links: [
      "Accessbility",
      "This is not a real site",
      "Its a pretty awesome clone",
      "Referrals accepted",
      "Papafam",
    ],
  },
  {
    title: "SUPPORT",
    links: [
      "Accessbility",
      "This is not a real site",
      "Its a pretty awesome clone",
      "Referrals accepted",
      "Papafam",
    ],
  },
];

const Footer = () => {
  return (
    <footer className="mt-6 px-4 py-14 sm:px-18 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 bg-gray-100">
      {links.map((link) => (
        <div key={link.title} className="space-y-4 text-sm text-gray-800">
          <h2 className="font-bold">{link.title}</h2>
          {link.links.map((item) => (
            <Link href={item} key={item} className="mt-2 block">
              {item}
            </Link>
          ))}
        </div>
      ))}
    </footer>
  );
};

export default Footer;
