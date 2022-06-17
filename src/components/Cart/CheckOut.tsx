import React, { FormEvent, useRef, useState } from "react";
import classes from "./CheckOut.module.css";

export interface UserData {
  name: string | undefined;
  street: string | undefined;
  postal: string | undefined;
  city: string | undefined;
};

type Props = {
  onClick: () => void;
  sendData: (data: UserData) => void;
};

//Helper functions

const isEmpty = (value: string) => value.trim() === "";
const isFive = (value: string) => value.trim().length === 5;

const CheckOut = (props: Props) => {
  const [validateError, setValidateError] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });
  const nameRef = useRef<HTMLInputElement>(null);
  const streetRef = useRef<HTMLInputElement>(null);
  const postalRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);

  const confirmHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const enteredName = nameRef.current?.value;
    const entertedStreet = streetRef.current?.value;
    const enteredPostal = postalRef.current?.value;
    const enteredCity = cityRef.current?.value;

    const isValidName = !isEmpty(enteredName as string);
    const isValidStreet = !isEmpty(entertedStreet as string);
    const isValidCity = !isEmpty(enteredCity as string);
    const isValidPostal = isFive(enteredPostal as string);

    const formIsValid =
      isValidName && isValidStreet && isValidCity && isValidPostal;

    setValidateError({
      name: isValidName,
      street: isValidStreet,
      postal: isValidPostal,
      city: isValidCity,
    });
    if (!formIsValid) {
      return;
    } else {
      props.sendData({
        name: enteredName,
        street: entertedStreet,
        postal: enteredPostal,
        city: enteredCity,
      });
    }
  };

  const nameClasses = `${classes.control} ${
    validateError.name ? "" : classes.invalid
  }`;

  const postalClasses = `${classes.control} ${
    validateError.postal ? "" : classes.invalid
  }`;

  const streetClasses = `${classes.control} ${
    validateError.street ? "" : classes.invalid
  }`;

  const cityClasses = `${classes.control} ${
    validateError.city ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameRef} />
        {!validateError.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={streetClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetRef} />
        {!validateError.street && <p>Please enter a valid street!</p>}
      </div>
      <div className={postalClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalRef} />
        {!validateError.postal && <p>Please enter a valid postal!</p>}
      </div>
      <div className={cityClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityRef} />
        {!validateError.city && <p>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onClick}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default CheckOut;
