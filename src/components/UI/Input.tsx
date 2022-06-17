import classes from "./Input.module.css";
import React, { InputHTMLAttributes, LegacyRef } from "react";

type Props = {
  label: string;
  input: InputHTMLAttributes<HTMLInputElement>;
};

const Input = React.forwardRef(
  (props: Props, ref: LegacyRef<HTMLInputElement>) => {
    return (
      <div className={classes.input}>
        <label htmlFor={props.input.id}> {props.label}</label>
        <input ref={ref} {...props.input} />
      </div>
    );
  }
);

export default Input;
