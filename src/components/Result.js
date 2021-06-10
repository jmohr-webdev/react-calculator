import React from 'react';

const Result = ({ result }) => {
  return (
    <form>
      <input type="text" placeholder="0" defaultValue={result} />
    </form>
  );
};

export default Result;
