import React, { Component } from 'react';
import Tag from './tagChip';

const TagList = props => {
  return <div>{props.tags.map(tag => <Tag key={tag.id} {...tag} />)}</div>;
};

export default TagList;
