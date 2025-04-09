import { GlobeAltIcon, MenuIcon, UserCircleIcon } from "@heroicons/react/solid";

const Navbar = () => {
  return (
    <div className="flex items-center space-x-4 justify-end text-gray-500">
      <p className="hidden md:inline cursor-pointer">Become a host</p>
      <GlobeAltIcon className="hidden md:inline h-6 cursor-pointer" />
      <div className="flex space-x-2 border-2 border-gray-200 rounded-full p-2 cursor-pointer">
        <MenuIcon className="h-6" />
        <UserCircleIcon className="h-6" />
      </div>
    </div>
  );
};

export default Navbar;
