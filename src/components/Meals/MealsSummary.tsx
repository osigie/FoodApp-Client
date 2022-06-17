import React from "react";

import classes from "./MealSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Committed to the quickest food delivery</h2>
      <p>
        A balanced diet is a cookie in each hand. Let food be thy medicine and
        medicine be thy food. We all eat, and it would be a sad waste of
        opportunity to eat badly. You don't need a silver fork to eat good food.
      </p>
      {/* <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p> */}
    </section>
  );
};

export default MealsSummary;
