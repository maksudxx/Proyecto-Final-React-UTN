import Search from "../search/Search";
import FilterGenre from "../filter/FilterGenre";
import FilterPlatforms from "../filter/FilterPlatforms";
import { useVideogame } from "../../hooks/useVideogameForm";
import styles from "./SearchBar.module.css";
import { genresList, platformsList } from "../../data/DataMenu";

const SearchBar = () => {
  return (
    <div className={styles.container}>
      <Search />
      <FilterGenre data={genresList.data} />
      <FilterPlatforms data={platformsList.data} />
    </div>
  );
};

export default SearchBar;
