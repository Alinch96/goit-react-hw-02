import { useState, useEffect } from 'react';
import Description from './components/Description/Description.jsx';
import Feedback from './components/Feedback/Feedback.jsx';
import Options from './components/Options/Options.jsx';
import Notification from './components/Notification/Notification.jsx';

function App() {
  const [feedback, setFeedback] = useState(() => {
    return JSON.parse(localStorage.getItem('feedback')) ?? {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  });

  useEffect(() => {
    console.log(feedback);
    localStorage.setItem('feedback', JSON.stringify(feedback))
  }, [feedback]);
  
  const updateFeedback = feedbackType =>
    setFeedback({ ...feedback, [feedbackType]: ++feedback[feedbackType] });

  const resetFeedback = () => setFeedback({ good: 0, neutral: 0, bad: 0 });
  
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
   const positive = Math.round((feedback.good / totalFeedback) * 100);


  return (
    <>
      <Description title="Sip Happens Café">
        Please leave your feedback about our service by selecting one of the
        options below.
      </Description>
      <Options updateFeedback={updateFeedback} total={totalFeedback} resetFeedback={resetFeedback} />
      {totalFeedback > 0 ? <Feedback feedback={feedback} total={totalFeedback} positive={positive} /> : <Notification>No feedback yet</Notification> }
    </>
  );
}

export default App;
