import React from 'react';

const Result = ({ filteredCountries }) => {
  return (
    <div className="text-center my-7 mx-5  ">
      <h1 className="text-lg">Showing {filteredCountries.length} {filteredCountries.length <= 1 ? "result" : "results"} out of 250</h1>
    </div>
  );
};

export default Result;

