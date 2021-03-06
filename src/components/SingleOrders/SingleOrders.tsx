import React, { ReactNode, useState } from "react";
import Order from "../Order/Order";
import classes from "./SingleOrders.module.css";
import Wrapper from "../../assets/wrappers/tableWrapper";
import moment from "moment";
import Modal from "../UI/Modal";
import Table from "../table/table";


type Data = {
  id: string;
  name: string;
  amount: number;
  price: number;
  admin: string;
};

type Id = {
  id: string;
  name: string;
  street: string;
  postal: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type Props = {
  _id: Id,
   data: Array<Data>
};

const SingleOrders = (props: Props) => {
  let date = moment(props._id.createdAt).format("MMM Do YYYY  h:mm:ss");
  const [state, setState] = useState(false);

  const openModal = () => {
    setState(true);
  };
  const closeModal = () => {
    setState(false);
  };
  return (
    <div className={classes.singleOrdersContainer}>
      <header className={classes.headers}>
        <Wrapper>
          <ul className="responsive-table">
            <li className="table-header">
              <div className="col col-4">Name</div>
              <div className="col col-4">Street</div>
              <div className="col col-4">Postal</div>
              <div className="col col-4">City</div>
              <div className="col col-4">Time</div>
            </li>
            <li className="table-row">
              <div className="col col-4" data-label="Name">
                {props._id.name}
              </div>
              <div className="col col-4" data-label="Street">
                {props._id.street}
              </div>
              <div className="col col-4" data-label="Postal">
                {props._id.postal}
              </div>
              <div className="col col-4" data-label="City">
                {props._id.city}
              </div>

              <div className="col col-4" data-label="Date">
                {date}
              </div>
            </li>
          </ul>
        </Wrapper>
      </header>

      {state && (
        <Modal onClose={closeModal}>
          <Wrapper>
            <ul className="responsive-table">
              <li className="table-header">
                <div className="col col-4">Name</div>
                <div className="col col-4">Price</div>
                <div className="col col-4">Amount</div>
              </li>

              {props.data.map((order, index) => {
                return (
                  <li className="table-row" key={index}>
                    <div className="col col-4" data-label="Name">
                      {order.name}
                    </div>
                    <div className="col col-4" data-label="Price">
                      {order.price}
                    </div>
                    <div className="col col-4" data-label="Amount">
                      {order.amount}
                    </div>
                  </li>

                );
              })}
              
            </ul>

            <div className={classes.buttonDiv}>
              <button
                onClick={closeModal}
                className={`btn btn ${classes.closeBtn}`}
              >
                Close
              </button>
            </div>
          </Wrapper>
        </Modal>
      )}

      <button onClick={openModal} className={`btn ${classes.openBtn}`}>
        View Orders
      </button>
    </div>
  );
};

export default SingleOrders;
