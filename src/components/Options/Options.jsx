const Options = ({ updateFeedback, total, resetFeedback }) => {
  return (
    <div>
      <button type="button" onClick={() => updateFeedback('good')}>
        Good
      </button>
      <button type="button" onClick={() => updateFeedback('neutral')}>
        Neutral
      </button>
      <button type="button" onClick={() => updateFeedback('bad')}>
        Bad
      </button>
      {Boolean(total) && (
        <button
          type="button"
          onClick={resetFeedback}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
