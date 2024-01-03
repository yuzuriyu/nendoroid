import { createContext, useState, useEffect } from "react";

const CountryContext = createContext();

const CountryContextProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchCountries = async () => {
      await fetch("https://restcountries.com/v3.1/all")
        .then((response) => response.json())
        .then((data) => setCountries(data));
    };
    fetchCountries();
  }, []);

  const value = {
    countries,
  };
  return (
    <CountryContext.Provider value={value}>{children}</CountryContext.Provider>
  );
};

export default CountryContextProvider;
export { CountryContext, CountryContextProvider };
