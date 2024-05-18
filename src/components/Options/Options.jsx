import { useState } from 'react';
import css from './Options.module.css';
import Feedback from '../Feedback/Feedback';
import Buttons from './Buttons';

const Options = () => {
    const [feedback, setFeedback] = useState(() => {
        const savedFeedback = window.localStorage.getItem("saved-feedback");
        return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
    });

    const handleButtonGood = () => {
        setFeedback({ ...feedback, good: feedback.good + 1 })
    }

    const handleButtonNeutral = () => {
        setFeedback({ ...feedback, neutral: feedback.neutral + 1 })
    }
    const handleButtonBad = () => {
        setFeedback({ ...feedback, bad: feedback.bad + 1 })
    }
    const handleReset = () => {
        setFeedback({ good: 0, neutral: 0, bad: 0 })
    }
    const hasFeedback = feedback.good > 0 || feedback.neutral > 0 || feedback.bad > 0;

    return (<>
        <div className={css.optionButtons}>
            <Buttons label="Good" value={feedback.good} handleButton={handleButtonGood} />
            <Buttons label="Neutral" value={feedback.neutral} handleButton={handleButtonNeutral} />
            <Buttons label="Bad" value={feedback.bad} handleButton={handleButtonBad} />
            {hasFeedback ? <Buttons label="Reset" handleButton={handleReset} /> : null}         
            
        </div>
        <div><Feedback feedback={feedback} /></div></>
    )
  

};




export default Options