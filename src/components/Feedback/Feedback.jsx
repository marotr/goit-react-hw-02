import css from './Feedback.module.css'
import { PiCoffeeBeanBold } from "react-icons/pi";

const Feedback = ({ feedback }) => {
  
  const totalFeedback = feedback.good + feedback.bad + feedback.neutral;
  const positivePercentage = totalFeedback ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  if (totalFeedback === 0) {
    return (
      <p>No feedback yet</p>
      
    )
    
  }

    return (
        <div>
            <ul className={css.listStyle}>
                <li><PiCoffeeBeanBold/> Good: {feedback.good}</li>
                <li><PiCoffeeBeanBold/> Neutral: {feedback.neutral}</li>
          <li><PiCoffeeBeanBold /> Bad: {feedback.bad}</li>
          <hr />
          <li>Total: { totalFeedback}</li>
          <li>Positive: {positivePercentage}%</li>
          
            </ul>
        </div>
    );
};

export default Feedback