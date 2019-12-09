import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';

const Card = (props) => {
 // console.log(macros)

const classes = [styles.Card]
if(props.onClick) {
  classes.push(styles.isClickable)
}
classes.push(props.classes)

  return (
    <div onClick={props.onClick} className={classes.join(" ")}>
      {props.children}
  </div>
);
} 

Card.propTypes = {

};

Card.defaultProps = {};

export default Card;
