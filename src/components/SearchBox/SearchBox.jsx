import s from "./SearchBox.module.css";
const SearchBox = ({ onInputChange, value }) => {
  const handelChange = (e) => {
    onInputChange(e.target.value);
  };
  return (
    <div className={s.SearchBoxContainer}>
      <label htmlFor="text">Find contacts by name</label>
      <input type="text" onChange={handelChange} value={value} />
    </div>
  );
};

export default SearchBox;
