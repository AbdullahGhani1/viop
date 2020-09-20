import React from 'react';
const Like = (props) => {
  let classes = 'fa fa-heart';
  return (
    <i
      style={{ cursor: 'pointer' }}
      onClick={props.onClick}
      className={!props.liked ? (classes += '-o') : classes}
      aria-hidden='true'
    />
  );
};

export default Like;
