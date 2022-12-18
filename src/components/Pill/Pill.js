import React from 'react';
import classNames from "classnames"
import { PropTypes } from 'prop-types';

export const Pill = (props) => {
  const {
    className,
    children,
    style,
  } = props

  const styleClass = `pill-style-${style.type}`
  const colorClass = `pill-color-${style.color}`

  const mediaCardClasses = classNames(
    className, 
    "pill",
    styleClass,
    colorClass
  )

  return (
    <div className={mediaCardClasses}>
        {children}
    </div>
  );
}

Pill.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
}

Pill.defaultProp = {
  style: {
    type: "primary",
    color: "primary"
  },
};
