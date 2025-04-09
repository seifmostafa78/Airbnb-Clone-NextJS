import { format } from "date-fns";
import Header from "../components/header/Header";
import { getSearchResult } from "../utils/api";
import { SearchResultData } from "../types/app";
import ListingCard from "../components/ListingCard";
import MapWrapper from "../components/MapWrapper";

type SearchResultsProps = {
  searchParams: Promise<{
    location: string;
    startDate: string;
    endDate: string;
    numOfGuests: string;
  }>;
};

const SearchResult = async ({ searchParams }: SearchResultsProps) => {
  const { location, startDate, endDate, numOfGuests } = await searchParams;
  let formatedStartDate;
  let formatedEndDate;
  if (startDate && endDate) {
    formatedStartDate = format(new Date(startDate), "dd MMMM yy");
    formatedEndDate = format(new Date(endDate), "dd MMMM yy");
  }
  const range = `${formatedStartDate} - ${formatedEndDate}`;

  const filters = [
    "Cancellation Flexibility",
    "Type of Place",
    "Price",
    "Rooms and Beds",
    "More filters",
  ];

  const searchResultData: SearchResultData = await getSearchResult();

  return (
    <>
      <Header
        placeholder={`${location} | ${range} | ${numOfGuests} ${
          Number(numOfGuests) > 1 ? "Guests" : "Guest"
        }`}
      />
      <main>
        <section className="pt-14">
          <div className="container flex">
            <div className="pr-4">
              <p className="text-sm">
                300+ Stays - {range} - for {numOfGuests}{" "}
                {Number(numOfGuests) > 1 ? "Guests" : "Guest"}
              </p>
              <h1 className="text-3xl font-semibold mt-2 mb-6">
                Stays in {location}
              </h1>
              <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                {filters.map((filter) => (
                  <button key={filter} type="button" className="filter-btn">
                    {filter}
                  </button>
                ))}
              </div>
              <div>
                {searchResultData.map(
                  ({
                    img,
                    location,
                    title,
                    description,
                    star,
                    price,
                    total,
                  }) => (
                    <ListingCard
                      key={title}
                      img={img}
                      location={location}
                      title={title}
                      description={description}
                      star={star}
                      price={price}
                      total={total}
                    />
                  )
                )}
              </div>
            </div>
            <div className="hidden xl:inline-flex xl:min-w-[525px]">
              <MapWrapper searchResultData={searchResultData} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SearchResult;
