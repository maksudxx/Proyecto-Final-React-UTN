import Search from "../search/Search";
import FilterGenre from "../filter/FilterGenre";
import FilterPlatforms from "../filter/FilterPlatforms";
import { useVideogame } from "../../hooks/useVideogameForm";
import styles from "./SearchBar.module.css";


const SearchBar = () => {

  const { genres, platforms } = useVideogame();
  return (
    <div className={styles.container}>
      <FilterGenre props={genres} />
      <FilterPlatforms props={platforms} />
      <Search />
    </div>
  );
};

export default SearchBar;
