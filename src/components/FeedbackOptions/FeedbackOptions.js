import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => (
        // console.log(option)
        <button
          key={shortid.generate()}
          type="button"
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

//   <div>
//     <button type="button" onClick={onLeaveFeedback}>
//       Good
//     </button>
//     <button type="button" onClick={onLeaveFeedback}>
//       Neutral
//     </button>
//     <button type="button" onClick={onLeaveFeedback}>
//       Bad
//     </button>
//   </div>
