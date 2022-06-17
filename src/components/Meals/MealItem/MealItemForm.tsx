import React, { useRef, Ref, FormEvent, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
type Props = {
  onAddAmount: (arg: number) => void;
};

const MealItemForm = (props: Props) => {
  const [isValid, setIsValid] = useState(false);
  const inputRef: any = useRef();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const enteredAmount = inputRef.current.value;
    const enteredAmountNum = Number(enteredAmount);

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNum < 1 ||
      enteredAmountNum > 5
    ) {
      setIsValid(true);
      return;
    }
    props.onAddAmount(enteredAmountNum);
  };


  
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Input
        ref={inputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          defaultValue: "1",
          min: "1",
          max: "5",
          step: "1",
        }}
      />
      <button> + Add</button>
      {isValid && <p> Please enter a valid number (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
