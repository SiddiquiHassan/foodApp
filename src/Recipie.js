import React from 'react';

const Recipie = (props) => {

    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.calorie}</p>
            <ol>
                {props.ingridients.map(ingridient =>(
                    <li>{ingridient.text}</li>
                ))}
            </ol>
            <img src={props.image} alt=""></img>
        </div>
    );

};

export default Recipie;