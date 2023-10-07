import React from 'react';

function Left(props) {
const {content} = props;
return (
    <div className="section">
      {/* <h2>Left Section</h2> */}
      <p>{content}</p>
    </div>
  );
}

export default Left;
