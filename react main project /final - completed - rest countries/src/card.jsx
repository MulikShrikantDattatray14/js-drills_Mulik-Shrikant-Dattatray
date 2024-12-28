import React from "react";
import { Link } from "react-router-dom";
import { useDarkMode } from "./context";

const NoCountriesMessage = () => {
  return <p className="text-center">No countries match the filters.</p>;
};

const CountryCard = ({ country }) => {
  const { isDarkMode } = useDarkMode();
  return (
    <Link to={`/country/${country.name?.common}`} key={country.cca3}>
      <div
        className={`${
          isDarkMode
            ? "bg-gray-700 text-white p-4 rounded-lg shadow-lg flex flex-col items-center cursor-pointer border-2  border-solid border-white"
            : "bg-white text-black p-4 rounded-lg shadow-lg flex flex-col items-center cursor-pointer border-2  border-solid border-black"
        }`}
      >
        {/* <img
          src={country.flags?.png}
          alt={`Flag of ${country.name?.common}`}
          
          className={isDarkMode ? 'w-[300px] h-40 object-cover rounded-lg border-3 border-solid border-white' : 'w-[300px] h-40 object-cover rounded-lg border-3 border-solid border-black'}
        /> */}

        <img
          src={country.flags?.png}
          alt={`Flag of ${country.name?.common}`}
          className={
            isDarkMode
              ? "w-[300px] h-40 object-cover rounded-lg border-4 border-solid border-white"
              : "w-[300px] h-40 object-cover rounded-lg border-4 border-solid border-black"
          }
        />

        <h2
          className={
            isDarkMode
              ? "bg-gray-700 text-white text-2xl font-semibold mt-4 text-center my-5"
              : "bg-white text-black text-2xl font-semibold mt-4 text-center my-5"
          }
        >
          {country.name?.common}
        </h2>
        <p
          className={
            isDarkMode
              ? "bg-gray-750 text-white text-sm "
              : "bg-white text-black text-sm "
          }
        >
          <strong>Capital : </strong>
          {country.capital}
        </p>
        <p
          className={
            isDarkMode
              ? "bg-gray-750 text-white text-sm "
              : "bg-white text-black text-sm "
          }
        >
          <strong>Region : </strong>
          {country.region}
        </p>
        <p
          className={
            isDarkMode
              ? "bg-gray-750 text-white text-sm "
              : "bg-white text-black text-sm "
          }
        >
          <strong>Sub-Region : </strong>{" "}
          {country.subregion ? country.subregion : "No Data"}
        </p>
        <p
          className={
            isDarkMode
              ? "bg-gray-750 text-white text-sm "
              : "bg-white text-black text-sm "
          }
        >
          <strong>Population : </strong> {country.population}
        </p>
        <p
          className={
            isDarkMode
              ? "bg-gray-750 text-white text-sm "
              : "bg-white text-black text-sm "
          }
        >
          <strong>Area : </strong> {country.area}
        </p>
      </div>
    </Link>
  );
};

const CountryGrid = ({ countries }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 px-4  border-solid border-black">
      {countries.map((country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </div>
  );
};

const CountryList = ({ countries }) => {
  const { isDarkMode } = useDarkMode();
  if (!countries.length) {
    return <NoCountriesMessage />;
  }

  return <CountryGrid countries={countries} isDarkMode={isDarkMode} />;
};

export default CountryList;
