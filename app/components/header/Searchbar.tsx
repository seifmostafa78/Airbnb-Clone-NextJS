"use client";
import { SearchIcon, UsersIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useState } from "react";
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { enUS } from "date-fns/locale";

const Searchbar = ({ placeholder }: { placeholder?: string }) => {
  const [input, setInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numOfGuests, setNumOfGuests] = useState(1);
  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };
  const handleSelect = (ranges: RangeKeyDict) => {
    setStartDate(ranges.selection.startDate as Date);
    setEndDate(ranges.selection.endDate as Date);
  };
  return (
    <>
      <div className="flex items-center md:border-1 md:border-gray-200 rounded-full p-2 md:shadow-sm ">
        <input
          type="text"
          placeholder={placeholder || "Start your search"}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="text-sm text-gray-600 placeholder-gray-400 pl-5 flex-grow bg-transparent outline-none"
        />
        <SearchIcon className="hidden md:inline-flex bg-red-400 text-white h-8 rounded-full p-2 md:mx-2" />
      </div>
      {input && (
        <div className="absolute top-[100%] left-[50%] flex flex-col col-span-3 mx-auto translate-x-[-50%]">
          <DateRangePicker
            locale={enUS}
            ranges={[selectionRange]}
            minDate={new Date()}
            onChange={handleSelect}
            rangeColors={["#FD5B61"]}
          />
          <div className="flex items-center p-4 bg-white border-b border-b-gray-300">
            <h2 className="text-2xl flex-grow font-semibold">
              Number Of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              value={numOfGuests}
              min={1}
              onChange={(e) => setNumOfGuests(Number(e.target.value))}
              className="w-12 pl-2 outline-none text-lg text-red-400"
            />
          </div>
          <div className="bg-white flex items-center p-5">
            <button
              type="button"
              onClick={() => setInput("")}
              className="flex-grow text-gray-500 cursor-pointer"
            >
              Cancel
            </button>
            <Link
              href={{
                pathname: "/search",
                search: `?location=${input}&startDate=${startDate}&endDate=${endDate}&numOfGuests=${numOfGuests}`,
              }}
              onClick={() => setInput("")}
              className="flex-grow text-center"
            >
              <p className="text-red-400">Search</p>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Searchbar;
