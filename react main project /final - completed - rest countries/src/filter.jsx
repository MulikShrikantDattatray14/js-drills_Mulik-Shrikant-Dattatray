import React, { useState, useMemo, useEffect } from "react";
import { useDarkMode } from "./context";

const SearchFilter = ({ searchQuery, setSearchQuery }) => {
  const { isDarkMode } = useDarkMode();
  return (
    <div className={isDarkMode ? ' flex items-center bg-gray-400 p-2 rounded-lg w-full sm:w-1/4 mb-4 sm:mb-0 border-2  border-solid border-white' : ' flex items-center bg-gray-100 p-2 rounded-lg w-full sm:w-1/4 mb-4 sm:mb-0 border-2  border-solid border-black'}>
      <input
        type="text"
        placeholder="Search..."
        className="  bg-transparent outline-none text -sd text-black-800 w-full px-2 placeholder-gray-900"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

const RegionFilter = ({ regions, selectedRegion, setSelectedRegion }) => {
  const { isDarkMode } = useDarkMode();
  const sortedRegions = useMemo(() => regions.sort(), [regions]);

  return (
    <div className={isDarkMode ? 'flex items-center bg-gray-400 mb-4 sm:mb-0  border-2  border-solid border-white rounded-lg' : 'flex items-center bg-gray-100 mb-4 sm:mb-0  border-2  border-solid border-black rounded-lg'}>
      {/* <label htmlFor="region" className="text-sm mr-2">Region</label> */}
      <select
        id="region"
        className="bg-transparent outline-none text -sd text-black-800 w-full  rounded-lg p-2 rounded-lg"
        value={selectedRegion}
        onChange={(e) => setSelectedRegion(e.target.value)}
      >
        <option value="">Select Region</option>
        {sortedRegions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
};

const SubregionFilter = ({
  selectedRegion,
  subregions,
  selectedSubregion,
  setSelectedSubregion,
}) => {
  const sortedSubregions = useMemo(() => subregions.sort(), [subregions]);
  const { isDarkMode } = useDarkMode();
  return (
    <div className={isDarkMode ? 'flex items-center bg-gray-400 mb-4 sm:mb-0  border-2  border-solid border-white rounded-lg' : 'flex items-center bg-gray-100 mb-4 sm:mb-0  border-2  border-solid border-black rounded-lg'}>

      {/* <label htmlFor="subregion" className="text-sm mr-2">Subregion</label> */}
      <select
        id="subregion"
         className="bg-transparent outline-none text -sd text-black-800 w-full  rounded-lg p-2 rounded-lg"
        value={selectedSubregion}
        onChange={(e) => setSelectedSubregion(e.target.value)}
        disabled={!selectedRegion}
      >
        <option value="">Select Subregion</option>
        {sortedSubregions.map((subregion) => (
          <option key={subregion} value={subregion}>
            {subregion}
          </option>
        ))}
      </select>
    </div>
  );
};

const LanguageFilter = ({
  languages,
  selectedLanguage,
  setSelectedLanguage,
}) => {
  const sortedLanguages = useMemo(() => languages.sort(), [languages]);
  const { isDarkMode } = useDarkMode();
  return (
    <div className={isDarkMode ? 'flex items-center bg-gray-400 mb-4 sm:mb-0  border-2  border-solid border-white rounded-lg' : 'flex items-center bg-gray-100 mb-4 sm:mb-0  border-2  border-solid border-black rounded-lg'}>

      {/* <label htmlFor="language" className="text-sm mr-2">Language</label> */}
      <select
        id="language"
        className="bg-transparent outline-none text -sd text-black-800 w-full  rounded-lg p-2 rounded-lg"
        value={selectedLanguage}
        onChange={(e) => setSelectedLanguage(e.target.value)}
      >
        <option value="">Select Language</option>
        {sortedLanguages.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>
    </div>
  );
};

const SortFilter = ({ sortBy, setSortBy }) => {
  const sortOptions = [
    "population-asc",
    "population-desc",
    "area-asc",
    "area-desc",
  ];

  const sortedSortOptions = useMemo(() => sortOptions.sort(), [sortOptions]);
  const { isDarkMode } = useDarkMode();
  return (
    <div className={isDarkMode ? 'flex items-center bg-gray-400 mb-4 sm:mb-0  border-2  border-solid border-white rounded-lg' : 'flex items-center bg-gray-100 mb-4 sm:mb-0  border-2  border-solid border-black rounded-lg'}>
      {/* <label htmlFor="sort" className="text-sm mr-2">Sort By</label> */}
      <select
        id="sort"
        className="bg-transparent outline-none text -md text-black-900 w-full  rounded-lg p-2 rounded-lg"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="">Sort By</option>
        {sortedSortOptions.map((option) => (
          <option key={option} value={option}>
            {option
              .replace("-", " ")
              .replace(/\b\w/g, (char) => char.toUpperCase())}
          </option>
        ))}
      </select>
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

  const regions = useMemo(
    () => [...new Set(countries.map((country) => country.region))],
    [countries]
  );

  const subregions = useMemo(() => {
    if (!selectedRegion) return [];
    return [
      ...new Set(
        countries
          .filter((country) => country.region === selectedRegion)
          .map((country) => country.subregion)
      ),
    ];
  }, [countries, selectedRegion]);

  const languages = useMemo(() => {
    const allLanguages = countries.flatMap((country) =>
      Object.values(country.languages || {})
    );
    // console.log(allLanguages)
    return [...new Set(allLanguages)];
  }, [countries]);

  const applyFilters = () => {
    let filtered = countries;
    //console.log(filtered);
    if (searchQuery) {
      filtered = filtered.filter((country) =>
        country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedRegion) {
      filtered = filtered.filter(
        (country) => country.region === selectedRegion
      );
    }

    if (selectedSubregion) {
      filtered = filtered.filter(
        (country) => country.subregion === selectedSubregion
      );
    }

    if (selectedLanguage) {
      filtered = filtered.filter((country) =>
        Object.values(country.languages || {}).includes(selectedLanguage)
      );
    }

    if (sortBy) {
      const [key, order] = sortBy.split("-");
      filtered = [...filtered].sort((a, b) =>
        order === "asc" ? a[key] - b[key] : b[key] - a[key]
      );
    }

    setFilteredCountries(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [
    searchQuery,
    selectedRegion,
    selectedSubregion,
    selectedLanguage,
    sortBy,
  ]);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 p-6 bg-white-100 text-black">
      <SearchFilter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isDarkMode={isDarkMode}
      />
      <RegionFilter
        regions={regions}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        isDarkMode={isDarkMode}
      />
      <SubregionFilter
        selectedRegion={selectedRegion}
        subregions={subregions}
        selectedSubregion={selectedSubregion}
        setSelectedSubregion={setSelectedSubregion}
      />
      <LanguageFilter
        languages={languages}
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />
      <SortFilter
        sortBy={sortBy}
        setSortBy={setSortBy}
        isDarkMode={isDarkMode}
      />
    </div>
  );
};

export default FilterComponent;
