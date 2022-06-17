import Wrapper from "../../../assets/wrappers/DashboardFormPage";
import { useState, useEffect, useRef, FormEvent, ChangeEvent } from "react";
// import { FormRow, Alert } from "../../components/index";
import FormRow from "../../../components/FormRow";
import Alert from "../../../components/Alert";
// import { useAppContext } from "../../context/AppContext";
import { useAppSelector } from "../../../app/hooks";
import { store } from "../../../app/store";

const Profile = () => {
  // const { isAlert, isLoading, updateUser, user, changeAlert } = useAppContext();

  // const [state, setState] = useState({
  //   name: user?.name,
  //   lastName: user?.lastName,
  //   location: user?.location,
  //   email: user?.email,
  // });
  const { admin } = useAppSelector((store) => store.admin);
  // const [isAlert, setIsAlert] = useState(true);

  // const [isLoading, setIsLoading] = useState(true);
  // const [state, setState] = useState({
  //   name: "",
  //   lastName: "",
  //   location: "",
  //   email: "",
  // });

  // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   if (!state.name || !state.lastName || !state.email || !state.location) {
  //     // changeAlert();
  //     return;
  //   }

  //   // updateUser(state);
  // };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <Wrapper>
      <form className="form">
        <h3> Profile </h3>
        {/* {isAlert && <Alert  alertType = {"success"} msg = {"danger"}/>} */}
        <div className="form-center">
          <FormRow
            labelText={"name"}
            type={"text"}
            value={admin.name}
            handleChange={handleChange}
            name={"name"}
          />
          <FormRow
            labelText={"email"}
            type={"text"}
            value={admin.email}
            handleChange={handleChange}
            name={"email"}
          />
          {/* <button className="btn btn-block" type="submit" disabled={isLoading}>
            {isLoading ? "Please wait..." : "Save changes"}
          </button> */}
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
