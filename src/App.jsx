
import { useState } from 'react';

import Options from './components/Options/Options'
import './App.css'
import Description from './components/Description/Description';
import { useEffect } from 'react';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification';

const App = () => {
    const [feedback, setFeedback] = useState(() => {
        const savedFeedback = window.localStorage.getItem("saved-feedback");
        return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
    });
  useEffect(() => {
        window.localStorage.setItem("saved-feedback", JSON.stringify(feedback));
  }, [feedback]);
  
  const updateFeedback = (type) => {
        setFeedback(prevFeedback => ({
            ...prevFeedback,
            [type]: prevFeedback[type] + 1
        }));
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = totalFeedback ? Math.round((feedback.good / totalFeedback) * 100) : 0;


  const handleReset = () => {
        setFeedback({ good: 0, neutral: 0, bad: 0 });
  };
  


      return (
    <>
          <Description/>
          <Options updateFeedback={updateFeedback} handleReset={handleReset} totalFeedback={totalFeedback} />
          {totalFeedback > 0 ? (<Feedback feedback={feedback} positiveFeedback={ positiveFeedback} />): 
          (<Notification />)}
           
     
    </>
  );
};

export default App
