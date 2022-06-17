import React, { ChangeEvent } from "react";

type FormProps = {
  value: string;
  labelText: string;
  name: string;
  type: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const FormRow = (props: FormProps) => {
  const { value, name, labelText, type, handleChange } = props;
  return (
    <label className="form-label">
      {labelText || "name"}
      <input
        type={type}
        value={value}
        className="form-input"
        onChange={handleChange}
        name={name}
      ></input>
    </label>
  );
};

export default FormRow;
