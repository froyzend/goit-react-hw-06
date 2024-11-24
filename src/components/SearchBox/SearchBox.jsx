import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  const handleSearch = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.SearchBox}>
      <input
        type="text"
        value={filter}
        onChange={handleSearch}
        placeholder="Search contacts..."
      />
    </div>
  );
};

export default SearchBox;
