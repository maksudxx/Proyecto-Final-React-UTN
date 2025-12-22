import Select from "react-select";
import styles from "./SelectForm.module.css";

const SelectForm = ({ title, option, handleSelectChange, field }) => {
  const placeholder = `seleccioná ${title}`;

  const customStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: "transparent",
      border: "none",
      borderBottom: "1px solid #fe9f02",
      borderRadius: 0,
      boxShadow: "none",
      minHeight: "50px",
      "&:hover": {
        borderBottom: "1px solid #fe9f02",
      },
    }),

    placeholder: (base) => ({
      ...base,
      color: "#fff",
      opacity: 1,
    }),

    singleValue: (base) => ({
      ...base,
      color: "#fe9f02",
    }),

    valueContainer: (base) => ({
      ...base,
      padding: "0 8px",
    }),

    input: (base) => ({
      ...base,
      color: "#fe9f02",
    }),

    menu: (base) => ({
      ...base,
      backgroundColor: "transparent",
    }),

    menuList: (base) => ({
      ...base,
      backgroundColor: "#141414",
      padding: 0,
    }),

    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused ? "rgba(254,159,2,0.1)" : "transparent",
      color: "#fe9f02",
      cursor: "pointer",
    }),

    indicatorSeparator: () => ({
      display: "none",
    }),

    dropdownIndicator: (base) => ({
      ...base,
      color: "#fe9f02",
      ":hover": {
        color: "#fe9f02",
      },
    }),
  };

  return (
    <section className={styles.containerSelect}>
      <p className={styles.titleCkeckbox}>{title}</p>
      <Select
        options={option}
        isMulti
        onChange={(selected) => handleSelectChange(selected, field)}
        placeholder={placeholder}
        styles={customStyles}
      />
    </section>
  );
};

export default SelectForm;
