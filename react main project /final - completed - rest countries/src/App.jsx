import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./header";
import CountryList from "./card";
import CountryDetail from "./countryDetails";
// import ToggleComponent from "./header";
import FilterComponent from "./filter";
import Result from "./result";
import { useDarkMode } from "./context";

// const ToggleSection = () => {
//   return <ToggleComponent />;
// };

const FilterSection = ({ countries, setFilteredCountries }) => {
  return (
    <FilterComponent
      countries={countries}
      setFilteredCountries={setFilteredCountries}
    />
  );
};

const ResultSection = ({ filteredCountries }) => {
  return <Result filteredCountries={filteredCountries} />;
};

const LoadingState = () => {
  return <p className="text-center">Loading...</p>;
};

const CountryListSection = ({ filteredCountries, loading }) => {
  return loading ? (
    <LoadingState />
  ) : (
    <CountryList countries={filteredCountries} />
  );
};

const HomePage = ({ countries, filteredCountries, setFilteredCountries,loading }) => {
  const { isDarkMode } = useDarkMode();
  return (
    <div
      className={
        isDarkMode ? "bg-gray-800 text-white " : "bg-white text-black "
      }
    >
      <Header />

      <FilterSection
        countries={countries}
        setFilteredCountries={setFilteredCountries}
      />

      <ResultSection filteredCountries={filteredCountries} />

      <CountryListSection
        filteredCountries={filteredCountries}
        loading={loading}
      />
    </div>
  );
};
const App = () => {
  const { isDarkMode } = useDarkMode();
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
        setFilteredCountries(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching countries:", error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              countries={countries}
              filteredCountries={filteredCountries}
              loading={loading}
              setFilteredCountries={setFilteredCountries}
            />
          }
        />
        <Route
          path="/country/:name"
          element={<CountryDetail countries={countries} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
