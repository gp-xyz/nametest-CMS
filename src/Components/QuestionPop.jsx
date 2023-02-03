import React, { useState } from 'react';

const QuestionPop = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button onClick={()=>setShowModal(!showModal)}>Why sign in?</button>
      {showModal && (
        <div className="message-box">
          <div className="message-box-header">
            <button className="close-button" onClick={()=>setShowModal(!showModal)}>X</button>
          </div>
          <div className="message-box-content">
            <p>Your actions will be tied to your wallet instead of a random anon name. No pressure</p>
            <button className="close-button" onClick={()=>setShowModal(!showModal)}> Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionPop;
