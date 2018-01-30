import React, { Component } from 'react';

const Tag = props => {
  return (
    <li className="chip">
      {props.name}
      <i className="close material-icons">close</i>
    </li>
  );
};

export default Tag;
