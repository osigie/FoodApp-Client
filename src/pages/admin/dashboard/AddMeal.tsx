import Wrapper from "../../../assets/wrappers/DashboardFormPage";
import { useState, useEffect, useRef, FormEvent, ChangeEvent } from "react";
import FormRow from "../../../components/FormRow";
import Alert from "../../../components/Alert";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import {
  createMeal,
  clearAlert,
  setError,
  editMealFromBack,
} from "../../../features/admin/admin";
import {
  handleChangeOfInput,
  clearValues,
} from "../../../features/meals/meals";

export type MealType = {
  name: string;
  price: number;
  description: string;
  amount?: number;
};

const initialState = {
  name: "",
  price: "", //don't forget to convert to number
  description: "",
};

const AddMeal = () => {
  const dispatch = useAppDispatch();
  const { msg, admin, isAlert, isLoading, alertType } = useAppSelector(
    (store) => store.admin
  );
  const { isEdit, editJobId, name, description, price } = useAppSelector(
    (store) => store.meals
  );

  // const [state, setState] = useState(initialState);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !description || !price) {
      dispatch(
        setError({
          msg: "please input all fields",
          isAlert: true,
          alertType: "danger",
        })
      );
      dispatch(clearAlert());
      return;
    }
    if (!isEdit) {
      dispatch(
        createMeal({
          name,
          description,
          price: Number(price),
        })
      );
      return;
    }
    dispatch(
      editMealFromBack({
        editJobId,
        name,
        price,
        description,
      })
    );
  };

  useEffect(() => {
    if (isLoading) {
      dispatch(clearValues());
      // setState(initialState);
    }
  }, [isLoading]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    // console.log(value, name)
    // setState({ ...state, [e.target.name]: e.target.value });
    dispatch(handleChangeOfInput({ name, value }));
  };
  let text;

  if (!isEdit) {
    text = "create meal";
  } else {
    text = "edit meal";
  }

  return (
    <Wrapper>
      <form onSubmit={handleSubmit} className="form">
        <h3> {!isEdit ? "Add Meal" : "Edit Meal"}</h3>
        {isAlert && <Alert alertType={alertType} msg={msg} />}
        <div className="form-center">
          <FormRow
            labelText={"name"}
            type={"text"}
            value={name}
            handleChange={handleChange}
            name={"name"}
          />
          <FormRow
            labelText={"description"}
            type={"text"}
            value={description}
            handleChange={handleChange}
            name={"description"}
          />
          <FormRow
            labelText={"price"}
            type={"number"}
            value={price}
            handleChange={handleChange}
            name={"price"}
          />
          <button className="btn btn-block" type="submit" disabled={isLoading}>
            {isLoading ? "Please wait..." : text}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddMeal;
