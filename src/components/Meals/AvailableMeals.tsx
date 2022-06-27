import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import React, { useEffect, useState } from "react";
import MealItem from "./MealItem/MealItem";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {  fetchMealLanding } from "../../features/meals/meals";
import Loader from "../Loader/Loader"

type MealType = {
  admin: string;
  amount: number;
  createdAt: string;
  description: string;
  name: string;
  price: number;
  updatedAt: string;
  __v: number;
  _id: string;
};

type Props = {};

const AvailableMeals = (props: Props) => {
  const dispatch = useAppDispatch();
  const { landingMeals:meal, mealLoading } = useAppSelector((store) => store.meals);
  const [search, setSearch] = useState("");

  const searched = meal.filter((item: MealType) => {
    if (item.name.toLowerCase().includes(search.toLowerCase())) {
      return item;
    }
  });

  useEffect(() => {
    dispatch(fetchMealLanding());
  }, [dispatch]);

  return (
    <section className={classes.meals}>
      <label className={` ${classes.label}`}>
        <input
          type="text"
          name="search"
          onChange={(e) => setSearch(e.target.value)}
          className={`${classes.input}`}
        />
        Search
      </label>

      <Card>
        <ul className= {classes.list}>

          {mealLoading && <Loader />}
          {searched.length === 0 && !mealLoading ? (
            <div> No Match</div>
          ) : (
            searched.map((each: MealType, index: number) => {
              return (
                <MealItem
                  key={index}
                  id={each._id}
                  name={each.name}
                  description={each.description}
                  price={each.price}
                  admin ={each.admin}
                />
              );
            })
          )}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
