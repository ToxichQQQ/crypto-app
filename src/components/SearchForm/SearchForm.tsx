import React, { FC } from "react";
import "./SearchForm.css";

interface SearchFormProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

export const SearchForm: FC<SearchFormProps> = ({
  value,
  onChange,
  onClick,
}) => {
  return (
    <div className="form">
      <input
        value={value}
        className="searchInput"
        onChange={(e) => onChange(e)}
      />
      <button onClick={onClick} className="resetButton"></button>
    </div>
  );
};
