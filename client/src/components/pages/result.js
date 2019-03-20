import React from 'react';

const Result = (props) => (
    <div>
        <p> {props.from} </p>
        <p> {props.to} </p>
        <p> {props.title} </p>
        <p> {props.body} </p>
    </div>
);

export default Result;