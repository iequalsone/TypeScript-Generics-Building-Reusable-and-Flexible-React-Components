interface SelectProps<T> {
  options: T[];
  labelKey: keyof T;
  valueKey: keyof T;
  onSelect: (selected: T) => void;
}

function Select<T>({ options, labelKey, valueKey, onSelect }: SelectProps<T>) {
  return (
    <select onChange={(e) => onSelect(options[Number(e.target.value)])}>
      {options.map((option, index) => (
        <option key={index} value={index}>
          {String(option[labelKey])}
        </option>
      ))}
    </select>
  );
}

export default Select;
