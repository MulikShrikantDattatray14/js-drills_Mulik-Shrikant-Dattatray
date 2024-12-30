import { useParams, useNavigate } from "react-router-dom";
// import ToggleComponent from "./header";
import { FaArrowLeft } from "react-icons/fa";
import Toggle from "./toggle";
import { useDarkMode } from "./context";
// const ToggleSection = () => {
//   return <ToggleComponent />;
// };

const BackButton = ({ navigate }) => {
  const { isDarkMode } = useDarkMode();
  return (<button
    onClick={() => navigate("/")}
   
    className={isDarkMode ? 'flex items-center text-white bg-blue-500 hover:bg-blue-700 px-6 py-3 rounded-lg border-2  border-solid border-white' : 'flex items-center text-white bg-blue-500 hover:bg-blue-700 px-6 py-3 rounded-lg border-2  border-solid border-black'}
  >
    <FaArrowLeft className="mr-2" /> Back
  </button>)
};

const CountryFlag = ({ flagUrl, countryName, country }) => {
  const { isDarkMode } = useDarkMode();
  return (
    <div
      className={
        isDarkMode
          ? "bg-gray-800 text-white flex flex-col items-center p-6  rounded-lg shadow-lg justify-center "
          : "bg-white text-black flex flex-col items-center p-6 rounded-lg shadow-lg justify-center "
      }
    >
      <img
        src={flagUrl}
        alt={`Flag of ${countryName}`}
        
        className={isDarkMode ? 'w-[800px] h-[500px] object-cover rounded-lg border-8  border-solid border-white' : 'w-[800px] h-[500px] object-cover rounded-lg border-8  border-solid border-black'}
      />
      <div className="flex flex-row gap-10 mt-12 mr-1">
        <p className="text-sm sm:text-md md:text-lg lg:text-xl text-gray-600">
          <a
            href={country.maps.openStreetMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:scale-110 transition-transform duration-300"
          >
            StreetMap
          </a>
        </p>
        <p className="text-sm sm:text-md md:text-lg lg:text-xl text-gray-600">
          <a
            href={country.maps.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:scale-110 transition-transform duration-300"
          >
            GoogleMap
          </a>
        </p>
      </div>
    </div>
  );
};

const CountryDetails = ({ country, isDarkMode }) => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-8">
        <p
          className={
            isDarkMode
              ? "bg-gray-800 text-white text-md"
              : "bg-white text-black text-md"
          }
        >
          <strong>Official Name : </strong>
          {country.name?.official}
        </p>
        <p
          className={
            isDarkMode
              ? "bg-gray-800 text-white text-md"
              : "bg-white text-black text-md"
          }
        >
          <strong>Capital : </strong> {country.capital}
        </p>
        <p
          className={
            isDarkMode
              ? "bg-gray-800 text-white text-md"
              : "bg-white text-black text-md"
          }
        >
          <strong>Languages : </strong>
          {Object.values(country.languages || {}).join(", ")}
        </p>

        <p
          className={
            isDarkMode
              ? "bg-gray-800 text-white text-md"
              : "bg-white text-black text-md"
          }
        >
          <strong>Population : </strong> {country.population}
        </p>
        <p
          className={
            isDarkMode
              ? "bg-gray-800 text-white text-md"
              : "bg-white text-black text-md"
          }
        >
          <strong>Region : </strong> {country.region}
        </p>
        <p
          className={
            isDarkMode
              ? "bg-gray-800 text-white text-md"
              : "bg-white text-black text-md"
          }
        >
          <strong>Subregion : </strong> {country.subregion}
        </p>
        <p
          className={
            isDarkMode
              ? "bg-gray-800 text-white text-md"
              : "bg-white text-black text-md"
          }
        >
          <strong>Currency : </strong>{" "}
          {country.currencies
            ? Object.values(country.currencies)[0].name
            : "N/A"}
        </p>
      </div>
    </div>
  );
};

const BorderingCountries = ({ borderingCountries, navigate, isDarkMode }) => {
  return (
    <div
      className={
        isDarkMode
          ? "bg-gray-600 text-white-800 p-6 rounded-lg shadow-lg mt-8 "
          : "bg-white text-black p-6 rounded-lg shadow-lg mt-8 "
      }
    >
      <h2
        className={
          isDarkMode
            ? "bg-gray-600 text-white text-md font-bold  mb-4"
            : "bg-white text-black text-md font-bold  mb-4"
        }
      >
        Bordering Countries :
      </h2>
      <div className="flex flex-wrap gap-4 ">
        {borderingCountries.length > 0 ? (
          borderingCountries.map((border) => (
            <button
              key={border.cca3}
              onClick={() => navigate(`/country/${border.name?.common}`)}
              className={
                isDarkMode
                  ? "text-white bg-blue-400 hover:bg-blue-900 px-4 py-2 rounded-lg  border-2 border-solid border-white"
                  : "text-white bg-blue-400 hover:bg-blue-900 px-4 py-2 rounded-lg  border-2 border-solid border-black"
              }
            >
              {border.name?.common}
            </button>
          ))
        ) : (
          <p>No bordering countries available.</p>
        )}
      </div>
    </div>
  );
};

function CountryDetail({ countries }) {
  const { isDarkMode } = useDarkMode();
  const { name } = useParams();
  const navigate = useNavigate();

  const country = countries.find((c) => c.name?.common === name);

  if (!country) {
    return <p>Country not found!</p>;
  }

  const borderingCountries = countries.filter((c) =>
     //console.log((country.borders ?.includes(c.cca3) ) ? c.name.common : "no border")
   country.borders?.includes(c.cca3)
   
  );

  return (
    <div
      className={
        isDarkMode
          ? "bg-gray-700 text-white p-12 space-y-8"
          : "bg-white text-black p-12 space-y-8"
      }
    >
      
      <div className="flex items-center justify-between w-full sm:flex-row flex-col">
        <div className="flex sm:flex-row flex-col items-center justify-between w-full">
          <BackButton navigate={navigate} />
          <Toggle />
        </div>
      </div>
      <h1 className="text-5xl font-bold text-center w-full mt-4 sm:mt-0">
        {country.name?.common}
      </h1>

      <div
        className={
          isDarkMode
            ? "bg-gray-800 text-white-800 grid grid-cols-1 lg:grid-cols-2 gap-8  p-6 rounded-lg shadow-lg"
            : "bg-white text-black grid grid-cols-1 lg:grid-cols-2 gap-8  p-6 rounded-lg shadow-lg"
        }
      >
        <CountryFlag
          flagUrl={country.flags?.png}
          countryName={country.name?.common}
          country={country}
         
        />
        <div>
          <CountryDetails country={country} isDarkMode={isDarkMode} />

          <BorderingCountries
            borderingCountries={borderingCountries}
            navigate={navigate}
            isDarkMode={isDarkMode}
          />
        </div>
      </div>
    </div>
  );
}

export default CountryDetail;
