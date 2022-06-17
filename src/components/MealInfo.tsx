
import {ReactNode} from "react"
import Wrapper from "../assets/wrappers/MealInfo"


type MealInfoProps = {
  icon: ReactNode,
  text: string;
};  

const MealInfo = (props: MealInfoProps) => {
  return (
   <Wrapper> 
       <span className = "icon">{props.icon}</span>
       <span className = "text">{props.text}</span>
   </Wrapper>
  )
}

export default MealInfo