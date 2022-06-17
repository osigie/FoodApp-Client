import React from "react";
import AvailableMeals from "./AvailableMeals";
import MealSummary from "./MealsSummary";
import Footer from "../Layout/Footer/Footer";

type Props = {};

const Meals = (props: Props) => {
  return (
    <>
      <MealSummary />
      <AvailableMeals />
      <Footer />
    </>
  );
};

export default Meals;
