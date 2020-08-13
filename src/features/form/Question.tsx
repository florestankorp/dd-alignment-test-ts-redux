import React from 'react';
import './Question.css';

export default function Question(props: any): any {
  return (
    <div>
      <p className="question">{props.question}</p>
      <div className="option">
        <input name={props.id} value="1" type="radio" ref={props.register} />
        <label htmlFor={props.id}>{props.option1}</label>
      </div>
      <div className="option">
        <input name={props.id} value="2" type="radio" ref={props.register} />
        <label htmlFor={props.id}>{props.option2}</label>
      </div>
      <div className="option">
        <input name={props.id} value="3" type="radio" ref={props.register} />
        <label htmlFor={props.id}>{props.option3}</label>
      </div>
      <div className="option">
        <input name={props.id} value="4" type="radio" ref={props.register} />
        <label htmlFor={props.id}>{props.option4}</label>
      </div>
    </div>
  );
}
