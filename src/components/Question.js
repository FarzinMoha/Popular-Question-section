import React, { useState } from "react";

import {FaMinus , FaPlus} from 'react-icons/fa'

function Question(props) {
  const { title, text } = props.question;
  const [show , setShow] = useState(false)
  return (
    <div className="question">
      <div className="question-row">
        <h2>{title}</h2>
        <div>
        <button className="minplus-btn" onClick={() =>setShow(!show)}>{show ? <FaMinus/> : <FaPlus/>}</button>
        </div>
      </div>
      <div>
        <p>{show ? `${text}` : ''}</p>
      </div>
    </div>
  );
}

export default Question;
