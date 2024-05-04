import React from 'react';
import './WorkCartStyles.css';

const WorkCart = (props) => {
  return (
    <div className="project-card">
        <div className="poster">
                <img src={props.imgsrc } alt="foodApp img" />
                </div>
                <div className="pro-details">
                <h2 className="project-title">{props.title}</h2>
                    <p>{props.text }</p>
                    <div className="pro-btns">
                    <a href={props.view} target="_blank" rel="noreferrer">
                        <button className={'btn'}>VIEW</button>
                        </a>
                    <a href={props.source} target="_blank" rel="noreferrer">
                        <button className={'btn'}>SOURCE</button>
                        </a>
                    </div>
                </div>
            </div>
  )
}

export default WorkCart
