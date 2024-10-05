import React, { useState } from 'react';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted: ", feedback);
    setFeedback('');
  };

  return (
    <div>
      <h2>Submit Your Feedback</h2>
      <form onSubmit={handleSubmit}>
        <textarea 
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Your feedback"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
