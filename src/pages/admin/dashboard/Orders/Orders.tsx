import React, { useEffect } from "react";
import SingleOrders from "../../../../components/SingleOrders/SingleOrders";
import { Props as OrdersType } from "../../../../components/SingleOrders/SingleOrders";
import classes from "./Orders.module.css";
import { getUser } from "../../../../features/admin/admin";
import { useAppSelector, useAppDispatch } from "../../../../app/hooks";
import Loader from "../../../../components/Loader/Loader";

const Orders = () => {
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
        <h4 style={{ marginTop: "20px" }}> No pending orders</h4>
      ) : (
        user.map((each: OrdersType, key) => {
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
