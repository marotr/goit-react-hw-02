import css from './Feedback.module.css'
import { PiCoffeeBeanBold } from "react-icons/pi";

const Feedback = ({ totalFeedback, feedback , positiveFeedback }) => {
  
  
  

    return (
        <div>
            <ul className={css.listStyle}>
                <li><PiCoffeeBeanBold/> Good: {feedback.good}</li>
                <li><PiCoffeeBeanBold/> Neutral: {feedback.neutral}</li>
          <li><PiCoffeeBeanBold /> Bad: {feedback.bad}</li>
          <hr />
          <li>Total: { totalFeedback}</li>
          <li>Positive: {positiveFeedback}%</li>
          
            </ul>
        </div>
    );
};

export default Feedback