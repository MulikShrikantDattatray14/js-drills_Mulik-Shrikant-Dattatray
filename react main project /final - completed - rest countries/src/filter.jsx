import React, { useState, useMemo, useEffect } from "react";
import { useDarkMode } from "./context";
import Dropdown from "./Downdown";


const SearchFilter = ({ searchQuery, setSearchQuery }) => {
  const { isDarkMode } = useDarkMode();
  return (
    <div
      className={
        isDarkMode
          ? "flex items-center bg-gray-400 p-2 rounded-lg w-full sm:w-1/4 mb-4 sm:mb-0 border-2 border-solid border-white"
          : "flex items-center bg-gray-100 p-2 rounded-lg w-full sm:w-1/4 mb-4 sm:mb-0 border-2 border-solid border-black"
      }
    >
      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent outline-none text-black-800 w-full px-2 placeholder-gray-900"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

const FilterComponent = ({ countries, setFilteredCountries }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedSubregion, setSelectedSubregion] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [sortBy, setSortBy] = useState("");

  const { isDarkMode } = useDarkMode();

  const regions = useMemo(() => [...new Set(countries.map((country) => country.region))].sort(), [countries]);

  const subregions = useMemo(() => {
    if (!selectedRegion) return [];
    return [
      ...new Set(
        countries
          .filter((country) => country.region === selectedRegion)
          .map((country) => country.subregion)
      ),
    ].sort();
  }, [countries, selectedRegion]);
  
  const languages = useMemo(() => {
    const allLanguages = countries.flatMap((country) => Object.values(country.languages || {}));
    return [...new Set(allLanguages)].sort();
  }, [countries]);
  

  const applyFilters = () => {
    let filtered = countries;
    if (searchQuery) {
      filtered = filtered.filter((country) =>
        country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedRegion) {
      filtered = filtered.filter((country) => country.region === selectedRegion);
    }

    if (selectedSubregion) {
      filtered = filtered.filter((country) => country.subregion === selectedSubregion);
    }

    if (selectedLanguage) {
      filtered = filtered.filter((country) => Object.values(country.languages || {}).includes(selectedLanguage));
    }

    if (sortBy) {
      const [key, order] = sortBy.split("-");
      console.log(key,order)
      filtered = [...filtered].sort((a, b) => (order === "Asc" ? a[key] - b[key] : b[key] - a[key]));
    }

    setFilteredCountries(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [searchQuery, selectedRegion, selectedSubregion, selectedLanguage, sortBy]);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 p-6 bg-white-100 text-black">
      <SearchFilter searchQuery={searchQuery} setSearchQuery={setSearchQuery} isDarkMode={isDarkMode} />
      
      <Dropdown
        id="region"
        value={selectedRegion}
        onChange={(e) => setSelectedRegion(e.target.value)}
        options={regions}
        placeholder="Select Region"
      />
      
      <Dropdown
        id="subregion"
        value={selectedSubregion}
        onChange={(e) => setSelectedSubregion(e.target.value)}
        options={subregions}
        placeholder="Select Subregion"
        disabled={!selectedRegion}
      />
      
      <Dropdown
        id="language"
        value={selectedLanguage}
        onChange={(e) => setSelectedLanguage(e.target.value)}
        options={languages}
        placeholder="Select Language"
      />
      
      <Dropdown
        id="sort"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        options={[
          "population-Asc",
          "population-Desc",
          "area-Asc",
          "area-Desc",
        ]}
        placeholder="Sort By"
      />
    </div>
  );
};

export default FilterComponent;
