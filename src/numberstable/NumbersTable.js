import React, { useState } from 'react';
import './NumbersTable.css';

const NumbersTable = (props) => {
  let numArr = [...Array(props.limit)].map((_, idx) => idx + 1);

  return (
    <div className="numberstable">
      {numArr.map((elem) =>
        elem % 2 === 0 ? (
          <div
            style={{
              backgroundColor: 'red',
            }}
            className="numberstable-div"
          >
            {elem}
          </div>
        ) : (
          <div
            style={{
              backgroundColor: 'white',
            }}
            className="numberstable-div"
          >
            {elem}
          </div>
        )
      )}
    </div>
  );
};

export default NumbersTable;
