import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";

const CountryList = (props) => {
  const { cities, isLoading } = props;

  if (isLoading) return <Spinner />;

  console.log("cities: ", cities);

  const countries = cities.reduce((arr, city) => {
    const cityArray = arr.map((i) => i.country);

    if (!cityArray.includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    } else {
      return arr;
    }
  }, []);

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  return (
    <ul className={styles.countryList}>
      {(countries || []).map((country) => (
        <CountryItem country={country} />
      ))}
    </ul>
  );
};

export default CountryList;
