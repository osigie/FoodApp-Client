import { useEffect } from "react";
import Loading from "./Loading";
import SingleMeal from "./SingleMeal";
import Wrapper from "../assets/wrappers/MealsContainer";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { fetchData } from "../features/meals/meals";



type SingleMealType = {
  createdAt: string;
  price: string;
  _id: string;
  name: string;
  description: string;
  updatedAt:string
};

const MealContainer = () => {
  const { meal: meals } = useAppSelector((store) => store.meals);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);
  // if (isLoading) {
  //   return <Loading center = "" />;
  // }
  if (meals.length === 0) {
    return (
      <Wrapper>
        <h2> No meal to display....</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>
        {meals.length} Meal{meals.length > 1 && "s"}
      </h5>
      <div className="meals">
        {meals.map((meal: SingleMealType) => {
          return <SingleMeal key={meal._id} {...meal} />;
        })}
      </div>
    </Wrapper>
  );
};

export default MealContainer;
