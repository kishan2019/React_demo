import React from 'react';
import './Person.css';

const person = (props) => {
    return (
    <div className="person">
        <p onClick={ props.click }> I am {props.name } and I am { props.age } year old. </p>
        <p> { props.children } </p>
        <input type="text" placeholder="Enter your Name" onChange= {props.nameChange} value= {props.name} />
    </div>
    
    );
}

export default person;