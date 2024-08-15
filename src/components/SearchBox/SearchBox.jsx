import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectFilter } from "../../redux/filters/selectors";
import css from "./SearchBox.module.css";



export default function SearchBox() {
  const dispatch = useDispatch();
  const nameFilter = useSelector(selectFilter);

  //для зміни фільтра
  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <label>
      <input
        type="text"
        name="text"
        value={nameFilter}
        onChange={handleChange}
        placeholder="Enter task text..."
        className={css.input}
      />
    </label>
  );
}
