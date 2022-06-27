import React, { useEffect } from "react";
import SingleOrders from "../../../../components/SingleOrders/SingleOrders";
import classes from "./Orders.module.css";
import { getUser } from "../../../../features/admin/admin";
import { useAppSelector, useAppDispatch } from "../../../../app/hooks";
import Loader from "../../../../components/Loader/Loader"
type Props = {};

type OrdersType = {
  id: string;
  name: string;
  amount: number;
  price: number;
};

type UserType = {
  _id: string;
  name: string;
  street: string;
  postal: string;
  city: string;
  orders: Array<OrdersType>;
  createdAt: string;
  updatedAt: string;
};

const Orders = (props: Props) => {
  const dispatch = useAppDispatch();
  const { user, userLoading } = useAppSelector((store) => store.admin);

  useEffect(() => {
    dispatch(getUser());
  }, []);


    if (userLoading) {
      return (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Loader />
        </div>
      );
    }

  return (
    <div className={classes.mainContainer}>
      <h3>Custumer details and order</h3>
      {user.length === 0 && !userLoading ? (
        <h4 style={{marginTop: "20px"}}> No pending orders</h4>
      ) : (
        user.map((each: UserType, key) => {
          return (
            <div key={key} className={classes.card}>
              {<SingleOrders {...each} />}
            </div>
          );
        })
      )}
    </div>
  );
};

export default Orders;
